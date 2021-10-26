import React from "react";

class ListForm extends React.Component {
  // Constructor with state
    constructor() {
      super();
      this.state = {
        input:""
      }
    }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };

  // class property to submit form
    // class property to submit form
    handleSubmit = (e)=>{
      e.preventDefault();
      // console.log("Add click === ", this.props)
      console.log("Add click === ", this.state.input)
      // this.props.handleAddItem()
      //this.props.handleAddItem('Chips')
      // this.props.handleAddItem(this.props.input);
      this.props.handleAddItem(this.state.input);
    }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        {/* <input type="text" name="item" /> */}
        <input onChange={this.handleChanges} type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;