import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import Card from './Card';
import dataService from '../services/dataService';
import authService from '../services/authService';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      pokemon: [],
      pageInitial: 0,
      pageFinal: 10,
      filter: null,
      cardToDelete: null
    }

    var handleToUpdate = this.handleToUpdate.bind(this);
  }

  handleToUpdate(cardToDelete){
    this.setState({cardToDelete});
    dataService.getData(pokemon => {
      this.setState(
        { pokemon }
      )
    })
}

  componentDidMount() {
    //fetch or axios api
    dataService.getData(pokemon => {
      this.setState(
        { pokemon }
      )
    })
   }

   setFilter(filter) {
    this.setState(
      {
        filter
      }
    )
   }

  //  I was trying to paginate
  //  handleClick(i){
  //  if(i.target.name === 'previous') {
  //     if(this.state.pageInitial > 10) {
  //       this.setState((prevState) => ({ 
  //         pageInitial: prevState.pageInitial - 10,
  //         pageFinal: prevState.pageFinal - 10,
  //      }))
  //     } else {
  //       this.setState({
  //         pageInitial: 0,
  //         pageFinal: 10
  //       })
  //     }
  //   } else if (i.target.name === 'next') {
  //       this.setState((prevState) => ({ 
  //         pageInitial: prevState.pageInitial + 10,
  //         pageFinal: prevState.pageFinal + 10,
  //      }))
  //  }    
  // }

  render() {
    var handleToUpdate = this.handleToUpdate;

    return ( 
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <div className="input-group">
              <input onChange={e => this.setFilter(e.target.value)} type="text" className="form-control" placeholder="Search this site" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div class="row justify-content-center bg-light pt-1">
          <Link to={`/create`}><button className="btn btn-primary" type="button">Create a Pokemon</button></Link>
        </div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">

              {
                // I was trying to pass my pages states inside slice() to create a pagination, but I lost too much time trying to figure out how to do it

                this.state.filter 
                ?
                this.state.pokemon.slice(-9).filter(pokemonName => pokemonName.name.toLowerCase().includes(`${this.state.filter}`.toLowerCase())).map(item => {
                  return (
                    <Card pokemon={item} handleToUpdate = {handleToUpdate.bind(this)} key={item.id}/>
                  )
                })
                :
                this.state.pokemon.slice(-9).map(item => {
                  return (
                    <Card pokemon={item} handleToUpdate = {handleToUpdate.bind(this)} key={item.id}/>
                  )
                })
              }
            </div>
          </div>
          {/* I was trying to create a simple pagination here... */}
          {/* <div className="row justify-content-center bg-light pt-1">
            <button className="btn btn-primary" onClick={i => this.handleClick(i)} name='previous'> Previous </button>
            <button className="btn btn-primary" onClick={i => this.handleClick(i)} name='next'> Next </button>
          </div> */}
        </div>
      </div>
    );

  }
    
}
 
export default Main;