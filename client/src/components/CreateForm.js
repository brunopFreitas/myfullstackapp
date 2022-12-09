import React, { useState } from 'react';
import '../css/signin.css';
import { useNavigate } from "react-router-dom";
import authService from '../services/authService';
import dataService from '../services/dataService';
import { idValidator, numberValidator, nameValidator, linkValidator } from './Validator'


const CreatePokemon = (props) => {

    const [id, setId] = useState('')
    const [num, setNum] = useState('')
    const [name, setName] = useState('')
    const [img, setImage] = useState('')
    const [idError, setIdError] = useState('')
    const [numberError, setNumberError] = useState('')
    const [nameError, setNameError] = useState('')
    const [linkError, setLinkError] = useState('')
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault()
        const isIdValid = idValidator(id)
        if(isIdValid !== "") {
            setIdError(isIdValid)
        }
        const isNumberValid = numberValidator(num)
        if(isNumberValid !== "") {
            setNumberError(isNumberValid)
        }
        const isNameValid = nameValidator(name)
        if(isNameValid !== "") {
            setNameError(isNameValid)
        }
        const isLinkValid = linkValidator(img)
        if(isLinkValid !== "") {
            setLinkError(isLinkValid)
        }
        if(isIdValid === "" && isNumberValid === "" && isNameValid === "" && isLinkValid === "") {
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
    }

    return ( 
        <form className="form-signin" onSubmit={handleSubmit}>
            <p className={idError ? 'alert alert-danger text-center' : 'hidden'}>{idError}</p>
            <p className={numberError ? 'alert alert-danger text-center' : 'hidden'}>{numberError}</p>
            <p className={nameError ? 'alert alert-danger text-center' : 'hidden'}>{nameError}</p>
            <p className={linkError ? 'alert alert-danger text-center' : 'hidden'}>{linkError}</p>
            <h1 className="h3 mb-3 font-weight-normal text-center">Create your pokemon</h1>
            <label htmlFor="inputId" className="sr-only">Id</label>
            <input onChange={e => setId(e.target.value)} name="id" type="text" id="inputId" className="form-control" placeholder="Enter Id" required autoFocus />
            <label htmlFor="inputNum" className="sr-only">Number</label>
            <input onChange={e => setNum(e.target.value)} name="num" type="text" id="inputNum" className="form-control" placeholder="Enter Number" required autoFocus />
            <label htmlFor="inputName" className="sr-only">Name</label>
            <input onChange={e => setName(e.target.value)} name="name" type="text" id="inputName" className="form-control" placeholder="Enter Name" required autoFocus />
            <label htmlFor="inputImage" className="sr-only">Picture</label>
            <input onChange={e => setImage(e.target.value)} name="img" type="text" id="inputImage" className="form-control" placeholder="Insert Picture Link" required autoFocus/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Create Pokemon</button>
        </form>
     );
}
 
export default CreatePokemon;