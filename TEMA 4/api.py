from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///produse.db'
db = SQLAlchemy(app)

class Produs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nume = db.Column(db.String(50), nullable=False)
    descriere = db.Column(db.String(200))
    pret = db.Column(db.Float, nullable=False)

@app.route('/produse', methods=['GET'])
def get_all_produse():
    produse = Produs.query.all()
    rezultat = []
    for produs in produse:
        date_produs = {
            'id': produs.id,
            'nume': produs.nume,
            'descriere': produs.descriere,
            'pret': produs.pret
        }
        rezultat.append(date_produs)
    return jsonify(rezultat)

@app.route('/produse/<int:id_produs>', methods=['GET'])
def get_produs(id_produs):
    produs = Produs.query.get_or_404(id_produs)
    date_produs = {
        'id': produs.id,
        'nume': produs.nume,
        'descriere': produs.descriere,
        'pret': produs.pret
    }
    return jsonify(date_produs)

@app.route('/produse', methods=['POST'])
def adauga_produs():
    date = request.get_json()
    produs_nou = Produs(nume=date['nume'], descriere=date['descriere'], pret=date['pret'])
    db.session.add(produs_nou)
    db.session.commit()
    return jsonify({'mesaj': 'Produs adaugat cu succes'}), 201

@app.route('/produse/<int:id_produs>', methods=['PUT'])
def actualizeaza_produs(id_produs):
    produs = Produs.query.get_or_404(id_produs)
    date = request.get_json()
    produs.nume = date['nume']
    produs.descriere = date['descriere']
    produs.pret = date['pret']
    db.session.commit()
    return jsonify({'mesaj': 'Produs actualizat cu succes'})

@app.route('/produse/<int:id_produs>', methods=['DELETE'])
def sterge_produs(id_produs):
    produs = Produs.query.get_or_404(id_produs)
    db.session.delete(produs)
    db.session.commit()
    return jsonify({'mesaj': 'Produs sters cu succes'})

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)

