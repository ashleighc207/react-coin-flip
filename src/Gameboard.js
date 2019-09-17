import React, { Component } from 'react';
import './Gameboard.css';
import Coin from './Coin';


class Gameboard extends Component {
  static defaultProps = {
    icons: ['fa-cat', 'fa-dog']
  }
  constructor(props){
    super(props);
    this.state = {
      dogCount: 0,
      catCount: 0,
      total: 0,
      icon: 'fas fa-dog'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    let randIdx = Math.floor(Math.random() * this.props.icons.length);

    this.setState(state => {
      let newState = {
        icon: (randIdx === 0 ? "fas fa-dog" : "fas fa-cat"),
        total: state.total + 1,
        dogCount: state.dogCount + (randIdx === 0 ? 1 : 0),
        catCount: state.catCount + (randIdx === 1 ? 1 : 0)
      }
      return newState;
    })
  }

  handleClick(e) {
    this.flipCoin();
  }

  render(){
    return(
      <section className="Gameboard">
        <h1>Flip it</h1>
        <Coin icon={this.state.icon}/>
        <button onClick={this.handleClick}>Flip me!</button>
        <p>Out of {this.state.total} flips, {this.state.dogCount} were dog and {this.state.catCount} were cat.</p>
      </section>
    )
  }
}

export default Gameboard;
