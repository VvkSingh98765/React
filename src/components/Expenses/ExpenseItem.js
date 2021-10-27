import './ExpenseItem.css'

import { useState } from 'react';

import Card from '../UI/Card'

import ExpenseDate from './ExpenseDate';

const ExpenseItem=(props) => {

  const op=useState(props.title);
  let title=op[0];
  let setTitle=op[1];

  //Modern ES6 array destructuring
  //const [title,setTitle]=useState(props.title);

  const clickHandler=()=>{
    setTitle('Updated')
    console.log(title);
  }

  return (
    <Card className="expense-item" >
      <div className="expense-item__description">
        <ExpenseDate date={props.date}></ExpenseDate>
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">$ {props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
