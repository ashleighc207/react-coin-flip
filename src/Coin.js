import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
  constructor(props){
    super(props);
    this.flipCoin = this.flipCoin.bind(this);
    this.state = {
      icon: "fas fa-dog"
    }
  }

  flipCoin() {
    let randIdx = Math.floor(Math.random() * this.props.faces);
    this.setState({
      icon: randIdx === 0 ? "fas fa-dog" : "fas fa-cat"
    })
  }

  render(){
    return(
      <section onClick={this.flipCoin}>
        <div className="Coin">
          <i className={this.state.icon + " Coin--icon"}></i>
        </div>
      </section>
    )
  }
}

export default Coin;
