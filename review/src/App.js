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
class Canine extends Animal {
   constructor(name, age, barkiness){
      super(name, age, "canine")
      this.barkiness = barkiness
   }
   dogStuff = () => {
    console.log(`${this.name} is doing dog stuff`)
  }
  talk = () => {
    // console.log(`${this.name} is talking.`)
    if(this.barkiness >5){
      console.log("BARRRK!")
    }else{
      console.log("Bark!") 
    }
  }
}


const fido = new Animal("fido", 2, "canine ")
fido.eat()
fido.describe()

const po = new Animal("po", 8, "feline ")
po.eat()
po.describe()

const greg = new Animal("greg", 12, "tortose")
greg.eat()
greg .describe()


const grover = new Canine("grover", 4, 6)
grover.eat()
grover.describe()
grover.talk()
grover.dogStuff()

class SubComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "Warren"
    }
  }

  render(){
    return <dev>
      <h1>{this.state.name}</h1>
      <button onClick={()=>{ this.setState({
        name: "Allision"
      })}} >
        Click
      </button>
    </dev>
  }
}
const App = () => {
  return (  
    <div>
      <h1>Hello Warren</h1>
      <SubComponent />
      <SubComponent />
      <SubComponent />
    </div>
  );
};

export default App;