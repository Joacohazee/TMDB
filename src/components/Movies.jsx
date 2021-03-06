import axios from "axios"
import React, { useEffect, useState } from "react"
import "../assets/movies.css"
import Cards from "../commons/Cards"
import Footer from '../commons/Footer'

const Movies = () => {
  const apiKey = "api_key=8c985c55f722c6d186cebc52640ac275&"
  const [data, setData] = useState([])
  const [sortBy, setSortBy] = useState("")
  const [findMethod, setFindMethod] = useState("discover")

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${findMethod}/movie?${apiKey}${sortBy}`
      )
      .then((res) => res.data)
      .then((data) => setData(data.results))
  }, [sortBy])

  return (
    <>
      <div className="content">
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu4"
            >
              <span>Mostrar por</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div>
            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <div>
                    <button
                      className="button is-white"
                      onClick={() => {
                        setFindMethod("discover")
                        setSortBy("sort_by=popularity.desc")}
                      }
                    >
                      <p>Popular</p>
                    </button>
                  </div>
                  <div>
                    <button
                      className="button is-white"
                      onClick={() => {
                        setFindMethod("discover")
                        setSortBy(
                          "primary_release_date.gte=2022-02-01&primary_release_date.lte=2022-03-10"
                        )
                        }
                      }
                    >
                      <p>En cartelera</p>
                    </button>
                  </div>
                  <div>
                    <button
                      className="button is-white"
                      onClick={() =>{
                        setFindMethod("discover")
                        setSortBy(
                          "primary_release_date.gte=2022-03-15&primary_release_date.lte=2022-10-22"
                        )
                      }
                      }
                    >
                      <p>Pr??ximamente</p>
                    </button>
                  </div>
                  <div>
                    <button
                      className="button is-white"
                      onClick={() => {
                        setFindMethod("discover")
                        setSortBy("certification=A&sort_by=ranked>85.desc")
                      }
                      }
                    >
                      <p>Mejor valoradas</p>
                    </button>
                  </div>
                  <div className="field has-addons">
                    <div className="control">
                      <input
                        onChange={(e) => {
                          setFindMethod("search")
                          setSortBy(`query=${e.target.value}`)
                          console.log("target", e.target.value)
                        }}
                        className="input"
                        type="text"
                        placeholder="Palabra clave"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content">
        {data.map((movie, i) => (
          <div key={i}>
            <Cards movie={movie} />
          </div>
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default Movies
