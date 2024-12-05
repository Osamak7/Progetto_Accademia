import './Navbar.css'
import Link from './Link'

const x = 30000;
const img = "../src/assets/images"; /* link dell' immagine */

const v = 12;
const img2 = "../src/assets/winx.webp";
const imgStyle = {
    height: v > 10 ? "50px" : "800px",
    borderRadius : "9px"
}

function Navbar() {
    return (
        <>
        <div id='box'> Ciao</div>
        <nav>{x}</nav>
        <img className='balo'  src={`/${img}.jpeg`} alt="" />
        <img style={imgStyle}  src={img2} alt="" />
        <ul>
            <li> <Link /></li>
            <li> <a href="#"> Ciao  </a></li>
            <li> <a href="#"> Ciao  </a></li>
            <li> <a href="#"> Ciao  </a></li>
            <li> <a href="#"> Ciao  </a></li>

        </ul>
    </>
    )
}
export default Navbar