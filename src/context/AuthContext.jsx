// Crear el contexto para la autenticación de un usuario

import { createContext, useState } from "react"

// Defini un default state para nuestro contexto

const initialState = {
  user: null, // información del usuario
  isAutenticated: false, // si está logueado o no
  toggleAuth: () => null, // función para actualizar el contexto
}

export const AuthContext = createContext(initialState)

// crear componente Provider

const AuthContextProvider = ({ children }) => {
  const [ isLoggedId, setIsLoggedId ] = useState({
      user: null,
      isAutenticated: false
  })


  const toggleAuth = (user) => {
    setIsLoggedId({
      user: user,
      isAutenticated: !isLoggedId.isAutenticated,
    })
  }

  return (
    <AuthContext.Provider value={{ ...isLoggedId, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
