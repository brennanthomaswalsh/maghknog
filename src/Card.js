import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onForm: 0
    }
  }

  render() {
    const onForm = this.state.onForm;

    return (
      <div className="Card">
        <Tabs onSelect={(index, label) => this.setState({onForm: index })}>
          <h1 className={this.props.className || "header"}>{this.props.header}</h1>
          <TabList>
           <Tab>Description</Tab>
           <Tab>History</Tab>
          </TabList>
          <TabPanel>
            <h3 className="description">
              {this.props.description}
            </h3>
          </TabPanel>
          <TabPanel>
            <h3 className="description">
              {this.props.history}
            </h3>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Card;
