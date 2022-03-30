import React, { useContext } from "react"
import "../assets/cards.css"
import { AuthContext } from "../context/AuthContext"
import Fav from "../utils/Fav"
import "../assets/cards.css"

const Cards = ({ movie }) => {
  const { isAutenticated } = useContext(AuthContext)

  return (
    <div className="content">
      <div className="card" style={{ width: "16rem" }}>
        <div className="card-image">
          <figure>
            <div className="imagene">
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_bestv2${movie.poster_path}`}
                alt="Placeholder"
              />
            </div>
          </figure>
        </div>
        <div className="card-content contenido">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">{movie.title}</p>
            </div>
          </div>
          <div className="content">{movie.overview}</div>
        </div>
          {isAutenticated ? <Fav element={movie.id} /> : <></>}
      </div>
    </div>

  )
}

export default Cards
