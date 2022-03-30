import React, { useContext, useEffect } from "react"
import { Route, Routes } from "react-router"
import Login from "./components/Login"
import Register from "./components/Register"
import Content from "./components/Content"
import Favourites from "./components/Favourites"
import Movies from "./components/Movies"
import Nabvar from "./components/Nabvar"
import Series from "./components/Series"
import { AuthContext } from "./context/AuthContext"


function App() {
  const { toggleAuth } = useContext(AuthContext)

  useEffect(() => {
    const loggedPersistJSON = window.localStorage.getItem("loggedPersist")
    if (loggedPersistJSON) {
      const dataStorage = JSON.parse(loggedPersistJSON)
      console.log('storage',dataStorage);
       toggleAuth(dataStorage)
    }
  }, [])

  return (

      <div>
        <Nabvar />
        <hr />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    
  )
}

export default App
