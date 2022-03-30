import React, { useContext, useEffect } from "react"
import useInput from "../hooks/useInput"
import axios from "axios"
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext"

const Login = () => {
  const { user, isAutenticated, toggleAuth } = useContext(AuthContext)

  const navigate = useNavigate()
  const email = useInput()
  const password = useInput()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("EL TARGET ")

    axios
      .post("http://localhost:3001/api/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data)
        window.localStorage.setItem("loggedPersist", JSON.stringify(data))
        toggleAuth(data)
        navigate("/")
      })
      .catch((err) => {
        alert("Contraseña incorrecta")
        console.log("ERROR DEL POST LOG", err)
      })
  }

  console.log("USER", user)
  console.log("ISAUTH", isAutenticated)

  return (
    <form onSubmit={handleSubmit} className="form-login">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="email"
            placeholder="Email"
            {...email}
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input
            class="input"
            type="password"
            placeholder="Contraseña"
            {...password}
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-success">Ingresar</button>
        </p>
      </div>
    </form>
  )
}

export default Login
