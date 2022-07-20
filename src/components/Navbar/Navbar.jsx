import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar({loginData,logOut}) {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <Link className="navbar-brand font-weight-bold" to="Home">Noxe</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      {loginData?
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link className="nav-link active" to="Home">Home</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="Movies">Movies</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="Tvshows">Tvshows</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="People">People</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="About">About</Link>
        </li>
      </ul>
      :""}
      <ul class="navbar-nav ms-auto">
        {!loginData?
        <>
        <li class="nav-item">
        <Link className="nav-link mx-2" to="Login">Login</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link mx-2" to="Register">Register</Link>
        </li>
        </>
        :
        <li class="nav-item">
        <a class="nav-link mx-2 btn btn-danger" onClick={logOut}>Logout</a>
        </li>
           }
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
