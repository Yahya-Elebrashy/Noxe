import React from 'react'
import about from './aboutMove.png';

export default function About() {
  return (
    <div className='container'>
      <hr class="py-1 m-5"></hr>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-6'>
          <img className='w-100 py-5' src={about} />
        </div>
        <div className="col-md-6">
          <h1 >Enjoy on your TV.</h1>
          <p >Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
      </div>
      <hr class="py-1 m-5"></hr>
    </div>
  )
}
