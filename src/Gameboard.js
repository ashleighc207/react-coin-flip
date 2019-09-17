import React, { Component } from 'react';
import './Gameboard.css';
import Coin from './Coin';


class Gameboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      dogCount: 0,
      catCount: 0,
      icons: ['fa-cat', 'fa-dog'],
      total: 0
    }
  }

  render(){
    return(
      <section className="Gameboard">
        <h1> My Test </h1>
        <Coin faces={this.state.icons.length}/>
      </section>
    )
  }
}

export default Gameboard;
