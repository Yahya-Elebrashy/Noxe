import axios from 'axios';
import Joi, { alternatives } from 'joi';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login({setUserData}) {
  let[user,setUser]=useState({
    email:'',
    password:''
  })
  let[errorMsg,setErrorMsg]=useState('');
let[errorList,setErrorList]=useState([]);
const navigate=useNavigate();
function goToHome(){
  let path="/Home";
  navigate(path);
}
  async function submetFormData(e){
    e.preventDefault();
    if(validateForm().error){
      setErrorList(validateForm().error.details);
    }
    else{
      let {data}=await axios.post("https://routeegypt.herokuapp.com/signin",user);
    if(data.message=='success'){
      localStorage.setItem("token",data.token);
      setUserData();
      goToHome();
    }
    else{
      setErrorMsg(data.message)
    }
    }
   
  }
  function validateForm(){
    const schema=Joi.object({
      email:Joi.string().required().email({tlds:{allow:['com','net']}}),
      password:Joi.string().required().pattern(new RegExp('^[a-z][0-9]{3}$'))
    })
    return schema.validate(user,{abortEarly:false});
  }
  function getFormValue(e){
    let myUser={...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser);
  }

  return (
    <div className='w-75 m-auto'>
    <form onSubmit={submetFormData}>
      <h1 className='my-5'>Login Form</h1>
      {errorMsg?<div className='alert alert-danger p-3'>{errorMsg}</div>:''}
      {errorList.map((error,index)=><div className='alert alert-danger p-3' key={index}>{error.message}</div>)}
      <div className='input-gp my-3'>
        <label htmlFor='email'>Email</label>
        <input onChange={getFormValue}  className='form-control my-2' name='email' type='email' required></input>
      </div>
      <div className='input-gp my-3'>
        <label htmlFor='password'>Password</label>
        <input onChange={getFormValue}  className='form-control my-2' name='password' type='password' required></input>
      </div>
      <button className='btn btn-info flaot-end'>Login</button>   
    </form>
    </div>
  )
}
