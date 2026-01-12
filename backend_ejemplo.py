"""
BACKEND SUGERIDO PARA JAHNS PSICOLOGÍA
Usando Python con Flask
Este es un ejemplo de cómo guardar citas en una base de datos real
"""

# ===== INSTALACIÓN =====
# pip install flask flask-cors flask-sqlalchemy python-dotenv stripe

# ===== app.py =====
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import stripe
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuración de base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///jahns.db'
db = SQLAlchemy(app)

# Configuración de Stripe
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')

# ===== MODELOS DE BASE DE DATOS =====

class Cita(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    telefono = db.Column(db.String(20), nullable=False)
    correo = db.Column(db.String(120), nullable=False)
    introduccion = db.Column(db.Text, nullable=False)
    tipo_sesion = db.Column(db.String(50), nullable=False)  # online, presencial, espacios-abiertos
    fecha_solicitud = db.Column(db.DateTime, default=datetime.utcnow)
    fecha_cita = db.Column(db.DateTime, nullable=True)
    estado = db.Column(db.String(20), default='pendiente')  # pendiente, confirmada, cancelada
    notas = db.Column(db.Text)

    def to_dict(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'telefono': self.telefono,
            'correo': self.correo,
            'introduccion': self.introduccion,
            'tipo_sesion': self.tipo_sesion,
            'fecha_solicitud': self.fecha_solicitud.isoformat(),
            'fecha_cita': self.fecha_cita.isoformat() if self.fecha_cita else None,
            'estado': self.estado,
            'notas': self.notas
        }

class Contacto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    correo = db.Column(db.String(120), nullable=False)
    mensaje = db.Column(db.Text, nullable=False)
    fecha = db.Column(db.DateTime, default=datetime.utcnow)
    leido = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'correo': self.correo,
            'mensaje': self.mensaje,
            'fecha': self.fecha.isoformat(),
            'leido': self.leido
        }

class Pago(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cita_id = db.Column(db.Integer, db.ForeignKey('cita.id'), nullable=True)
    monto = db.Column(db.Integer, nullable=False)  # en centavos
    moneda = db.Column(db.String(3), default='COP')
    stripe_payment_id = db.Column(db.String(255))
    estado = db.Column(db.String(20), default='pendiente')  # pendiente, completado, fallido
    fecha = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'cita_id': self.cita_id,
            'monto': self.monto,
            'moneda': self.moneda,
            'estado': self.estado,
            'fecha': self.fecha.isoformat()
        }

# ===== RUTAS API =====

# CREATE - Crear nueva cita
@app.route('/api/citas', methods=['POST'])
def crear_cita():
    data = request.json

    try:
        nueva_cita = Cita(
            nombre=data.get('nombre'),
            telefono=data.get('telefono'),
            correo=data.get('correo'),
            introduccion=data.get('introduccion'),
            tipo_sesion=data.get('tipo_sesion')
        )

        db.session.add(nueva_cita)
        db.session.commit()

        # Aquí podrías enviar un email de confirmación
        # enviar_email_confirmacion(nueva_cita)

        return jsonify({
            'mensaje': 'Cita creada exitosamente',
            'cita': nueva_cita.to_dict()
        }), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

# READ - Obtener todas las citas
@app.route('/api/citas', methods=['GET'])
def obtener_citas():
    estado = request.args.get('estado')  # Filtrar por estado (opcional)

    if estado:
        citas = Cita.query.filter_by(estado=estado).all()
    else:
        citas = Cita.query.all()

    return jsonify({
        'total': len(citas),
        'citas': [cita.to_dict() for cita in citas]
    }), 200

# READ - Obtener una cita específica
@app.route('/api/citas/<int:cita_id>', methods=['GET'])
def obtener_cita(cita_id):
    cita = Cita.query.get(cita_id)

    if not cita:
        return jsonify({'error': 'Cita no encontrada'}), 404

    return jsonify(cita.to_dict()), 200

# UPDATE - Actualizar estado de cita
@app.route('/api/citas/<int:cita_id>', methods=['PUT'])
def actualizar_cita(cita_id):
    cita = Cita.query.get(cita_id)

    if not cita:
        return jsonify({'error': 'Cita no encontrada'}), 404

    data = request.json
    cita.estado = data.get('estado', cita.estado)
    cita.fecha_cita = data.get('fecha_cita', cita.fecha_cita)
    cita.notas = data.get('notas', cita.notas)

    db.session.commit()

    return jsonify({
        'mensaje': 'Cita actualizada',
        'cita': cita.to_dict()
    }), 200

