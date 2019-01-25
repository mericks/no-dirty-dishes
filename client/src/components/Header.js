import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <p className="item active">Home</p>
        <p className="item">Friends</p>
        <p className="item">Favorites</p>
        <p className="item">Next</p>
        <p className="item">Search</p>
        <div className="right menu">
          <p className="ui item">
            <a href="/api/user/logout">Logout</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
