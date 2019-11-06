import React, { Component } from 'react'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Bob: ["Watch TV", "XBox"],
      Rachel: ["Hair", "Homework"],
      Dylan: ["soccer", "work"],
      Nancy: ["tennis", "online shopping"]
    } 
  }

  addItem = (name) => {
    // Get data from user
    let item = window.prompt("Enter item to add!");
    // if user enter empty or cancel do nothing 
    if(!item || !item.length) {
      return;
    }
    // Get box from state
    let box = this.state[name]
    // Add an item to appropriate box
    box.push(item)
    // Update box
    this.setState({[name]: box})
  }

  move = (moveFrom, ind, moveTo) => {
    // Get box from state
    const boxFrom = this.state[moveFrom]
    const boxTo = this.state[moveTo]
    // Add an item to appropriate box
    boxTo.push(boxFrom[ind]);
    // Remove an item from appropriate box
    boxFrom.splice(ind,1);
    // Update box
    this.setState({[moveFrom]: boxFrom, [moveTo]: boxTo})
  }

  render() {

    return (
      <div className="container">
        <div className="box"> 
          <div className="column1Header">Bob</div>
            {this.state.Bob.map((item, ind) => 
              { return <div key= {String(ind)} className="card"> {item} 
              <span className="right" onClick = {()=> this.move("Bob", ind, "Rachel")}>&#9658;</span> 
              </div> })}
          <div className="addItem" onClick= {() => this.addItem("Bob")}>
            + Add a card
          </div>
        </div>
        <div className="box">
          <div className="column2Header"> Rachel</div>
            {this.state.Rachel.map((item, ind) => 
              { return <div key= {String(ind)} className="card"> 
              <span className="left"onClick = {()=> this.move("Rachel", ind, "Bob")}>&#9664;</span> 
              {item}
              <span className="right" onClick = {()=> this.move("Rachel", ind, "Dylan")}> &#9658; </span> </div> })}
            <div className="addItem" onClick= {() => this.addItem("Rachel")}>
            + Add a card
          </div>
        </div>
        <div className="box">
          <div className="column3Header">Dylan</div>
              {this.state.Dylan.map((item,ind )=> 
                { return <div key= {String(ind)} className="card">
              <span className="left" onClick = {()=> this.move("Dylan", ind, "Rachel")}>&#9664; </span> 
              {item}
              <span className="right" onClick = {()=> this.move("Dylan", ind, "Nancy")}> &#9658; </span> </div> })}
            <div className="addItem" onClick= {() => this.addItem("Dylan")}>
            + Add a card
          </div>
        </div>
        <div className="box">
          <div className="column4Header">Nancy</div>
              {this.state.Nancy.map((item, ind) => 
                { return <div key= {String(ind)} className="card"> 
                <span className="left" onClick = {()=> this.move("Nancy", ind, "Dylan")} >&#9664; </span> 
                {item} 
                </div> })}
            <div className="addItem" onClick= {() => this.addItem("Nancy")}>
            + Add a card
          </div>
        </div>
      </div>
    );
  }
}

export default App;
