import React from 'react';
import './Landing.css';
import dirtyDishes from '../../assets/dirtydisheskitchensink.jpg';
import titleFont from '../../assets/titleFont-noDirtyDishes.png';
import Entry from './Entry';

const Landing = () => (
  <div>
    <img className="bg" src={dirtyDishes} alt="" />
    <img className="title" src={titleFont} alt="No Dirty Dishes!" />
    <Entry />
  </div>
);

export default Landing;
