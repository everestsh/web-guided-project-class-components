import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import Item from './components/Item';
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
    purchased: true
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries: groceries
    }
  }
  handleClear = ()=> {
    //1. Clear Purchased
    // -  handle button click
    // -  setState of groceries
    // -  take this.state.groceries and return only grocery items where purchased = true
    console.log("clear")
    this.setState({
      ...this.state,
      // groceries: groceries.filter( item=>  item.purchased === false)
      groceries: this.state.groceries.filter(item=> !item.purchased)
    });
  }

  handleAddItem = (name) => {
    //2. Add Item
    // - create a newItem
    // - setState and retain old state
    // - save all current groceries and add on newItem to the end
    const newItem = {
      // name: name,
      name: 'Chip',
      id: Date.now(),
      purchased: false
    };
    this.setState({
      ...this.state,
      groceries: [...this.state.groceries, newItem]
    });
    console.log("index: handleAddItem")
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
          <div className="header">
           <h1>Shopping List</h1>
           <ListForm handleAddItem={this.handleAddItem}/>
         </div>
        <GroceryList groceries={this.state.groceries} />
        <button onClick={this.handleClear} className="clear-btn">Clear Purchased</button>
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
