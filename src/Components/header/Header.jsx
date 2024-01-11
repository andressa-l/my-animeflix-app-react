import React, { useState } from "react"
import "./Header.css"
import logo from './logo-1.png'

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (

    <header className="header">
      <div className='container flexSB'>
        <nav className='flexSB'>
          <div className="logo">
            <a href='/'><img className="logo-img" src={logo} /></a>
          </div>
          <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
            <li>
              <a className="titulos" href='/'>Home</a>
            </li>
            <li>
              <a className="titulos" href='/'>Animes</a>
            </li>
            <li>
              <a className="titulos" href='/'>Comunidade</a>
            </li>

          </ul>
          <button className='toggle' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
        <div className='account flexSB'>
          <a href='/'><i className='fa fa-search'></i></a>
          <a href='/'><i class='fas fa-bell'></i></a>
          <a href='/'><i className='fas fa-user'></i></a>
          <button className="btn-inscrever">Inscreva-se</button>
        </div>
      </div>
    </header>

  )
}

export default Header