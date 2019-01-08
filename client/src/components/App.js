import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { fetchUser } from '../actions';
import Landing from './landing/Landing';
import Dashboard from './Dashboard';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  // Using renderContent to avoid rapid UI content switching while waiting on slower network connections
  // renderContent() {
  //   switch (this.props.auth) {
  //     case null:
  //       return;
  //     case false:
  //       return <Landing />;
  //     default:
  //       return <Dashboard />;
  //   }
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);
