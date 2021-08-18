import React from 'react';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  return (
    <li className={classes['meal-item']}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>${props.price}</p>
      </div>
      <div className={classes.amount}>
        <div className={classes['amount-input']}>
          <label htmlFor='amount'>Amount</label>
          <input type='number' id='amount' min={0}></input>
        </div>
        <button>+ Add</button>
      </div>
    </li>
  );
};

export default MealItem;
