CREATE TABLE utenti (
    id SERIAL PRIMARY KEY,           -- ID unico per ogni utente
    nome VARCHAR(100) NOT NULL,      -- Nome dell'utente
    cognome VARCHAR(100) NOT NULL,  -- Cognome dell'utente
    email VARCHAR(100) UNIQUE NOT NULL, -- Email dell'utente (unica)
    password VARCHAR(255) NOT NULL,  -- Password dell'utente (può essere una stringa crittografata)
    eta INT NOT NULL                 -- Età dell'utente
);

CREATE TABLE eventi (
    id SERIAL PRIMARY KEY,           -- ID unico per ogni evento
    organizzatore VARCHAR(100) NOT NULL, -- Nome dell'organizzatore
    luogo VARCHAR(255) NOT NULL,     -- Luogo dell'evento
    data DATE NOT NULL,              -- Data dell'evento
    ora TIME NOT NULL,               -- Ora dell'evento
    genere VARCHAR(50)               -- Genere dell'evento (es. musica, sport, arte, ecc.)
);


CREATE TABLE registrazioni (
    id SERIAL PRIMARY KEY,          -- ID unico per ogni registrazione
    utente_id INT NOT NULL,         -- ID dell'utente
    evento_id INT NOT NULL,         -- ID dell'evento
    data_registrazione TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data e ora della registrazione
    FOREIGN KEY (utente_id) REFERENCES utenti(id), -- Riferimento alla tabella utenti
    FOREIGN KEY (evento_id) REFERENCES eventi(id)  -- Riferimento alla tabella eventi
);


-- Inserimento utenti
INSERT INTO utenti (nome, cognome, email, password, eta) 
VALUES ('Mario', 'Rossi', 'mario.rossi@example.com', 'password123', 30);

-- Inserimento eventi
INSERT INTO eventi (organizzatore, luogo, data, ora, genere)
VALUES ('Luigi Bianchi', 'Teatro Centrale', '2025-02-10', '20:00:00', 'Musica');

-- Inserimento registrazioni
INSERT INTO registrazioni (utente_id, evento_id)
VALUES (1, 1);  -- L'utente con ID 1 si registra all'evento con ID 1

