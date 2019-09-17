import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
  render(){
    return(
      <section>
        <div className="Coin">
          <i className={this.props.icon + " Coin--icon"}></i>
        </div>
      </section>
    )
  }
}

export default Coin;
