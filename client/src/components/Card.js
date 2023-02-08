import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import dataService from '../services/dataService';
import authService from '../services/authService';
import { Link } from 'react-router-dom';

const Card = props => {

  function deleteThisPokemon (id)  {
    const token = authService.isAuthenticated();
    if(token) {
        const config = {
          headers:{
            'x-auth-token': token,
          }
        };
        dataService.deleteData(id, config, (deleteSuccess)=> {
          if(deleteSuccess) {
            props.handleToUpdate(props.pokemon._id)
          }
          else {
            console.log(deleteSuccess)
          }
      })
    }
  }


    return ( 
        <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img 
                    className="card-img-top" 
                    data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                    alt="Thumbnail [100%x225]" 
                    style={{width: 125, display: 'block', alignSelf: 'center'}}
	                  src={props.pokemon.img} 
                    data-holder-rendered="true" />
                  <div className="card-body">
                    <p className="card-text">
                        Name: {props.pokemon.name}
                        <br/>                     
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                          <Link to={`/update/${props.pokemon._id}`}><button className="btn btn-primary" type="button">edit</button></Link>
                          <button type="button" className="btn btn-sm btn-danger" onClick={() => deleteThisPokemon(props.pokemon._id)}>Delete</button>
                      </div>
                      <small className="text-muted">{props.pokemon.name}</small>
                    </div>
                  </div>  
                </div>
              </div>
     );
}
 
export default Card;