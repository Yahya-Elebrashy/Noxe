import jwtDecode from 'jwt-decode';
import { Routes,Route, useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import Movies from '../Movies/Movies';
import Navbar from '../Navbar/Navbar';
import Tvshows from '../Tvshows/Tvshows';
import People from '../People/People';
import logo from './../../logo.svg';
import './App.css';
import About from '../About/About';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Notfound from '../Notfound/Notfound';
import { useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Details from '../Details/Details';
import { MediaContextProvider } from '../mediaContext/mediaContext';


function App() {
  let [loginData,setLoginData]=useState(null);
  function setUserData(){
    let token=localStorage.getItem("token");
    let decoded=jwtDecode(token);
    setLoginData(decoded);
  }
  const navigation=useNavigate();
  function logOut(){
    localStorage.removeItem("token");
    setLoginData(null);
    navigation("/Login");
  }
  useEffect(() => {
    if(localStorage.getItem("token")){
      setUserData();
    }
  },[]);
  return (
    <>
    <Navbar loginData={loginData} logOut={logOut}/>
    <MediaContextProvider>
    <Routes>
      <Route  element={<ProtectedRoute />}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Home' element={<Home/>}></Route>
      <Route path='Movies' element={<Movies/>}></Route>
      <Route path='Tvshows' element={<Tvshows/>}></Route>
      <Route path='People' element={<People/>}></Route>
      <Route path='details' element={<Details/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
      </Route>

      <Route path='About' element={<About/>}></Route>
      <Route path='Login' element={<Login setUserData={setUserData}/>}></Route>
      <Route path='Register' element={<Register/>}></Route>
    </Routes>
    </MediaContextProvider>

    </>
  );
}

export default App;
