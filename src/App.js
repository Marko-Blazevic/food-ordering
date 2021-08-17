import React from 'react';
import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
import MealList from './components/Meals/MealList';

const DUMMY_MEALS = [
  { name: 'Sushi', description: 'Finnest fish and veggies', price: '22.99' },
  { name: 'Schnitzel', description: 'A German specialty!', price: '16.50' },
  {
    name: 'Barebeque Burger',
    description: 'American, raw, meaty',
    price: '12.99',
  },
  { name: 'Green Bowl', description: 'Healty and green', price: '8.50' },
];

function App() {
  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
      <MealList items={DUMMY_MEALS} />
    </React.Fragment>
  );
}

export default App;
