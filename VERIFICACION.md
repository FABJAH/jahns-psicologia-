# ✅ LISTA DE VERIFICACIÓN

Usa esta lista para asegurarte de que todo está completo antes de publicar.

---

## 📋 ARCHIVOS ESENCIALES

- [x] **index.html** - Página principal existe
- [x] **style.css** - Hoja de estilos existe
- [x] **script.js** - Archivo JavaScript existe
- [x] **images/** - Carpeta de imágenes existe

---

## 🔧 CONFIGURACIONES PENDIENTES

- [ ] Actualizar **teléfono/WhatsApp** en index.html
  - Línea: ~333
  - Busca: `+57 XXX XXXX XXX`
  - Reemplaza con: tu número real
  - También: enlace de WhatsApp línea ~337

- [ ] Actualizar **email de contacto** en index.html
  - Línea: ~334
  - Busca: `info@jahnspsicologia.com`
  - Reemplaza con: tu email real

- [ ] Conectar **Google Calendar** en index.html
  - Línea: ~175
  - Busca: `AQUI_VA_TU_EMAIL_GOOGLE`
  - Reemplaza con: tu email de Google Calendar

- [ ] Configurar **Stripe** en script.js (OPCIONAL)
  - Línea: ~154
  - Busca: `pk_test_TU_CLAVE_PUBLICA_AQUI`
  - Reemplaza con: tu clave pública de Stripe

---

## 🎨 PERSONALIZACIONES (OPCIONAL)

- [ ] Cambiar textos de secciones (hero, sobre mí, servicios)
- [ ] Ajustar precios si es necesario
- [ ] Agregar/quitar servicios
- [ ] Cambiar colores si lo deseas
- [ ] Revisar descripciones de servicios

---

## 🧪 PRUEBAS EN LOCAL

Antes de publicar, verifica en tu navegador:

### Abre index.html en tu navegador y comprueba:

- [ ] La navegación aparece en la parte superior
- [ ] El logo se ve correctamente
- [ ] El hero section se muestra bien
- [ ] Las imágenes se cargan (no ves X roja)
- [ ] El formulario de citas responde
- [ ] Puedes escribir en los campos
- [ ] El botón "Solicitar Cita" funciona
- [ ] El calendario intenta cargar
- [ ] La página se ve bien en móvil (F12 → Responsive)

### Pruebas de Funcionamiento

Abre la consola (F12) y ejecuta:

```javascript
// Debe mostrar las citas
mostrarCitasEnConsola()

// Debe devolver un array
gestorCitas.obtenerCitasPendientes()

// Llena un formulario y prueba
// Luego verifica que se guardó
```

---

## 📱 RESPONSIVE DESIGN

Verifica en diferentes dispositivos:

- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Móvil (375x667)

Usa F12 → Device Toolbar para probar

---

## 🔍 VALIDACIÓN DE CONTENIDO

- [ ] No hay errores en la consola (F12)
- [ ] No hay enlaces rotos
- [ ] Todas las imágenes tienen alt text
- [ ] Los formularios tienen labels
- [ ] No hay typos en textos

---

## 🔐 SEGURIDAD

- [ ] No hay contraseñas expuestas en código
- [ ] No hay tokens de API en el HTML
- [ ] Los formularios validan datos
- [ ] Las imágenes tienen tamaño optimizado

---

## 📊 ANTES DE PUBLICAR

- [ ] Haz respaldo de los archivos
- [ ] Prueba todo localmente
- [ ] Verifica compatibilidad navegadores
- [ ] Comprueba velocidad de carga
- [ ] Revisa SEO básico

---

## 🚀 PUBLICACIÓN

### Checklist Netlify:
- [ ] Carpeta lista con todos los archivos
- [ ] Archivo index.html en la raíz
- [ ] Carpeta images/ presente
- [ ] CSS y JS en la carpeta principal
- [ ] Crea cuenta en netlify.com
- [ ] Arrastra la carpeta
- [ ] Espera a que se construya
- [ ] Verifica el sitio en línea

### Después de Publicar:
- [ ] Accede a la URL pública
- [ ] Prueba formularios
- [ ] Verifica imágenes
- [ ] Prueba enlaces
- [ ] Comparte la URL

---

## 📞 CONTACTO Y REDES

Después de publicar:

- [ ] Actualiza tu bio de Instagram con el link
- [ ] Agrega a Facebook
- [ ] Comparte en WhatsApp
- [ ] Envía a clientes
- [ ] Incluye en email

---

## 📈 SEGUIMIENTO

Una vez en línea:

- [ ] Instala Google Analytics (opcional)
- [ ] Monitorea visitas
- [ ] Revisa formularios regularmente
- [ ] Actualiza contenido mensualmente
- [ ] Recopila feedback

---

## ⚠️ PUNTOS CRÍTICOS A RECORDAR

🔴 **CRÍTICO:**
- Google Calendar DEBE estar conectado
- Los contactos DEBEN estar actualizados
- Las imágenes DEBEN estar en la carpeta images/

🟡 **IMPORTANTE:**
- Las citas se guardan en el navegador del usuario
- Para múltiples citas, implementa backend
- HTTPS recomendado para Stripe

🟢 **OPCIONAL:**
- Stripe se puede configurar después
- Backend se puede agregar luego
- Personalizaciones de diseño sin prisa

---

## ✨ LISTA FINAL

Si todos los items están marcados:

✅ Tu página está **LISTA PARA PUBLICAR**

Próximos pasos:
1. Publica en Netlify, GitHub Pages o hosting
2. Configura dominio
3. Comienza a recibir citas
4. Expande tu presencia digital

---

**¡MUCHO ÉXITO CON TU PÁGINA WEB!** 🎉

Para más ayuda, consulta:
- README.md (documentación completa)
- INICIO_RAPIDO.md (guía rápida)
- PERSONALIZACIONES.md (cambios comunes)
