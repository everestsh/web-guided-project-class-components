import React from 'react';

const Item = props => {
  const handleClick = ()=> {
    //console.log("Item click")
    // console.log("handleToggleItem={this.handleToggleItem} ", props.handleToggleItem)
    //console.log("Item ", props.item)
    props.handleToggleItem(props.item);
  }
  return (
    // <div className={`item${props.item.purchased ? ' purchased' : ''}`}>
    //   <p>{props.item.name}</p>
    // </div>
    <div onClick={handleClick} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;