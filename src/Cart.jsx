import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart({movie}) {
  

  return (
    <div className='col-md-3  mt-5 position-relative'>
      <Link to={'/productDetails/'+ movie.id} className='movie'>
           <img src={'https://image.tmdb.org/t/p/w500'+ movie.poster_path} className='w-100'/>
           <h3>{movie.original_title}</h3>
           <p>{movie.overview.split(" ").slice(0,10).join(" ")}</p>
      </Link>

      
    </div>
  )
}
