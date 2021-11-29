import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: true
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

// Clear Purcheased
// 1

// Add Item
// Toggle Item

class App extends React.Component {
  // Class methods to update state
  constructor(){
    super()
    this.state = {
      groceries:groceries
    }
  }
  handleAddItem= (item) => {
    //Add Item
    //1. get button click
    //2. set and retain our state
    //3. change groceries to include a new item
    console.log("Index.js handleAddItem")
    const newItem = {
      name: item,
      id : Date.now,
      purchased: false
    }

    this.setState({
      ...this.state,
      groceries: [...this.state.groceries, newItem]
    })


  }
  handleToggle = () => {
    this.setState({
      ...this.state,
      groceries: this.state.groceries.filter(item => {
        return (!item.purchased)
      })
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm handleAddItem={this.handleAddItem} />
         </div>
        <GroceryList groceries={this.state.groceries} />
        <button onClick={this.handleToggle} className="clear-btn">Clear Purchased</button>
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);