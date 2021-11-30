import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  handleSingleClickEvent = () => alert("Single Click Event Triggered")
  handleDoubleClickEvent = () => alert("Double Click Event Triggered")
  handleMouseEnter = () => alert("Mouse Enter Event Triggered")
  handleMouseLeave = () => alert("Mouse Leave Event Triggered")
  render(){
    return (
      <div>
        <h1>Event Handles</h1>
        <button onClick={this.handleSingleClickEvent}>Single Click Handler</button>
        <hr/>
        <button onDoubleClick={this.handleDoubleClickEvent}>Double Click Handler</button>     
        <hr/>
        <div onMouseEnter={this.handleMouseEnter}>Mouse Enter</div>
        <hr/>
        <div onMouseLeave={this.handleMouseLeave}>Mouse Leave</div>
        <hr/>
        <input type="text" placeholder="Change me"/>
      </div>
    );
  }
};

export default App;