import React from 'react';
import Projects from './stats/Project';
import Calculations from './stats/Calculations';

class Stats extends React.Component {
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