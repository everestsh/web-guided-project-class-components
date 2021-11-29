import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      message : "Hello from state!"
    }
  }
  render(){

    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

export default App;