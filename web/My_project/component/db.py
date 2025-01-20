import psycopg2
from psycopg2.extras import RealDictCursor
from flask import Flask, jsonify
from flask_cors import CORS
from datetime import time

app = Flask(__name__)
CORS(app)  # Abilita CORS per tutte le rotte
# CORS (Cross-Origin Resource Sharing), che si verifica quando una richiesta HTTP viene effettuata da un dominio (in questo caso http://localhost:5173) 
# a un altro dominio (in questo caso http://127.0.0.1:5004), ma il server non consente esplicitamente tale richiesta.

#per vedere l'ip della macchina sotto linux ip addr show
# Configurazione database
db_config = {
    "host": "localhost",  # Cambio con l'indirizzo IP della macchina
    "port": "5432",
    "dbname": "networking",
    "user": "postgres",
    "password": "postgres"
}

def get_db_connection():
    try:
        return psycopg2.connect(**db_config, cursor_factory=RealDictCursor) #  La sintassi ** decompone il dizionario db_config in attributi chiave valore
    # cursor_factory=RealDictCursor: Specifica il tipo di cursore da utilizzare. In questo caso:
    #RealDictCursor restituisce i risultati delle query come un elenco di dizionari, dove le chiavi sono i nomi delle colonne e
    #i valori sono i dati associati. Questo formato è molto utile per lavorare con dati strutturati, specialmente quando si usa JSON come risposta.
    except Exception as e:
        return str(e)

@app.route('/1', methods=['GET'])
def get_wp():
    
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM utenti")
        risultato = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify(risultato)
    

@app.route('/2', methods=['GET'])
def get_assenza():
    
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM Registrazioni")
        risultato = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify(risultato)
    

@app.route('/3', methods=['GET'])
def get_persona():
    
        connection = get_db_connection()
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM eventi")
        risultato = cursor.fetchall()
        cursor.close()
        connection.close()
        # Converti i campi di tipo 'time' in stringhe
        for record in risultato:
            for key, value in record.items():
                if isinstance(value, time):
                    record[key] = value.strftime("%H:%M:%S")  # Converti in formato 'HH:MM:SS'


        return jsonify(risultato)
   
@app.route('/4/<string:table_name>', methods=['GET'])
def get_table(table_name):
    try:
        connection = get_db_connection()
        cursor = connection.cursor()
        query = f"SELECT * FROM {table_name}"
        cursor.execute(query)
        risultato = cursor.fetchall()
        cursor.close()
        connection.close()
        return jsonify(risultato)
    except psycopg2.Error as e:
        return jsonify({"error": f"Errore nel database : {str(e)}"}), 500
    

@app.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": "Risorsa non trovata"}), 404

@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({"error": "Errore interno del server"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5004)

