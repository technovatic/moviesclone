import React from 'react'
import './Favorite.css';
import {useSelector} from 'react-redux'

function Favorite() {

  const data = useSelector((state) => state.fav.fav);
  console.log(data)

  return (
    <div>Favorite</div>
  )
}

export default Favorite