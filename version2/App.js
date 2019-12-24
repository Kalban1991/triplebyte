import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: ['cart1', 'cart2'],
      cart1: ['cart3', 'cart4'],
      cart2: ['cart5', 'cart6'],
      cart3: ['cart7', 'cart8'],
    }
  }

  addCart = (e) => {

    const input = window.prompt("Enter cart to add");
    if(!input || !input.length) { // !input || input == ""
      alert("Please do not enter empty cart")
      return;
    }
    const key = e.target.getAttribute('value'); 

    this.setState({
      [key]: [...this.state[key], input]
    })
  }

  right = (from, ind, to) => {
    const el = this.state[from][ind];
    const newTo = this.state[to].push(el)
    const newFrom = this.state[from].splice(ind, 1);
    this.setState({
      from: newFrom,
      to: newTo
    })

  }
  left = (from, ind, to) => {
    const el = this.state[from][ind];
    const newTo = this.state[to].push(el)
    const newFrom = this.state[from].splice(ind, 1);
    this.setState({
      from: newFrom,
      to: newTo
    })
    
  }

  render() {
    return (
      <div id="wrapper">
          <div id="cart">
            <h5 style={{backgroundColor: "lightblue"}}>Cart</h5>
            <ul >
              {this.state.cart.map((item, ind) => {
              return <li key={ind}>{item}<span id="right" onClick={() => this.right("cart", ind, "cart1")}>{">"}</span></li>
              })}
            </ul>    
            <p onClick={this.addCart} value="cart">+ Add Cart</p>
          </div>
          <div id="cart1">
            <h5 style={{backgroundColor: "#A3E4D7"}}>Cart1</h5>
            <ul >
              {this.state.cart1.map((item, ind) => {
              return <li key={ind}><span id="left" onClick={() => this.left("cart1", ind, "cart")}>{"<"}</span>{item}<span id="right" onClick={() => this.right("cart1", ind, "cart2")}>{">"}</span></li>
              })}
            </ul> 
            <p onClick={this.addCart} value="cart1">+ Add Cart</p>
          </div>
          <div id="cart2">
            <h5 style={{backgroundColor: "#D7BDE2"}}>Cart2</h5>
            <ul >
              {this.state.cart2.map((item, ind) => {
              return <li key={ind}><span id="left" onClick={() => this.left("cart2", ind, "cart1")}>{"<"}</span><span id="right" onClick={() => this.right("cart2", ind, "cart3")}>{">"}</span>{item}</li>
              })}
            </ul> 
            <p onClick={this.addCart} value="cart2">+ Add Cart</p>
          </div>
          <div id="cart3">
            <h5 style={{backgroundColor: "#F9E79F"}}>Cart3</h5>
            <ul >
              {this.state.cart3.map((item, ind) => {
              return <li key={ind}><span id="left" onClick={() => this.left("cart3", ind, "cart2")}>{"<"}</span>{item}</li>
              })}
            </ul> 
            <p onClick={this.addCart} value="cart3">+ Add Cart</p>
          </div>
      </div>
    );
  }
}

export default App;
