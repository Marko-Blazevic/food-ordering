import React from 'react';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  return (
    <li className={classes['meal-item']}>
      <h3>{props.name}</h3>
      <p className={classes['meal-description']}>{props.description}</p>
      <div className={classes['meal-price']}>${props.price}</div>
    </li>
  );
};

export default MealItem;
