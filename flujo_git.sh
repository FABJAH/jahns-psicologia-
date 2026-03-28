#!/usr/bin/env bash
set -euo pipefail

# Flujo único para mantener local, repositorio y live sincronizados.
# Uso:
#   ./flujo_git.sh "mensaje del commit"
#
# Si no pasas mensaje y hay cambios, el script te lo pedirá.

# Repositorio que alimenta el sitio live (GitHub Pages).
LIVE_REPO_URL="https://github.com/FABJAH/jahns-psicologia-.git"
LIVE_BRANCH="main"

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || true)"
if [[ -z "${REPO_ROOT}" ]]; then
  echo "Error: este script debe ejecutarse dentro de un repositorio Git."
  exit 1
fi

cd "${REPO_ROOT}"

BRANCH="$(git branch --show-current)"
if [[ -z "${BRANCH}" ]]; then
  echo "Error: no se pudo detectar la rama actual."
  exit 1
fi

# Si no existe origin, no se puede sincronizar con GitHub.
if ! git remote get-url origin >/dev/null 2>&1; then
  echo "Error: no existe el remoto 'origin'."
  exit 1
fi

echo "Repositorio: ${REPO_ROOT}"
echo "Rama: ${BRANCH}"
echo "Remoto: $(git remote get-url origin)"
echo "Remoto live: ${LIVE_REPO_URL} (${LIVE_BRANCH})"

echo "[1/7] Verificando estado local..."
git status --short

echo "[2/7] Actualizando referencias remotas..."
git fetch origin

# Si la rama local no tiene upstream, lo configuramos en el primer push.
if git rev-parse --abbrev-ref --symbolic-full-name '@{u}' >/dev/null 2>&1; then
  UPSTREAM_EXISTS="yes"
else
  UPSTREAM_EXISTS="no"
fi

# Mensaje de commit opcional por argumento.
COMMIT_MSG="${1:-}"

# Detecta cambios (staged o unstaged).
if [[ -n "$(git status --porcelain)" ]]; then
  if [[ -z "${COMMIT_MSG}" ]]; then
    read -r -p "Escribe el mensaje del commit: " COMMIT_MSG
  fi

  if [[ -z "${COMMIT_MSG}" ]]; then
    echo "Error: mensaje de commit vacío."
    exit 1
  fi

  echo "[3/7] Agregando cambios..."
  git add -A

  echo "[4/7] Creando commit..."
  git commit -m "${COMMIT_MSG}"
else
  echo "[3/7] No hay cambios locales para commit."
  echo "[4/7] Se omite commit."
fi

echo "[5/7] Integrando cambios remotos (rebase)..."
if [[ "${UPSTREAM_EXISTS}" == "yes" ]]; then
  git pull --rebase
else
  git pull --rebase origin "${BRANCH}" || true
fi

echo "[6/7] Enviando cambios a repositorio de trabajo..."
if [[ "${UPSTREAM_EXISTS}" == "yes" ]]; then
  git push
else
  git push -u origin "${BRANCH}"
fi

echo "[7/7] Enviando cambios al repositorio live..."
git push "${LIVE_REPO_URL}" "${BRANCH}:${LIVE_BRANCH}"

echo "Sincronizacion completa. Estado final (repo de trabajo):"
git status -sb
echo "Commit actual publicado en live:"
git rev-parse --short HEAD
