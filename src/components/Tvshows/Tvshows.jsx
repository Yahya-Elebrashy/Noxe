import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './Tvshows.module.css';
import { useContext } from 'react';
import { MediaContext } from '../mediaContext/mediaContext';

export default function Tvshows() {
  let baseImgUrl='https://www.themoviedb.org/t/p/original';
  let{trendingTvShows}=useContext(MediaContext);
  return (
    <div className='container'>
      <div className='row'>
    <div class={`col-md-4 col-sm-4 ${styles.trending} w`}>
      <div className='w-100'>
        <div className={`w-25 mb-3 ${styles.brdr}`}></div>
        <h2>Trending</h2>
        <h2>tv shows</h2>
        <h2>to watch now</h2>
        <div className={`w-100 ${styles.brdr}`}></div>
        </div>
    </div>
      {trendingTvShows.map((tv,index)=>(
        <div className='col-md-2 col-sm-4 my-3' key={index}>
          <div>
            <img className='w-100 rounded-3 shadow' src={baseImgUrl + tv.poster_path}/>
            <h5 className='my-2'>{tv.name}</h5>
            </div>
          </div>
      ))}
    </div>
    </div>
  )
}
