import axios from "axios"
import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { AuthContext } from "../context/AuthContext"

const Nabvar = () => {
  const { user, isAutenticated, toggleAuth } = useContext(AuthContext)

  console.log('USER',user)
  console.log('ISAUTH', isAutenticated)

  const handleClick = () => {
    axios.post('/api/logout')
    toggleAuth(AuthContext)
    window.localStorage.removeItem('loggedPersist')
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      {!isAutenticated ? (
                <>
                  <a className="navbar-item" href="https://www.themoviedb.org/">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
            width="112"
            height="28"
          />
        </a>
                </>
              ) : (
                <></>
              )}
        
        {/* <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/movies">
            Peliculas
          </Link>

          <Link className="navbar-item" to="/series">
            Series
          </Link>

          {
            isAutenticated ? (
              <Link className="navbar-item" to="/favourites">
            Mis favoritos
          </Link>
            ) : ( <></> )
          }

          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">Mas</div>

            <div className="navbar-dropdown">
              {/* <a className="navbar-item">Sobre la API</a>
              <a className="navbar-item">Trabajos</a>
              <a className="navbar-item">Contacta con nosotros</a> */}
              <a
                className="navbar-item"
                href="https://www.youtube.com/watch?v=mCdA4bJAGGk"
              >
                Reportar error
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
            
              {!isAutenticated ? (
                <>
                  <Link className="button is-primary" to="/register">
                    <strong>Registrarse</strong>
                  </Link>
                  <Link className="button is-light" to="/login">
                    Ingresar
                  </Link>
                </>
              ) : (
                <>
                <div>
                  <p className="navbar-item">Hola {user.user}</p>
                </div>
                <div>
                <button className="button is-primary" onClick={handleClick}>Salir</button>
                </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nabvar
