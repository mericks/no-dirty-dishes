import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ui container">
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
