#!/usr/bin/env bash
set -euo pipefail

# Flujo único para mantener local y GitHub sincronizados.
# Uso:
#   ./flujo_git.sh "mensaje del commit"
#
# Si no pasas mensaje y hay cambios, el script te lo pedirá.

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

echo "[1/6] Verificando estado local..."
git status --short

echo "[2/6] Actualizando referencias remotas..."
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

  echo "[3/6] Agregando cambios..."
  git add -A

  echo "[4/6] Creando commit..."
  git commit -m "${COMMIT_MSG}"
else
  echo "[3/6] No hay cambios locales para commit."
  echo "[4/6] Se omite commit."
fi

echo "[5/6] Integrando cambios remotos (rebase)..."
if [[ "${UPSTREAM_EXISTS}" == "yes" ]]; then
  git pull --rebase
else
  git pull --rebase origin "${BRANCH}" || true
fi

echo "[6/6] Enviando cambios a GitHub..."
if [[ "${UPSTREAM_EXISTS}" == "yes" ]]; then
  git push
else
  git push -u origin "${BRANCH}"
fi

echo "Sincronizacion completa. Estado final:"
git status -sb
