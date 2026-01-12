# 🔧 PERSONALIZACIONES COMUNES

Esta guía te muestra cómo hacer cambios comunes sin complicaciones.

---

## 1️⃣ Cambiar el Título y Descripción de la Página

**Archivo:** `index.html` (líneas 1-10)

```html
<!-- BUSCA -->
<title>Jahns - Psicología y Acompañamiento</title>

<!-- REEMPLAZA CON -->
<title>Tu Nombre - Tu Especialidad</title>
```

---

## 2️⃣ Actualizar Información de Contacto

**Archivo:** `index.html` (línea ~333-340)

```html
<!-- BUSCA -->
<p><strong>Teléfono/WhatsApp:</strong> +57 XXX XXXX XXX</p>
<p><strong>Correo:</strong> info@jahnspsicologia.com</p>
<p><strong>Ubicación:</strong> Colombia</p>

<!-- REEMPLAZA CON TUS DATOS -->
<p><strong>Teléfono/WhatsApp:</strong> +57 300 123 4567</p>
<p><strong>Correo:</strong> tu@email.com</p>
<p><strong>Ubicación:</strong> Tu Ciudad, Colombia</p>
```

También actualiza el link de WhatsApp:
```html
<!-- BUSCA -->
<a href="https://wa.me/57XXXXXXXXX" class="social-btn" target="_blank">WhatsApp</a>

<!-- REEMPLAZA -->
<a href="https://wa.me/573001234567" class="social-btn" target="_blank">WhatsApp</a>
```

---

## 3️⃣ Cambiar Precios de Sesiones

**Archivo:** `index.html` (línea ~275-290)

```html
<!-- BUSCA -->
<p class="price">$60.000 COP</p>

<!-- REEMPLAZA CON -->
<p class="price">$70.000 COP</p>
```

---

## 4️⃣ Modificar Descripciones de Servicios

**Archivo:** `index.html` (línea ~150-165)

```html
<!-- BUSCA -->
<div class="service-card">
    <img src="images/ps1.jpeg" alt="Acompañamiento Psicológico">
    <h3>Acompañamiento Psicológico</h3>
    <p>Sesiones personalizadas para trabajar en tus necesidades específicas y encontrar soluciones efectivas.</p>
</div>

<!-- REEMPLAZA CON -->
<div class="service-card">
    <img src="images/ps1.jpeg" alt="Mi Nuevo Servicio">
    <h3>Mi Nuevo Servicio</h3>
    <p>Descripción personalizada de tu nuevo servicio aquí.</p>
</div>
```

---

## 5️⃣ Cambiar Colores de la Página

**Archivo:** `style.css` (línea ~20-25)

Colores actuales:
- **Púrpura primario:** `#6B5B95`
- **Púrpura secundario:** `#88498F`
- **Oro/Amarillo:** `#FFD700`

### Ejemplo: Cambiar a colores azules

1. Abre `style.css`
2. Usa Ctrl+H (Buscar y reemplazar)
3. **Busca:** `#6B5B95`
4. **Reemplaza con:** `#1e3a8a` (azul oscuro)
5. Repite para `#88498F` → `#3b82f6` (azul claro)
6. Repite para `#FFD700` → `#fbbf24` (ámbar)

---

## 6️⃣ Agregar Más Servicios

**Archivo:** `index.html` (línea ~150)

Copia este bloque y agrégalo:

```html
<div class="service-card">
    <img src="images/ps7.jpg" alt="Nuevo Servicio">
    <h3>Nombre del Nuevo Servicio</h3>
    <p>Descripción del servicio.</p>
</div>
```

---

## 7️⃣ Conectar Google Calendar

**Archivo:** `index.html` (línea ~175)

```html
<!-- BUSCA -->
<iframe src="https://calendar.google.com/calendar/embed?src=AQUI_VA_TU_EMAIL_GOOGLE&ctz=America%2FBogota"

<!-- REEMPLAZA AQUI_VA_TU_EMAIL_GOOGLE CON -->
<!-- Por ejemplo: jahns@gmail.com -->
<iframe src="https://calendar.google.com/calendar/embed?src=jahns@gmail.com&ctz=America%2FBogota"
```

---

## 8️⃣ Cambiar Logo de Navegación

**Archivo:** `index.html` (línea ~21 y ~43)

Si quieres usar texto en lugar de imagen:

```html
<!-- BUSCA -->
<div class="logo-nav">
    <img src="images/LOGO PSICOLOGA-01.png" alt="Logo Jahns">
</div>

<!-- REEMPLAZA CON -->
<div class="logo-nav" style="font-size: 24px; font-weight: bold; color: white;">
    JAHNS
</div>
```

---

## 9️⃣ Cambiar Texto del Hero (Inicio)

**Archivo:** `index.html` (línea ~43-50)

```html
<!-- BUSCA -->
<h1>Jahns</h1>
<p class="hero-subtitle">Acompañamiento Psicológico Profesional</p>
<p class="hero-description">Conectemos para sanar y crecer juntos</p>

<!-- REEMPLAZA CON -->
<h1>Tu Nombre</h1>
<p class="hero-subtitle">Tu Especialidad Aquí</p>
<p class="hero-description">Tu lema o descripción aquí</p>
```

