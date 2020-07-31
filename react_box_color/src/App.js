import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: "#32a84e",
    };
  }
  get initialState() {
    return {
      count: 0,
      color: "#32a84e",
    };
  }

  clickUpdate = () => {
    // letter is a 16 digit string and everytime function create new string
    let letters = "0123456789ABCDEF";
    let rainbow = "#";
    for (let i = 0; i < 6; i++) {
      rainbow += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({
      count: this.state.count + 1,
      color: rainbow,
    });
  }
  resetBuilder= () => {
    this.setState(this.initialState);
  }

  render() {
    let styleValue = {
      backgroundColor: this.state.color,
      width: "50%",
      height: 200,
    };
    return (
      <div className='App'>
      <div className='App'type="button" style={styleValue} onClick={this.clickUpdate}>
       <h1 className='count'> {this.state.count}</h1>
        
      </div>
      <button type="button" onClick={this.resetBuilder}>
      Reset
    </button>
    </div>
    );
  }
}

export default App;
