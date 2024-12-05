// eslint-disable-next-line react/prop-types
function Card({titolo,immagine,testo, IsVisit}) {
    //const immagine = props.immagine
    //const titolo = props.titolo
    //const testo = props.testo
    
    return (
        <div> 
            <img src={immagine} alt="" />
            
        <div>

        </div>
            <h2>{titolo}</h2>
            <p>{testo}</p>
            {IsVisit ? <span><b>Visitato</b></span> :<span><b>Non Visitato</b></span> } 
            {/* {IsVisit && <span><b>Visitato</b></span>  } non e un and se e vero lo mostra o no */}
            
        </div>
    )
}
export default Card