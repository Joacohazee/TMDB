import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import "./assets/index.css"
import "bulma/css/bulma.min.css"

import AuthContextProvider from './context/AuthContext'

ReactDOM.render(
  <AuthContextProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </AuthContextProvider>,
  document.getElementById("root")
)
