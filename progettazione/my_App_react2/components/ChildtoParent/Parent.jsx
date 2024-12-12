import React, { useState } from "react";
import Child from "./Child";
import Child2 from "./Child2";

function Parent() {
    const [message, setMessage] = useState('');
    const handleMessage = (childMessage) => {
        setMessage(childMessage);
    };

    const [user, setUser] = useState(null); // Stato per memorizzare i dati dell'utente
    const handleUserChange = (newUser) => {
        setUser(newUser); // Aggiorna lo stato con il nuovo oggetto utente
    };

    return (
        <div>
            <h1>Messaggio dal child: {message}</h1>
            <Child onMessage={handleMessage} />
            <h1>
                Dati utente: 
                {user ? ` Nome: ${user.name}, Età: ${user.age}` : "Nessun dato utente"}
            </h1>
            <Child2 onUserChange={handleUserChange} />
        </div>
    );
}

export default Parent;
