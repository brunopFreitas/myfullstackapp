import React from 'react';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import Card from './Card';
import dataService from '../services/dataService';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      pokemon: []
    }
  }

  componentDidMount() {
    //fetch or axios api
    dataService.getData(pokemon => {
      this.setState(
        { pokemon }
      )
    })
   }

  render() {

    return ( 
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search this site" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div class="row justify-content-center bg-light pt-1">
          <a href='/create'><button className="btn btn-primary" type="button">Create a Pokemon</button></a>
        </div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">

              {
                this.state.pokemon.slice(-9).map(item => {
                  return (
                    <Card pokemon={item}/>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );

  }
    
}
 
export default Main;