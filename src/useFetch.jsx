import React, { useEffect, useState } from 'react'
import axiosInstance from './AxiosInstance';

export default function useFetch(endPoint, currentPage=[]) {
    const [data, setData]= useState([]);
    const [isLoading, setIsLoading]= useState(false);
    const [isError, setIsError]= useState(false);

    function getData(){
        setIsLoading(true)
        axiosInstance.get(endPoint)
        .then( (res) => {
            setData(res.data)
        })
        .catch( (err) =>{
            setIsError(true)
        })
        setIsLoading(false)
    }

 useEffect( () =>{
    getData()
}, [currentPage])


  return {data, isLoading, isError}
}