---

## 🔟 Cambiar Sección "Sobre Mí"

**Archivo:** `index.html` (línea ~65-80)

```html
<!-- BUSCA -->
<h2>Sobre Mí</h2>
<p>Soy una psicóloga comprometida con el bienestar integral de mis pacientes...</p>

<!-- REEMPLAZA CON -->
<h2>Mi Historia</h2>
<p>Tu biografía personalizada aquí...</p>
```

---

## 1️⃣1️⃣ Aumentar/Disminuir Tamaño de Fuentes

**Archivo:** `style.css`

Búsqueda por sección (reemplaza números):

```css
/* Para títulos principales */
.hero h1 {
    font-size: 3.5rem;  /* Cambia a 4rem para más grande */
}

/* Para subtítulos */
.hero-subtitle {
    font-size: 1.5rem;  /* Cambia a 1.8rem para más grande */
}

/* Para párrafos */
body {
    font-size: 1rem;  /* Cambia para todo el cuerpo del texto */
}
```

---

## 1️⃣2️⃣ Cambiar Espaciado entre Secciones

**Archivo:** `style.css`

Búsqueda: `padding: 5rem 2rem;`

```css
/* Esto controla el espacio arriba/abajo de cada sección */
.about {
    padding: 5rem 2rem;  /* Cambia a 3rem para menos espacio */
}

.services {
    padding: 5rem 2rem;  /* Cambia el número para ajustar */
}
```

---

## 1️⃣3️⃣ Cambiar Forma de los Botones

**Archivo:** `style.css`

```css
/* BUSCA */
.cta-button {
    border-radius: 50px;  /* Botones redondeados */
}

/* REEMPLAZA CON */
.cta-button {
    border-radius: 8px;   /* Botones con bordes suavemente redondeados */
    /* O usa 0 para botones rectos */
}
```

---

## 1️⃣4️⃣ Cambiar Efectos al Pasar el Mouse

**Archivo:** `style.css`

```css
/* Búsqueda: */
.service-card:hover {
    transform: translateY(-10px);  /* Mueve la tarjeta hacia arriba */
    box-shadow: 0 10px 30px rgba(107, 91, 149, 0.2);  /* Sombra */
}

/* REEMPLAZA translateY(-10px) CON: */
translateY(-5px);   /* Menos movimiento */
scale(1.05);        /* Se agranda */
rotate(-2deg);      /* Se rota */
```

---

## 1️⃣5️⃣ Usar Otra Imagen de Fondo en Hero

**Archivo:** `style.css` (línea ~92-94)

```css
/* BUSCA */
.hero {
    background: linear-gradient(135deg, rgba(107, 91, 149, 0.9), rgba(136, 73, 143, 0.9)),
                url('images/LOGO PSICOLOGA-01.png') center/cover;
}

/* REEMPLAZA LA RUTA DE IMAGEN CON OTRA */
url('images/tu-imagen.jpg')
```

---

## 1️⃣6️⃣ Cambiar Orden de Imágenes en Servicios

**Archivo:** `index.html` (línea ~150-165)

Simplemente cambia las rutas de las imágenes:

```html
<!-- Cambiar -->
<img src="images/ps1.jpeg" alt="...">

<!-- Por -->
<img src="images/ps8.jpg" alt="...">
```

---

## 1️⃣7️⃣ Agregar o Quitar Secciones

### Agregar una sección:
1. Copia una sección existente (por ejemplo, servicios)
2. Cambia el `id` para que sea único
3. Cambia los títulos y contenido
4. Agrega un link en la navegación

### Quitar una sección:
1. Elimina el `<section id="...">...</section>` completo
2. Elimina el link de la navegación correspondiente

---

## 🎯 CAMBIOS RÁPIDOS (Copy & Paste)

### Cambiar todos los precios fácilmente

En `config.json`:

```json
"paquetes": [
    {
        "nombre": "Sesión Individual",
        "precio": 60000,  // ← CAMBIA AQUÍ
    },
    {
        "nombre": "Paquete de 5 Sesiones",
        "precio": 250000,  // ← Y AQUÍ
    }
]
```

---

## ⚠️ COSAS QUE NO DEBES CAMBIAR

❌ No toques los nombres de las carpetas (`images/`)
❌ No cambies los IDs de los elementos (son necesarios para JavaScript)
❌ No elimines los `<script>` de Stripe y Google Calendar
❌ No cambies la estructura base del HTML (puede romper funciones)

---

## 💡 CONSEJOS FINALES

1. **Guarda respaldos**: Antes de cambiar algo importante, copia el archivo
2. **Prueba en localhost**: Abre la página en tu navegador antes de publicar
3. **Usa DevTools**: F12 en tu navegador para ver errores
4. **Pide ayuda**: Si algo no funciona, copia el error completo

---

¿Necesitas ayuda? Revisa el archivo `README.md` para documentación completa.
