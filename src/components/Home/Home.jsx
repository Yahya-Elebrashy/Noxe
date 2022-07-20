import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MediaContext } from '../mediaContext/mediaContext';


export default function Home() {
  let baseImgUrl='https://www.themoviedb.org/t/p/original';
  let{trendingMove}=useContext(MediaContext);
  let{trendingTvShows}=useContext(MediaContext);
  let{trendingPeople}=useContext(MediaContext);
  const navigate=useNavigate();
  function goToDetails(id){
    navigate({
      pathname:'/details',
      search:`?id=${id}`
    })
  }
  return (
    <>
    <div className='container'>
    <div className='row'>
    <div class={`col-md-4 col-sm-4 ${styles.trending} `}>
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
    <div className='row'>
    <div class={`col-md-4 col-sm-4 ${styles.trending} w`}>
      <div className='w-100'>
        <div className={`w-25 mb-3 ${styles.brdr}`}></div>
        <h2>Trending</h2>
        <h2>People</h2>
        <h2>to watch now</h2>
        <div className={`w-100 ${styles.brdr}`}></div>
        </div>
    </div>
      {trendingPeople.map((person,index)=>(
        <div className='col-md-2 col-sm-4 my-3' key={index}>
          <div>
            <img className='w-100 rounded-3 shadow' src={baseImgUrl + person.profile_path} />
            <h5 className='my-2'>{person.name}</h5>
            </div>
          </div>
      ))}
    </div>
    </div>
    </>
  )
}
