import React, { useState } from 'react';
import '../css/signin.css';
import { useNavigate } from "react-router-dom";
import authService from '../services/authService';



const Register = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault()
        authService.register({ firstName, lastName, email, password },(signinSucess)=> {
            if(signinSucess) {
                navigate('/')
            }
            else {
                navigate('/register')
                console.log('You are not cool!!!')
            }
        })
    }

    return ( 
        <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Please Register</h1>
            <label htmlFor="inputFirstName" className="sr-only">First Name</label>
            <input onChange={e => setFirstName(e.target.value)} name="firstName" type="text" id="firstName" className="form-control" placeholder="Enter First Name" required autoFocus />
            <label htmlFor="inputLastName" className="sr-only">Last Name</label>
            <input onChange={e => setLastName(e.target.value)} name="lastName" type="text" id="lastName" className="form-control" placeholder="Enter Last Name" required autoFocus />
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input onChange={e => setEmail(e.target.value)} name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input onChange={e => setPassword(e.target.value)} name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
     );
}
 
export default Register;