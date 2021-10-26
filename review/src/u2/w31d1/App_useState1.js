import React, { useState } from "react";


const App = () => {
  // const name = "Allison";
  const [name, setName] = useState("Allison");
  const handleClick = () => {
    setName("Mj G")
    console.log("clicking!!!")
  }
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Hey {name}, {name} is great name, don't Change it!!!</p>
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