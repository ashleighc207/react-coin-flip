import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
  constructor(props){
    super(props);
    this.state = {
      dogCount: 0,
      catCount: 0,
      icons: ['fa-cat', 'fa-dog'],
      total: 0
    }
  }
  flipCoin() {
    let randIdx = Math.floor(Math.random() * this.state.icons.length);
  }
  render(){
    return(
      <section>
        <div class="Coin">
          <i class="fas fa-dog Coin--icon"></i>
        </div>
      </section>
    )
  }
}

export default Coin;
