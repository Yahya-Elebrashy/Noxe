import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './Movies.module.css';
import { useContext } from 'react';
import { MediaContext } from '../mediaContext/mediaContext';
import { useNavigate } from 'react-router-dom';
export default function Movies() {
  let baseImgUrl='https://www.themoviedb.org/t/p/original';
  let{trendingMove}=useContext(MediaContext);
  const navigate=useNavigate();
  function goToDetails(id){
    navigate({
      pathname:'/details',
      search:`?id=${id}`
    })
  }
  return (
    <div className='container'>
      <div className='row'>
    <div class={`col-md-4 col-sm-4 ${styles.trending} w`}>
      <div className='w-100'>
        <div className={`w-25 mb-3 ${styles.brdr}`}></div>
        <h2>Trending</h2>
        <h2>movies</h2>
        <h2>to watch now</h2>
        <div className={`w-100 ${styles.brdr}`}></div>
        </div>
    </div>
      {trendingMove.map((movie,index)=>(
        <div onClick={()=>goToDetails(movie.id)} className='col-md-2 col-sm-4 my-3' key={index}>
          <div>
            <img className='w-100 rounded-3 shadow' src={baseImgUrl + movie.poster_path}/>
            <h5 className='my-2'>{movie.title}</h5>
            </div>
          </div>
      ))}
    </div>
    </div>
  )
}
