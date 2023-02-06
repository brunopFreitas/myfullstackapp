import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import authService from '../services/authService';
import logo from '../img/pokemon_logo.png'
import jwt_decode from "jwt-decode";

const NavBar = (props) => {

  const [authUser, setAuthUser] = useState(props.authService)

  useEffect(() => {
    setAuthUser(props.authUser)
  }, [props.authUser])

    

    const getUserEmail = () => {
      if(authUser) {
        let userCredential = jwt_decode(authUser)
        return (
          userCredential.email
        )
      }      
    }

    const signOut = () => {
      authService.signout()
      props.updateNav()
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
            {/* <li className="nav-item active">
              <Link to={`/signin`} className="nav-link">Login <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to={`/register`} className="nav-link">Register <span className="sr-only">(current)</span></Link>
            </li> */}
          </ul>
        </div>
        {
            authUser
              ?
              <>
                <li className="nav-item dropdown list-unstyled">
                  <a className="nav-link dropdown-toggle text-decoration-none" href="/#" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{getUserEmail()}</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown07"><Link className="dropdown-item" to="#" onClick={() => signOut()}>Sign Out</Link>
                  </div>
                </li>
              </>
              :
              <>
                <li className="nav-item list-unstyled"><Link className="nav-link" to="/signin">Signin</Link></li><li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
          }
      </div>
    </nav>
    );
}
 
export default NavBar;