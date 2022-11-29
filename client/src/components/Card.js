import React from 'react';

const Card = props => {
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
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                      </div>
                      <small className="text-muted">{props.pokemon.name}</small>
                    </div>
                  </div>  
                </div>
              </div>
     );
}
 
export default Card;