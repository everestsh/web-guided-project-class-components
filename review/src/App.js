import React, { useState } from "react";

const Person = (props) => {
  const {name} = props;
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Hey {name}, {name} is great name, don't Change it!!!</p>
    </div>
  );
}

const App = () => {
  // const name = "Allison";
  const [state, setState] = useState({
    name: "Allison",
    age: 22
  });
  const handleClick = () => {
    setState({
      ...state,
      name: "Warren"
    })
    console.log("clicking!!!")
  }
  return (
    <div>
      <Person name={state.name}/>
      {/* <h1>Hello {state.name}</h1> */}
      {/* <p>Hey {state.name}, {state.name} is great name, don't Change it!!!</p> */}
      <button onClick={
      //   () => {
      //   setName("Mj G")
      //   console.log("clicking!!!")
      // }
      handleClick
      }>Change The Name</button>
    </div>
  );
};

export default App;