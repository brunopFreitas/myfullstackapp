import React, { useState } from 'react';
import '../css/signin.css';
import { useNavigate } from "react-router-dom";
import authService from '../services/authService'
import axios from 'axios'



const SignIn = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault()
       
        //New way
        authService.signin({ email, password }, (signinSucess)=> {
            if(signinSucess) {
                navigate('/')
            }
            else {
                navigate('/signin')
                console.log('You are not cool!!!')
            }
        })

        //Old way
        // axios.post(`${process.env.REACT_APP_API_URL}/pokemon/user/login`, { email, password })
        // .then(
        //     response => {
        //         if(response.status=== 200) {
        //             localStorage.setItem('token', response.headers['x-auth-token'])
        //             navigate('/')
        //         }
        //     }
        //     )

    }

    return ( 
        <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input onChange={e => setEmail(e.target.value)} name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input onChange={e => setPassword(e.target.value)} name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
     );
}
 
export default SignIn;