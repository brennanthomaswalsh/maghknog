import React, { Component } from 'react';
import Card from './Card';
import Carousel from './Carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onForm: 0
    }
  }

  render() {
    const onForm = this.state.onForm;

    return (
      <div className="home-page">
        <Tabs onSelect={(index, label) => this.setState({onForm: index })}>
          <nav className="navbar navbar-inverse">
            <img src=""></img>
            <h2 className="navbar-brand">Maghknog</h2>
            <TabList className="pull-right">
              <Tab>Home</Tab>
              <Tab>Gods</Tab>
            </TabList>
          </nav>
          <TabPanel>
            <div className="col-xs-12">
              <Carousel />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="col-md-4 col-xs-12">
              <div className="card">
                <Card className="maghknog"
                      header="Maghknog"
                      description="God of the people. Who burned at a tree for us"
                      history="good mofo"/>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="card">
                <Card header="Utvigknog"
                      description="God of knowledge. Represents blue"
                      history="Bad Mofo"/>
                </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="card">
                <Card header="Sjebknog"
                      description="God of Nature. Represents green"
                      history="middle person in the life of Jesus Christ our Savior"/>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default HomePage;
