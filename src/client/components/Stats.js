import React from 'react';
import Projects from './stats/SelectByProject';
import Calculations from './stats/Calculations';
const api = require('../utils/api.js');

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: [],
      projects: []

    }
  }
  componentDidMount() {
    api.getCounts()
  }


  render() {
    return (
      <div>
        <Projects />
        <Calculations />
      </div>
    )
  }
}

export default Stats