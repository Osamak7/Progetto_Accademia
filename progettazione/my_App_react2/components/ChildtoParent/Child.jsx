import React from "react";

function Child ({onMessage}) {
    const sendMessageToParent = () => {

        //invio il messagio al Parent tramite la bunzione onMessage
        onMessage('Ciao dal componente Child')
    }
        
    return(
        <div>
        <button onClick={sendMessageToParent}> invia messaggio al parent</button>
    </div>
);
};
export default Child;