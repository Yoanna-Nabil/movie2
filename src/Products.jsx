import React from 'react'
import Cart from './Cart';
import useFetch from './useFetch';
import { Audio } from 'react-loader-spinner'

export default function Products() {

const {data, isError, isLoading}= useFetch(`/popular`)


  return <>
    {isLoading == true ? 
      <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass/> : 
    (isError ? <h1>Can't fetch Data</h1> : <div className='row'>
    {data.results?.map((movie) => {
      return <Cart movie={movie} key={movie.id}/>
    })}
  </div>)
    }
    </>
  
}
