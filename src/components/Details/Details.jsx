import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
export default function Details() {
    let baseImgUrl='https://www.themoviedb.org/t/p/original';
    let[searchParam,setSearchParam]=useSearchParams();
    let[details,setDetails]=useState({})
    let currnetId=searchParam.get("id");
    async function getDetails(){
        let {data}=await axios.get(`https://api.themoviedb.org/3/movie/${currnetId}?api_key=c636ed7787cc302d96bf88ccf334e0d8`);
        setDetails(data);
        console.log(data)
    }
    useEffect(()=>{
        getDetails();
      },[])
  return( 
    <div className='container'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-6' >
            <img className=' w-100 py-5' src={baseImgUrl + details.poster_path}/>
        </div>
        <div className='col-md-6'>
            <h1 className='my-2 p-2'>{details.original_title}</h1>
            <h5 className='my-2 p-2'>{details.tagline}</h5>
            {/* <div className='d-flex'>
            <div className='p-1 rounded m-1 bg-info'>{details.genres[0].name}</div>
            <div className='p-1 rounded m-1 bg-info'>{details.genres[1].name}</div>
            <div className='p-1 rounded m-1 bg-info'>{details.genres[2].name}</div>
            </div> */}
            <h6 className='my-2 p-2'>vote : {details.vote_average}</h6>
            <h6 className='my-2 p-2'>vote code : {details.vote_count}</h6>
            <h6 className='my-2 p-2'>popularity : {details.popularity}</h6>
            <h6 className='my-2 p-2'>release date : {details.release_date}</h6>
            <p className='my-3 p-2'>{details.overview}</p>
        </div>
      </div>
    </div>
  )
}
