import React from "react";
import Message from "./components/MessageComponent"
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      message : "Hello from state!",
      name: "Ryan"
    }
  }
  render(){

    return (
      <div>
        <h1>{this.state.message}, My name is {this.state.name}</h1>
        <Message message={this.state.message}/>
      </div>
    );
  } 
};

export default App;