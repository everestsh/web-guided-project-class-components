import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor(){
    super()
    this.state = {
      input : ''
    }
  }
  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      ...this.state,
      input: e.target.value
    })
  };

  // class property to submit form
  handleClick = e => {
    e.preventDefault();
    // console.log("handleClick")
    console.log("ListFrom props = ", this.props)
    // this.props.handleAddItem("this.state.input")
    this.props.handleAddItem(this.state.input)

  }

  render() {
    return (
      <form>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input onChange={this.handleChanges} type="text" name="item" />
        <button onClick={this.handleClick}>Add</button>
      </form>
    );
  }
}

export default ListForm;