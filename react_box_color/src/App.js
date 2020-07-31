// Component has two properties, Count and color
// Both value are mutable
// We create class component
// also we need to compbach on initial state , so we saved initial state value
// create get function to reassigned initial value
//color need 6 digit value, so we create for loop which give a different string every time
// We create a siv, and set attribute type: 'button' to make it clickble
// we call a function which coungt incremental by q on each click and alos assign a new color value
//Create one button for reset, onclick call function which assign default value to State
// create another div which represent the previous color 
import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: "#32a84e",
      pColor :"#32a84e" 
    };
  }
  get initialState() {
    return {
      count: 0,
      color: "#32a84e",
      pColor:"#32a84e"
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
      pColor : this.state.color,
      count: this.state.count + 1,
      color: rainbow,
    });
  }

  resetBuilder = () => {
    this.setState(this.initialState);
  }

  render() {
    let styleValue = {
      backgroundColor: this.state.color,
      width: "50%",
      height: 200,
    };
    let pstyleValue = {
      backgroundColor: this.state.pColor,
      width: "50%",
      height: 200,
    };
    let defaultValue ={
      backgroundColor:"#32a84e",
      width: "50%",
      height: 50,

    }
    return (
      <div className="App">
        <div
          className="Box"
          type="button"
          style={styleValue}
          onClick={this.clickUpdate}
        >
          <h1 className="count">
            After
          </h1>
        </div>
        <div className="count" style={defaultValue}> {this.state.count}</div>
        <div
          className="Box"
          style={pstyleValue}
          onClick={this.clickUpdate}
        >
          <h1 className="count"> Before</h1>
          
        </div>
        <button type="button" onClick={this.resetBuilder}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
