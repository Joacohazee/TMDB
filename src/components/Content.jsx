///// 8c985c55f722c6d186cebc52640ac275   /////

import React, { useEffect, useState } from "react"
import axios from "axios"
import Cards from "../commons/Cards"
import "../assets/content.css"

const Content = () => {
  const apiKey = "api_key=8c985c55f722c6d186cebc52640ac275&"
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?${apiKey}sort_by=popularity.desc`
      )
      .then((res) => res.data)
      .then((data) => setData(data.results))
  }, [])

  return (
    <div id="content">
      {data.map((movie, i) => (
        <div key={i}>
          <Cards movie={movie} />
        </div>
      ))}
    </div>
  )
}

export default Content
