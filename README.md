# 🌿 Jahns - Acompañamiento Psicológico Profesional

## Descripción
Sitio web profesional para Jahns, psicóloga en Colombia especializada en acompañamiento psicológico, trabajo con parejas, jóvenes y sesiones online en espacios abiertos.

---

## 📋 Características Principales

✅ **Diseño Profesional y Responsivo**
- Navegación intuitiva
- Diseño moderno con gradientes y animaciones suaves
- Totalmente adaptable a dispositivos móviles

✅ **Secciones Principales**
1. **Inicio**: Logo y presentación con call-to-action
2. **Sobre Mí**: Información personal y enfoques terapéuticos
3. **Servicios**: Galería de 6 servicios principales
4. **Calendario**: Google Calendar embebido para disponibilidad
5. **Formulario de Citas**: Captura datos de clientes
6. **Pago**: Integración con Stripe (requiere configuración)
7. **Contacto**: Formulario de contacto y redes sociales

✅ **Bot Inteligente de Gestión de Citas**
- Almacena citas automáticamente en localStorage
- Gestiona estados: pendiente, confirmada, cancelada
- Exportar citas a CSV
- Recordatorios automáticos

✅ **Funcionalidades JavaScript**
- Guardado automático de citas y contactos
- Validación de formularios
- Navegación suave entre secciones
- Gestor de citas con métodos útiles

---

## 🛠️ Configuración Necesaria

### 1. **Google Calendar (Obligatorio)**
Para que el calendario funcione, reemplaza en `index.html`:

```html
<!-- Línea 179 -->
<iframe src="https://calendar.google.com/calendar/embed?src=AQUI_VA_TU_EMAIL_GOOGLE&ctz=America%2FBogota"
```

Reemplaza `AQUI_VA_TU_EMAIL_GOOGLE` con tu email de Google Calendar.

**Pasos:**
1. Ve a Google Calendar
2. Haz clic en "Ajustes" → "Calendarios"
3. Encuentra tu calendario
4. En la sección "Integrar", copia el correo electrónico

### 2. **Stripe (Opcional - Para Pagos)**
Para habilitar pagos:

1. Crea una cuenta en [Stripe.com](https://stripe.com)
2. Obtén tu clave pública desde el dashboard
3. Reemplaza en `script.js` (línea 154):
```javascript
const stripe = Stripe('pk_test_TU_CLAVE_PUBLICA_AQUI');
```

### 3. **Información de Contacto**
En `index.html`, actualiza:

**Línea 333-335:**
```html
<p><strong>Teléfono/WhatsApp:</strong> +57 XXX XXXX XXX</p>
<p><strong>Correo:</strong> info@jahnspsicologia.com</p>
<p><strong>Ubicación:</strong> Colombia</p>
```

**Línea 337:**
```html
<a href="https://wa.me/57XXXXXXXXX" class="social-btn" target="_blank">WhatsApp</a>
```

---

## 📱 Uso del Bot de Gestión de Citas

### Acceder desde la Consola del Navegador (F12)

```javascript
// Ver todas las citas pendientes
mostrarCitasEnConsola()

// Obtener citas pendientes
gestorCitas.obtenerCitasPendientes()

// Obtener citas confirmadas
gestorCitas.obtenerCitasConfirmadas()

// Marcar cita como confirmada
gestorCitas.marcarComoConfirmada(0)

// Marcar cita como cancelada
gestorCitas.marcarComoCancelada(0)

// Enviar recordatorio a una cita
gestorCitas.enviarRecordatorio(0)

// Exportar citas a CSV
exportarCitasACSV()

// Limpiar citas más antiguas de 30 días
limpiarCitasAntiguas(30)
```

### Datos Guardados Automáticamente

**localStorage['citas']:**
```json
{
  "nombre": "Juan Pérez",
  "telefono": "+57 300 123 4567",
  "correo": "juan@email.com",
  "introduccion": "Tengo ansiedad por el estrés laboral",
  "tipoSesion": "online",
  "fecha": "2025-12-16T10:30:00.000Z",
  "estado": "pendiente"
}
```

---

## 🎨 Personalización

### Colores
Los colores principales están definidos en el CSS:
- **Púrpura primario**: `#6B5B95`
- **Púrpura secundario**: `#88498F`
- **Oro/Amarillo**: `#FFD700`

### Tipografía
- **Headings**: Montserrat (600-700)
- **Body**: Poppins/Montserrat (400)

---

## 📁 Estructura de Archivos

```
Jahhns/
├── index.html          # Página principal
├── style.css           # Estilos profesionales
├── script.js           # Funcionalidades y bot
├── README.md           # Este archivo
└── images/
    ├── LOGO PSICOLOGA-01.png
    ├── jahns.jpg
    ├── ps1.jpeg - ps8.jpg
    └── [otras imágenes]
```

---

## 🚀 Cómo Publicar

### Opción 1: Hosting Gratuito (Netlify)
1. Sube el proyecto a GitHub
2. Conecta tu repositorio a Netlify
3. ¡Listo! Tu sitio estará en línea

### Opción 2: Hosting Tradicional
1. Sube los archivos vía FTP
2. Configura el dominio
3. ¡Listo!

### Opción 3: Vercel
1. Conecta tu repositorio GitHub
2. Deploy automático

---

## 📊 Backend Recomendado

Para funcionalidades completas, se recomienda:

### API para Guardar Citas
```python
# Flask/Django
POST /api/citas
{
  "nombre": "Juan",
  "telefono": "+57...",
  "correo": "juan@email.com",
  "introduccion": "...",
  "tipoSesion": "online"
}
```

### Envío de Emails
- **SendGrid** - Envío de confirmaciones
- **Twilio** - SMS/WhatsApp

### Base de Datos
- **Firebase** - Sin servidor
- **MongoDB** - NoSQL
- **PostgreSQL** - Relacional

---

## 🔐 Seguridad

⚠️ **Importante:**
- No guardes tokens de API en el código frontend
- Usa variables de entorno
- Valida siempre en el servidor
- HTTPS recomendado

---

## 📝 Notas Importantes

1. **localStorage tiene límite de 5-10MB**
   - Para muchas citas, usa una base de datos

2. **Stripe requiere HTTPS**
   - No funciona en localhost sin configuración especial

3. **Google Calendar integrado**
   - Solo muestra disponibilidad, no guarda citas automáticamente

4. **Privacidad**
   - Los datos están en localStorage del navegador del usuario
   - Para GDPR, implementa backend seguro

---

## 🆘 Soporte y Mejoras Futuras

### Mejoras Recomendadas
- [ ] Integración completa con Stripe
- [ ] Backend con Node.js/Express
- [ ] Base de datos para citas
- [ ] Envío de emails automáticos
- [ ] Sistema de pagos bancarios
- [ ] Integración real con Google Calendar
- [ ] Validación avanzada de formularios
- [ ] Analytics y estadísticas

### Contacto
Para consultas, actualiza el formulario de contacto con tus datos.

---

## 📄 Licencia
Sitio profesional - © 2025 Jahns Psicología

---

**¡Tu página web profesional está lista! 🎉**

Para cualquier duda sobre configuración, consulta las secciones anteriores o contacta a un especialista en web.
