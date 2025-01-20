import React, { useState, useEffect } from 'react';

const NavB = () => {
  const [data, setData] = useState([]);
  
  // Funzione per ottenere i dati
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Errore durante il recupero dei dati");
      }
      const result = await response.json();
      setData(result); // Imposta i dati recuperati nello stato
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  useEffect(() => {
    // Chiamata per recuperare i dati (ad esempio dalla rotta /1)
    fetchData("http://127.0.0.1:5004/1"); // Modifica questo URL con l'endpoint che desideri usare
  }, []); // Esegui solo al primo render

  return (
    <div>
      <nav className="navbar">
        <button onClick={() => fetchData("http://127.0.0.1:5004/1")}>Utenti</button>
        <button onClick={() => fetchData("http://127.0.0.1:5004/2")}>Registrazioni</button>
        <button onClick={() => fetchData("http://127.0.0.1:5004/3")}>Eventi</button>
        {/* Aggiungi altri pulsanti per altre tabelle se necessario */}
      </nav>

      {/* Visualizzazione dei dati */}
      <div>
        <h2>Risultati:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default NavB;
