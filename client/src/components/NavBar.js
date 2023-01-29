import React from 'react';
import { Link, useEffect } from 'react-router-dom';
import authService from '../services/authService';
import logo from '../img/pokemon_logo.png'
import jwt_decode from "jwt-decode";

const NavBar = () => {

    const getUserEmail = () => {
      let token = authService.isAuthenticated()
      if(token) {
        let userCredential = jwt_decode(token)
        return (
          userCredential.email
        )
      }
      
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to={`/`} className="navbar-brand d-flex align-items-center">
          <img src={logo} className='logo-img'/>
          <strong>My Fullstack App</strong>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to={`/`} className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to={`/signin`} className="nav-link">Login <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to={`/register`} className="nav-link">Register <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
        <div className={authService.isAuthenticated() ? 'nav-item dropdown' : 'hidden'}>
              <a className="dropdown-toggle text-white text-decoration-none" href="/#" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {
                  "Welcome " + getUserEmail()
                }
                </a>
              <div className="dropdown-menu" aria-labelledby="dropdown07">
                <Link to={`/signin`} className="dropdown-item" onClick={e => authService.signout()}>Logout</Link>
              </div>
        </div>
      </div>
    </nav>
    );
}
 
export default NavBar;