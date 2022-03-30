import axios from 'axios';
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const Fav = ({ element }) => {
  const { user } = useContext(AuthContext )

    const handleClick = () => {
        alert('Añadido a fav.... diria si lo haria')
        // axios.put(`http://localhost:3001/api/fav/${user.id}`, {
        //   favourites: element
        // })

        
    }

  return (
    <button className='icon' onClick={handleClick}>Fav</button>
  )
}

export default Fav