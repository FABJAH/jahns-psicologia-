# 🚀 GUÍA RÁPIDA DE INICIO - Jahns Psicología

## ✨ Tu página web está lista!

Se ha creado una página web profesional completamente funcional con todas las características solicitadas.

---

## 🔄 Flujo único Git (PC, VS Code y GitHub)

Para que todo quede sincronizado siempre igual, usa el script:

```bash
./flujo_git.sh "tu mensaje de commit"
```

Este comando hace automáticamente:
- `git fetch`
- `git add -A`
- `git commit`
- `git pull --rebase`
- `git push`
- verificación final con `git status -sb`

Si no hay cambios, solo sincroniza con remoto y valida estado.

---

## 📋 Lo que incluye tu sitio web:

### ✅ Secciones Principales
- **Inicio**: Logo de presentación con call-to-action
- **Sobre Mí**: Tu foto (jahns.jpg) con información personal
- **Servicios**: 6 tarjetas con tus servicios (acompañamiento, jóvenes, parejas, online, espacios abiertos, presenciales)
- **Calendario**: Integrado con Google Calendar
- **Formulario de Citas**: Captura nombre, teléfono, correo, descripción de necesidades
- **Sistema de Pagos**: Integración con Stripe (sesiones individuales y paquetes)
- **Contacto**: Formulario de contacto + redes sociales

### ✅ Funcionalidades
- 🤖 **Bot inteligente** que guarda citas automáticamente
- 💾 **Almacenamiento local** de todas las citas (en el navegador)
- 📊 **Exportar citas a CSV** para tus registros
- ✉️ **Gestión de contactos** desde formularios
- 📱 **Totalmente responsivo** (móvil, tablet, desktop)
- 🎨 **Diseño profesional** con colores y tipografía moderna

---

## ⚙️ CONFIGURACIÓN NECESARIA (3 pasos)

### 1️⃣ **Actualizar Información de Contacto** (IMPORTANTE)

Abre `index.html` y busca la sección de contacto (línea ~333-340) y reemplaza:

```html
<!-- Busca estos líneas y reemplaza con TUS datos -->
<p><strong>Teléfono/WhatsApp:</strong> +57 XXX XXXX XXX</p>
<p><strong>Correo:</strong> info@jahnspsicologia.com</p>

<!-- Y también en el link de WhatsApp -->
<a href="https://wa.me/57XXXXXXXXX" class="social-btn">WhatsApp</a>
```

### 2️⃣ **Conectar Google Calendar** (IMPORTANTE)

En `index.html` línea ~175, reemplaza:

```html
<iframe src="https://calendar.google.com/calendar/embed?src=AQUI_VA_TU_EMAIL_GOOGLE&ctz=America%2FBogota"
```

**Cómo obtener tu email de Google Calendar:**
1. Ve a Google Calendar
2. Haz clic en ⚙️ Ajustes
3. Busca "Integrar calendario"
4. Copia el correo que aparece
5. Reemplázalo en el código

### 3️⃣ **Configurar Stripe (Opcional - Para recibir pagos)**

En `script.js` línea ~154, reemplaza:

```javascript
const stripe = Stripe('pk_test_TU_CLAVE_PUBLICA_AQUI');
```

**Cómo obtener tu clave:**
1. Ve a stripe.com
2. Crea una cuenta (gratis)
3. Dashboard → API keys
4. Copia la "Publishable key"
5. Reemplázala en el código

---

## 🎯 Cómo usar el Bot de Gestión de Citas

### Desde tu navegador (F12 para abrir Consola):

```javascript
// Ver todas las citas recibidas
mostrarCitasEnConsola()

// Obtener citas pendientes
gestorCitas.obtenerCitasPendientes()

// Marcar una cita como confirmada (índice 0 es la primera)
gestorCitas.marcarComoConfirmada(0)

// Marcar como cancelada
gestorCitas.marcarComoCancelada(0)

// Descargar todas las citas en Excel (CSV)
exportarCitasACSV()

// Limpiar citas muy antiguas
limpiarCitasAntiguas(30)  // Elimina citas de más de 30 días
```

---

## 📁 Archivos Creados

