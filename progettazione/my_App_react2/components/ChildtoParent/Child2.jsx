import React from "react";

function Child2({onUserChange}){

    const updateUser = () => {
        const newUser = {name: 'Mario', age:30};
        onUserChange(newUser);
    }
    return(
        <div>
            <button onClick={updateUser}>aggiorna dati utenti</button>
        </div>
    );
}
export default Child2;