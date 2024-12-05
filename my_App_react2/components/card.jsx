// eslint-disable-next-line react/prop-types
function Card({titolo,immagine,testo}) {
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
            
        </div>
    )
}
export default Card