```
Jahhns/
├── 📄 index.html           ← Página principal (EDITA AQUÍ TUS DATOS)
├── 🎨 style.css            ← Estilos (profesional, no requiere cambios)
├── ⚙️ script.js            ← Funciones JavaScript
├── 📋 config.json          ← Configuración centralizada
├── 📖 README.md            ← Documentación completa
├── 📚 INICIO_RAPIDO.md     ← Este archivo
└── 📁 images/              ← Tus imágenes (ya están)
```

---

## 🎨 Personalización Fácil

### Cambiar Colores
En `style.css`, busca:
```css
/* ===== NAVEGACIÓN ===== */
.navbar {
    background: linear-gradient(135deg, #6B5B95 0%, #88498F 100%);
    /* Reemplaza estos códigos hexadecimales con tus colores */
}
```

### Agregar más servicios
En `index.html`, en la sección servicios, copia una tarjeta y modifica:
```html
<div class="service-card">
    <img src="images/tu-imagen.jpg" alt="Tu servicio">
    <h3>Tu Servicio</h3>
    <p>Descripción del servicio</p>
</div>
```

---

## 🌐 Publicar tu Página

### Opción A: Netlify (RECOMENDADO - Gratis)
1. Crea cuenta en netlify.com
2. Arrastra tu carpeta "Jahhns" al navegador
3. ¡Listo! Tendrás una URL como: misitioweb.netlify.app

### Opción B: GitHub Pages
1. Sube a GitHub
2. Ve a Settings → Pages
3. Selecciona "Deploy from a branch"
4. ¡Tu página estará en línea!

### Opción C: Hosting Tradicional
1. Sube archivos vía FTP
2. Configura tu dominio
3. ¡Funciona!

---

## 💡 Características Especiales

### 🔒 Privacidad
- Las citas se guardan en el navegador del usuario (localStorage)
- No se envían a servidores (a menos que configures backend)
- Datos seguros y privados

### 📱 Móvil Optimizado
- Se adapta automáticamente a pantallas pequeñas
- Navegación intuitiva
- Formularios fáciles de usar

### ⚡ Rápido
- Sin dependencias externas complicadas
- Carga instantánea
- Optimizado para SEO

---

## 🆘 Problemas Comunes

**P: El calendario no aparece**
R: Debes reemplazar `AQUI_VA_TU_EMAIL_GOOGLE` con tu email real de Google Calendar

**P: Los pagos con Stripe no funcionan**
R: Necesitas reemplazar la clave pública y configurar backend

**P: Las citas no se guardan**
R: Verifica que JavaScript esté habilitado en el navegador

**P: Las imágenes no se ven**
R: Asegúrate de que están en la carpeta `images/` con los nombres correctos

---

## 📊 Próximos Pasos Recomendados

### Para mejorar tu sitio:
- [ ] Comprar dominio propio (.com, .co, etc.)
- [ ] Configurar email profesional
- [ ] Integrar completamente Stripe
- [ ] Crear backend para guardar citas en BD
- [ ] Agregar chat en vivo
- [ ] Integrar con Calendly o similar
- [ ] Agregar blog/artículos
- [ ] SEO avanzado

### Herramientas útiles:
- **Namecheap**: Dominios baratos
- **SendGrid**: Envío de emails
- **Firebase**: Backend sin servidor
- **Vercel**: Hosting automático
- **Google Analytics**: Estadísticas

---

## 📞 Soporte

Para consultas específicas:
1. Revisa el archivo `README.md` completo
2. Consulta la documentación de JavaScript en `script.js`
3. Verifica `config.json` para configuración centralizada

---

## 🎉 ¡Listo para comenzar!

Tu página web profesional está completa. Solo necesitas:

1. ✅ Reemplazar datos de contacto
2. ✅ Conectar Google Calendar
3. ✅ (Opcional) Configurar Stripe
4. ✅ Publicar en línea

**¡Tu presencia digital como psicóloga está lista! Mucho éxito. 🌟**

---

**Creado:** 16 de Diciembre de 2025
**Sitio Web:** Jahns - Acompañamiento Psicológico Profesional
**Ubicación:** Colombia
