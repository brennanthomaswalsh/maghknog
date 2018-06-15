import React, { Component } from 'react';
import Card from './Card'
import Carousel from './Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
// to do add in apollo and graphql backend. Use subscriptions to make a chat game that people can connect to with their phones

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="col-xs-12">
          <Carousel />
        </div>
        <div className="col-md-4 col-xs-12">
          <Card className="maghknog"
                header="Maghknog"
                description="God of the people. Who burned at a tree for us"
                history="good mofo"/>
        </div>
        <div className="col-md-4 col-xs-12">
          <Card header="Utvigknog"
                description="God of knowledge. Represents blue"
                history="Bad Mofo"/>
        </div>
        <div className="col-md-4 col-xs-12">
          <Card header="Sjebknog"
                description="God of Nature. Represents green"
                history="middle person in the life of Jesus Christ our Savior"/>
        </div>
      </div>
    );
  }
}

export default App;
