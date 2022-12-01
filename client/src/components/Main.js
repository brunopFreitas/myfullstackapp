import React from 'react';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import Card from './Card';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      pokemon: []
    }
  }

  componentDidMount() {
    //fetch or axios api
    axios.get(`${process.env.REACT_APP_API_URL}/pokemon`)
    .then(response=>{
      this.setState({
        pokemon: response.data,
      }
      )
    })
  }

  render() {

    //Sample
    // console.log(localStorage.getItem('foo'))

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

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">

              {
                this.state.pokemon.slice(0,9).map(item => {
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