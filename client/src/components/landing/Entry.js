import React from 'react';
import './Entry.css';

const Entry = () => (
  <div className="entry">
    <div className="ui grid">
      <div className="five wide column about">
        <p>No Dirty Dishes</p>
        <p>About</p>
      </div>
      <div className="eleven wide column info">
        <a href="/api/auth/google">
          <button className="ui red google button">
            <i className="google icon" />
            Sign In with google
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Entry;
