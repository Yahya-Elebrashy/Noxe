import { createContext } from "react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export let MediaContext=createContext([]);
export function MediaContextProvider(props){
let baseImgUrl='https://www.themoviedb.org/t/p/original';
let [trendingMove,setTrendingMove]=useState([]);
let [trendingTvShows,setTrendingTvShows]=useState([]);
let [trendingPeople,setTrendingPeople]=useState([]);
async function getTrindingItems(mediaType,callbaks){
  let {data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`);
  callbaks(data.results);
}
useEffect(()=>{
  getTrindingItems("movie",setTrendingMove);
  getTrindingItems("tv",setTrendingTvShows);
  getTrindingItems("person",setTrendingPeople);
},[])
return <MediaContext.Provider value={{trendingMove,trendingTvShows,trendingPeople}}>
    {props.children}
</MediaContext.Provider>
}