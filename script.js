// ===== MANEJO DE FORMULARIO DE CITA =====
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const introduccion = document.getElementById('introduccion').value;
    const tipoSesion = document.getElementById('tipo-sesion').value;

    // Crear objeto con los datos
    const citaData = {
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        introduccion: introduccion,
        tipoSesion: tipoSesion,
        fecha: new Date().toISOString(),
        estado: 'pendiente'
    };

    // Guardar en localStorage
    let citas = JSON.parse(localStorage.getItem('citas')) || [];
    citas.push(citaData);
    localStorage.setItem('citas', JSON.stringify(citas));

    // Mostrar mensaje de éxito
    const formMessage = document.getElementById('formMessage');
    formMessage.className = 'form-message success';
    formMessage.textContent = '¡Cita solicitada con éxito! Pronto me pondré en contacto contigo.';

    // Limpiar formulario
    this.reset();

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        formMessage.className = 'form-message';
        formMessage.textContent = '';
    }, 5000);

    // Enviar datos a un servidor (opcional - reemplazar con tu API)
    enviarDatosAlServidor(citaData);
});

// ===== MANEJO DE FORMULARIO DE CONTACTO =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('contact-nombre').value;
    const correo = document.getElementById('contact-correo').value;
    const mensaje = document.getElementById('contact-mensaje').value;

    // Crear objeto con los datos
    const contactoData = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje,
        fecha: new Date().toISOString()
    };

    // Guardar en localStorage
    let contactos = JSON.parse(localStorage.getItem('contactos')) || [];
    contactos.push(contactoData);
    localStorage.setItem('contactos', JSON.stringify(contactos));

    // Mostrar alerta
    alert('¡Mensaje enviado! Te responderé pronto.');

    // Limpiar formulario
    this.reset();

    // Enviar datos a un servidor (opcional)
    enviarDatosAlServidor(contactoData);
});

// ===== FUNCIÓN PARA ENVIAR DATOS AL SERVIDOR =====
function enviarDatosAlServidor(datos) {
    // Esta función puede ser usada para enviar los datos a un backend
    // Por ejemplo, usar fetch para una API

    // Ejemplo básico (descomenta y ajusta según tu servidor):
    /*
    fetch('https://tu-servidor.com/api/citas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => console.log('Éxito:', data))
    .catch((error) => console.error('Error:', error));
    */
}

// ===== INTEGRACIÓN CON STRIPE =====
// Reemplazar con tu clave pública de Stripe
const stripe = Stripe('pk_test_TU_CLAVE_PUBLICA_AQUI');

document.querySelectorAll('.payment-button').forEach(button => {
    button.addEventListener('click', function() {
        const amount = this.getAttribute('data-amount');
        procesarPago(amount);
    });
});

function procesarPago(amount) {
    // Aquí se integraría con Stripe
    // Este es un ejemplo básico

    alert(`Procesando pago de $${amount} COP.\n\nEsta funcionalidad requiere configuración de Stripe.\nPor favor, contáctame para completar el pago.`);

    // Implementación completa de Stripe requeriría:
    // 1. Token de cliente de Stripe
    // 2. Backend que cree las sesiones de pago
    // 3. Webhooks para confirmar pagos
}

// ===== BOT PARA GESTIONAR CITAS =====
class GestorCitas {
    constructor() {
        this.citas = JSON.parse(localStorage.getItem('citas')) || [];
    }

    obtenerCitasPendientes() {
        return this.citas.filter(cita => cita.estado === 'pendiente');
    }

    obtenerCitasConfirmadas() {
        return this.citas.filter(cita => cita.estado === 'confirmada');
    }

    marcarComoCancelada(index) {
        if (this.citas[index]) {
            this.citas[index].estado = 'cancelada';
            this.guardarCitas();
        }
    }

    marcarComoConfirmada(index) {
        if (this.citas[index]) {
            this.citas[index].estado = 'confirmada';
            this.guardarCitas();
        }
    }

    guardarCitas() {
        localStorage.setItem('citas', JSON.stringify(this.citas));
    }

    enviarRecordatorio(index) {
        const cita = this.citas[index];
        if (cita) {
            // Aquí se podría enviar un email o SMS
            console.log(`Recordatorio enviado a ${cita.correo}`);
        }
    }
}

