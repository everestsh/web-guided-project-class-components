import React, { useState } from "react";

class Person extends React.Component {
  render() {
      return(<div>
          <h1>Hello {this.props.name}.</h1>
          <p>This is also a part of {this.props.name} with {this.props.age}</p>
      </div>);
  }
}

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
        <Person name={this.state.name} age={this.state.age}/>
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