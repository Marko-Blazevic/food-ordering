import React from 'react';
import classes from './Header.module.css';

import mealsImg from '../../assets/meals-img.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Order Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='Colorful fruits an vegetables on the table' />
      </div>
    </React.Fragment>
  );
};

export default Header;