// Instanciar el gestor de citas
const gestorCitas = new GestorCitas();

// ===== FUNCIÓN PARA MOSTRAR CITAS EN CONSOLA =====
function mostrarCitasEnConsola() {
    console.log('=== CITAS PENDIENTES ===');
    gestorCitas.obtenerCitasPendientes().forEach((cita, index) => {
        console.log(`${index + 1}. ${cita.nombre} - ${cita.telefono} - ${cita.tipoSesion}`);
        console.log(`   Necesidad: ${cita.introduccion}`);
        console.log(`   Correo: ${cita.correo}`);
        console.log('---');
    });
}

// ===== INTEGRACIÓN CON GOOGLE CALENDAR =====
// Para integrar con Google Calendar, necesitarás:
// 1. Crear un proyecto en Google Cloud Console
// 2. Habilitar Google Calendar API
// 3. Obtener credenciales OAuth
// 4. Usar la librería de Google Calendar API

// Ejemplo básico (requiere más configuración):
function crearEventoEnGoogleCalendar(citaData) {
    // Esta función requeriría autenticación con Google
    // y acceso a la API de Google Calendar

    const event = {
        summary: `Cita: ${citaData.nombre}`,
        description: `Tipo: ${citaData.tipoSesion}\nNecesidad: ${citaData.introduccion}`,
        start: {
            dateTime: new Date().toISOString(),
            timeZone: 'America/Bogota'
        },
        end: {
            dateTime: new Date(Date.now() + 3600000).toISOString(),
            timeZone: 'America/Bogota'
        },
        attendees: [
            {email: citaData.correo}
        ]
    };

    // Aquí se enviaría la solicitud a Google Calendar API
}

// ===== NAVEGAR SUAVE ENTRE SECCIONES =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== VALIDACIÓN DE FORMULARIOS =====
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validarTelefono(telefono) {
    const re = /^\+?[\d\s\-\(\)]{10,}$/;
    return re.test(telefono);
}

// ===== SCROLL REVEAL ANIMATION =====
function initScrollReveal() {
    const storySection = document.querySelector('.story-section');

    if (!storySection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });

    observer.observe(storySection);

    // Animaciones adicionales para subsecciones
    const storyElements = document.querySelectorAll('.story-why, .story-approach');
    storyElements.forEach((el, index) => {
        const elemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('fade-in');
                    }, index * 200);
                }
            });
        }, {
            threshold: 0.3
        });

        elemObserver.observe(el);
    });
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada - Bot de gestión de citas activo');
    console.log('Escribe mostrarCitasEnConsola() en la consola para ver las citas');

    // Verificar citas almacenadas
    const citasAlmacenadas = JSON.parse(localStorage.getItem('citas')) || [];
    console.log(`Total de citas almacenadas: ${citasAlmacenadas.length}`);

    // Inicializar scroll reveal
    initScrollReveal();
});

// ===== EXPORTAR CITAS A CSV =====
function exportarCitasACSV() {
    const citas = JSON.parse(localStorage.getItem('citas')) || [];

    if (citas.length === 0) {
        alert('No hay citas para exportar');
        return;
    }

    let csv = 'Nombre,Teléfono,Correo,Tipo de Sesión,Necesidad,Fecha,Estado\n';

    citas.forEach(cita => {
        csv += `"${cita.nombre}","${cita.telefono}","${cita.correo}","${cita.tipoSesion}","${cita.introduccion}","${cita.fecha}","${cita.estado}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'citas_' + new Date().toISOString().slice(0, 10) + '.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

// ===== LIMPIAR CITAS ANTIGUAS =====
function limpiarCitasAntiguas(diasAntiguedad = 30) {
    const citas = JSON.parse(localStorage.getItem('citas')) || [];
    const ahora = new Date().getTime();
    const ms30dias = diasAntiguedad * 24 * 60 * 60 * 1000;

    const citasActuales = citas.filter(cita => {
        const fechaCita = new Date(cita.fecha).getTime();
        return (ahora - fechaCita) < ms30dias;
    });

    localStorage.setItem('citas', JSON.stringify(citasActuales));
    console.log(`${citas.length - citasActuales.length} citas antiguas eliminadas`);
}
