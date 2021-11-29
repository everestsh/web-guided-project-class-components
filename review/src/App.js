import React, { useState } from "react";

const Person = (props) => {
  return(
    <div>
      <h1>Person</h1>
      <h1>Hello {props.state.name}, You are {props.state.age} years old.</h1>
    </div>
  )
}

const App = () => {
  const [state, setState] = useState({
    name: 'Allison',
    age: 33
  })
  return (
    <div>
      <Person state={state}/>
      <button onClick={()=>{
        setState({
          ...state,
          name: "Warren"
        })
      }}>Change the name to Warren</button>
    </div>
  );
};

export default App;