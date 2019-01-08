import React from 'react';
import Header from './Header';
import { BroswerRouter, Route } from 'react-router-dom';

const FavoritesList = () => <h2>Favorites List</h2>;
const FriendsList = () => <h2>Friends List</h2>;
const NextList = () => <h2>Next List</h2>;

const Dashboard = () => {
  return (
    <div className="ui container">
      <Header />
      Welcome to the Dashboard!
    </div>
  );
};

export default Dashboard;
