import React from "react";

class Animal {
  constructor(name, age, species){
    this.name = name
    this.age = age
    this.species = species
  }
  eat = () => {
    console.log(`${this.name} is eating.`)
  }
  describe = () => {
    console.log(`${this.name} is ${this.species}.`)
  }
  talk = () => {
    console.log(`${this.name} is talking.`)
  }
}


const fido = new Animal("fido", 2, "canine ")
fido.eat()
fido.describe()

const App = () => {
  return (
    <div>
      <h1>Hello Warren</h1>
    </div>
  );
};

export default App;