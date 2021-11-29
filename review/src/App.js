import React from "react";
import Message from "./components/MessageComponent"
import Name from "./components/NameComponents"
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      message : "Hello from props!",
      name: "Ryan"
    }
  }
handleChangeFunction = event => {
  // M1
  // this.setState({
  //   message: event.target.value
  // })

  // M2
  this.setState({
    ...this.state,
    message: event.target.value
  })
}

  render(){

    return (
      <div>
        <h1>{this.state.message}, My name is {this.state.name}</h1>
        <Message propsMessage={this.state.message}/>
        <Name propsName={this.state.name}/>
        <input onChange={this.handleChangeFunction}/>
      </div>
    );
  } 
};

export default App;