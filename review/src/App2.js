import React, { useState } from "react";



class App2 extends React.Component {
  constructor(){
    super();
    this.state ={
      name : "Warren",
      age : 33
    }
  }

 render () {
  return (
    <div>
      <h1>Hello {this.state.name}</h1>
    </div>
  )
 }
};

export default App2;