import React, { useState } from "react";



class App2 extends React.Component {
  // constructor(){
  //   super();
  // }
  state ={
    name : "Warren",
    age : 33
  }
handClick = ()=>{
  this.setState({
    ...this.state,
    name: "Allison"
  })
}
 render () {
  return (
    <div>
      <h1>Hello {this.state.name}, You are {this.state.age} years old.</h1>
      <button onClick={this.handClick}>Change the name to Warren</button>
    </div>
  )
 }
};

export default App2;