# DELETE - Cancelar cita
@app.route('/api/citas/<int:cita_id>', methods=['DELETE'])
def eliminar_cita(cita_id):
    cita = Cita.query.get(cita_id)

    if not cita:
        return jsonify({'error': 'Cita no encontrada'}), 404

    cita.estado = 'cancelada'
    db.session.commit()

    return jsonify({'mensaje': 'Cita cancelada'}), 200

# ===== CONTACTOS =====

@app.route('/api/contactos', methods=['POST'])
def crear_contacto():
    data = request.json

    nuevo_contacto = Contacto(
        nombre=data.get('nombre'),
        correo=data.get('correo'),
        mensaje=data.get('mensaje')
    )

    db.session.add(nuevo_contacto)
    db.session.commit()

    return jsonify({
        'mensaje': 'Mensaje recibido',
        'contacto': nuevo_contacto.to_dict()
    }), 201

@app.route('/api/contactos', methods=['GET'])
def obtener_contactos():
    contactos = Contacto.query.all()
    return jsonify([contacto.to_dict() for contacto in contactos]), 200

# ===== PAGOS CON STRIPE =====

@app.route('/api/pagos/intento', methods=['POST'])
def crear_intento_pago():
    data = request.json

    try:
        intento = stripe.PaymentIntent.create(
            amount=data.get('monto'),
            currency=data.get('moneda', 'cop').lower(),
            metadata={
                'cita_id': data.get('cita_id'),
                'correo': data.get('correo')
            }
        )

        # Guardar el pago en BD
        pago = Pago(
            cita_id=data.get('cita_id'),
            monto=data.get('monto'),
            moneda=data.get('moneda', 'COP'),
            stripe_payment_id=intento['id'],
            estado='pendiente'
        )

        db.session.add(pago)
        db.session.commit()

        return jsonify({
            'client_secret': intento['client_secret'],
            'pago_id': pago.id
        }), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/api/pagos/confirmar', methods=['POST'])
def confirmar_pago():
    data = request.json
    pago_id = data.get('pago_id')

    pago = Pago.query.get(pago_id)
    if not pago:
        return jsonify({'error': 'Pago no encontrado'}), 404

    pago.estado = 'completado'

    # Actualizar cita asociada
    if pago.cita_id:
        cita = Cita.query.get(pago.cita_id)
        if cita:
            cita.estado = 'confirmada'

    db.session.commit()

    return jsonify({'mensaje': 'Pago confirmado'}), 200

# ===== ESTADÍSTICAS =====

@app.route('/api/estadisticas', methods=['GET'])
def estadisticas():
    total_citas = Cita.query.count()
    citas_confirmadas = Cita.query.filter_by(estado='confirmada').count()
    citas_pendientes = Cita.query.filter_by(estado='pendiente').count()

    ingresos_totales = db.session.query(db.func.sum(Pago.monto)).filter_by(estado='completado').scalar() or 0

    return jsonify({
        'total_citas': total_citas,
        'citas_confirmadas': citas_confirmadas,
        'citas_pendientes': citas_pendientes,
        'ingresos_totales': ingresos_totales / 100,  # Convertir de centavos
        'moneda': 'COP'
    }), 200

# ===== INICIALIZACIÓN =====

if __name__ == '__main__':
    with app.app_context():
        db.create_all()

    app.run(debug=True, port=5000)

# ===== CONFIGURACIÓN DE VARIABLES DE ENTORNO (.env) =====
# STRIPE_SECRET_KEY=sk_test_tu_clave_secreta_aqui
# STRIPE_PUBLISHABLE_KEY=pk_test_tu_clave_publica_aqui
# FLASK_ENV=development

# ===== ACTUALIZAR script.js PARA USAR API =====
# Reemplazar enviarDatosAlServidor() con:

"""
function enviarDatosAlServidor(datos) {
    fetch('http://localhost:5000/api/citas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Cita guardada:', data);
    })
    .catch((error) => console.error('Error:', error));
}
"""
