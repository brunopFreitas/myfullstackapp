import React, { useState, useEffect  } from 'react';
import '../css/signin.css';
import { useNavigate, useParams } from "react-router-dom";
import dataService from '../services/dataService';
import authService from '../services/authService';


const EditPokemon = (props) => {

    const param = useParams();
    const [id, setId] = useState('')
    const [num, setNum] = useState('')
    const [name, setName] = useState('')
    const [img, setImage] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        dataService.getOneData(param.id, (pokemonDetail)=> {
            if(pokemonDetail) {
                setId(pokemonDetail.id)
                setNum(pokemonDetail.num)
                setName(pokemonDetail.name)
                setImage(pokemonDetail.img)
            }
            else {
                console.log("Unable to retrieve data")
            }
        })
      }, []);

    const handleSubmit = event => {
        event.preventDefault()
        const token = authService.isAuthenticated();
        const config = {
            headers:{
              'x-auth-token': token,
            }
          };
        dataService.updateData(param.id, { id, num, name, img }, config, (pokemonDetail)=> {
            if(pokemonDetail) {
                navigate('/')
            }
            else {
                
            }
        })
    }

    return ( 
        <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Edit your pokemon</h1>
            <label htmlFor="inputId" className="sr-only">Id</label>
            <input onChange={e => setId(e.target.value)} name="id" type="text" id="inputId" className="form-control" placeholder="Enter Id" defaultValue={id} required autoFocus/>
            <label htmlFor="inputNum" className="sr-only">Number</label>
            <input onChange={e => setNum(e.target.value)} name="num" type="text" id="inputNum" className="form-control" placeholder="Enter Number" defaultValue={num} required autoFocus />
            <label htmlFor="inputName" className="sr-only">Name</label>
            <input onChange={e => setName(e.target.value)} name="name" type="text" id="inputName" className="form-control" placeholder="Enter Name" defaultValue={name} required autoFocus />
            <label htmlFor="inputImage" className="sr-only">Picture</label>
            <input onChange={e => setImage(e.target.value)} name="img" type="text" id="inputImage" className="form-control" placeholder="Insert Picture Link" defaultValue={img} required autoFocus/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Update Pokemon</button>

        </form>
     );
}
 
export default EditPokemon;