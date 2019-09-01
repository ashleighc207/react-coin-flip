import React, { Component } from 'react';
import './Gameboard.css';
import Coin from './Coin';


class Gameboard extends Component {
  render(){
    return(
      <section class="Gameboard">
        <h1> My Test </h1>
        <Coin />
      </section>
    )
  }
}

export default Gameboard;
