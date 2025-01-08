import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'
import TodoList from '../components/TodoList'
import UserProfile from '../components/UserProfile'
import Parent from '../components/ChildtoParent/Parent'

import {BrowserRouter ,Route, Routes ,Link} from 'react-router-dom';
import Contact from '../components/Contact'
import About from '../components/About'
import Home from '../components/Home'

// function alertClick(){
//   alert("Blocco scam");
// }

// function handleChange(e){
//   console.log(e.target.value,"Ciao scammer");//prende il valore che scrivo e e lo mostra nella console 
// }

// function handleSubmit(e){
//   e.preventDefault(); // blocca il ricaricamento della pagina 
//   console.log(e);
// }


function App() {
  const [count, setCount] = useState(0)
  const cities =[
    {id:0,
      IsVisit:true,
      titolo:"Paesaggio annebiato",
      immagine: "https://images.unsplash.com/photo-1732468053948-bade8f3270cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
      testo : "bellllissimo"
    },
    {id:1,
      IsVisit:false,
      immagine : "https://images.unsplash.com/photo-1732450101559-fe986d910d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
      titolo:"Paesaggio innevato",
      testo : "anche meglio"
    }]
  return (
  <>
    
  <BrowserRouter>
    <div>
        <nav>
          <ul>

            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/About"> About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact </Link>
            </li>
          </ul>
        </nav>

          
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/About" element={<About />} />
        <Route path ="/Contact" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>


    <Parent/>
      <TodoList/>
      <UserProfile/>
      {cities.map((city)=>(
        <Card key={city.id}
        titolo={city.titolo}
        immagine={city.immagine}
        IsVisit={city.IsVisit}
        testo={city.testo}
        >
        </Card>
      ))}
      {/* {cities.filter((city)=> city.IsVisit).map((city)=>(
        <Card key={city.id}
        titolo={city.titolo}
        immagine={city.immagine}
        IsVisit={city.IsVisit}
        testo={city.testo}>
        </Card>
      ))}
       */}


      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <button onClick={alertClick}>
          alert
        </button>
        <input type="text" onChange={handleChange} />
        
        <form onSubmit={handleSubmit}>
          <button type='submit'>Cliccamiiiiii!!!!</button>
        </form> */}
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  </>
  )
}

export default App
