import './App.css'

// add
import { Link, Outlet } from 'react-router-dom'

function Header() {

  return(
    <div>
      <h1 className="main-head-site-name">XYZ</h1>
      <Link className="main-head-site-links-acceuil" to="/">Acceuil</Link>        
      <Link className="main-head-site-links-a-propos" to="/about">À propos</Link>
      <hr className="main-seperator"/>
    </div>
  )

}


function App() {
  
  return (
    <>
      <Header/>
      <main>
        {/* App transmet la liste des tweets à TweetsList, qui l'affichera. */}
        <Outlet/>
      </main>
    </>
  )
}

export default App
