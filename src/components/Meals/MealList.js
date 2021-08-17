import React from 'react';
import MealItem from './MealItem';
import Card from '../UI/Card/Card';
import classes from './MealList.module.css';

const MealList = (props) => {
  return (
    <Card className={classes['meal-list']}>
      <ul>
        {props.items.map((meal) => (
          <MealItem
            key={Math.random()}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default MealList;
