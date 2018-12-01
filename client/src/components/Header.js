import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <a className="item active">Home</a>
        <a className="item">Search</a>
        <a className="item">Friends</a>
        <a className="item">Favorites</a>
        <div className="right menu">
          <a className="ui item">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
