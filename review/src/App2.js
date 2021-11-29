import React, { useState } from "react";

class Person extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
         <h1>Class Person</h1>
         <h1>Hello {this.props.state.name}, You are {this.props.state.age} years old.</h1>
      </div>
    )
  }
}

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
      <Person state={this.state}/>
      
      <button onClick={this.handClick}>Change the name to Warren</button>
    </div>
  )
 }
};

export default App2;