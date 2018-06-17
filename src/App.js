import React, { Component } from 'react';
import HomePage from './HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
// to do add in apollo and graphql backend. Use subscriptions to make a chat game that people can connect to with their phones

class App extends Component {
  render() {
    return (
      <div className="App container">
        <HomePage />
      </div>
    );
  }
}

export default App;
