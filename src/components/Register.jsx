import React from "react"
import useInput from "../hooks/useInput"
import axios from "axios"
import { useNavigate } from "react-router"
import "../assets/register.css"

const Register = () => {
  const navigate = useNavigate()

  const user = useInput()
  const email = useInput()
  const password = useInput()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post("http://localhost:3001/api/register", {
        user: user.value,
        email: email.value,
        password: password.value,
      })
      .then(() => {
        alert("URSUARIO CREADO")
      })
      .then(() => navigate("/login"))
      .catch((err) => console.log("ERROR DEL POST NM", err))
  }

  return (
    <div className="form-register">
      <div className="register">
        <form onSubmit={handleSubmit}>
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                placeholder="Nombre de usuario"
                {...user}
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="email"
                placeholder="Email"
                {...email}
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                {...password}
                placeholder="Contraseña"
                required
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-success">Registrarse</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
