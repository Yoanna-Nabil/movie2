import React, { useState } from 'react'
import useFetch from './useFetch';

export default function Movies() {
    const [currentPage, setCurrentPage] = useState(1);      

    const {data, isError, isLoading}= useFetch(`/popular?page=${currentPage}`)
  

const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div className='row'>
      {data.results?.map( (mouvie) =>{
        return <div className='col-md-3' key={mouvie.id}>
        <div className='movie mt-3'>
             <img src={'https://image.tmdb.org/t/p/w500'+ mouvie.poster_path} className='w-100'/>
             <h3>{mouvie.original_title}</h3>
             <p>{mouvie.overview.split(" ").slice(0,10).join(" ")}</p>
        </div>
      </div>
      })}
       <div className='d-flex justify-content-center align-items-center mb-5'>
        <button
          className='btn btn-danger me-3'
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <button className='btn btn-secondary' onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  )
}
