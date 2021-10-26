import React, { useState } from "react";


class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
        name: "Allison",
        age: 22
    }
  }
  handleClick = () => {
    this.setState({
      ...this.state,
      name:"Warren"
  });
  }

  render() {
    // const name = "Allison";
    console.log("state = ", this.state)
    return(
      <div>
        <h1>Hello {this.state.name}.</h1>
        <p>This is also a part of {this.state.name} with {this.state.age}</p>
        <button onClick={
      //     () => {
      //   this.setState({
      //     ...this.state,
      //     name:"Warren"
      // });
      //}
      this.handleClick
      }>Change the name</button>
      </div>
    )
  }
}


export default App2;