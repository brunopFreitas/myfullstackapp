import React, { useState } from 'react';
import '../css/signin.css';
import { useNavigate } from "react-router-dom";
import authService from '../services/authService';
import dataService from '../services/dataService';



const CreatePokemon = (props) => {

    const [id, setId] = useState('')
    const [num, setNum] = useState('')
    const [name, setName] = useState('')
    const [img, setImage] = useState('')
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault()
        const token = authService.isAuthenticated();
        const config = {
            headers:{
              'x-auth-token': token,
            }
          };
        dataService.createData({ id, num, name, img }, config, (createSucess)=> {
            if(createSucess) {
                navigate('/')
            }
            else {
                navigate('/new')
            }
        })
    }

    return ( 
        <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Create your pokemon</h1>
            <label htmlFor="inputId" className="sr-only">Id</label>
            <input onChange={e => setId(e.target.value)} name="id" type="text" id="inputId" className="form-control" placeholder="Enter Id" required autoFocus />
            <label htmlFor="inputNum" className="sr-only">Number</label>
            <input onChange={e => setNum(e.target.value)} name="num" type="text" id="inputNum" className="form-control" placeholder="Enter Number" required autoFocus />
            <label htmlFor="inputName" className="sr-only">Name</label>
            <input onChange={e => setName(e.target.value)} name="name" type="text" id="inputName" className="form-control" placeholder="Enter Name" required autoFocus />
            <label htmlFor="inputImage" className="sr-only">Picture</label>
            <input onChange={e => setImage(e.target.value)} name="img" type="text" id="inputImage" className="form-control" placeholder="Insert Picture Link" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Create Pokemon</button>
        </form>
     );
}
 
export default CreatePokemon;