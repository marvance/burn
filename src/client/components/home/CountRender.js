import React from 'react';
import PropTypes from 'prop-types';
import CountForm from './CountForm';


class CountRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '',
      displayCount: 0
    }
    this.addCount = this.addCount.bind(this);
  }
  handleChange = e => { 
    const currentCount = e.target.value;
    console.log(currentCount)
    this.setState(prevState => ({
      count: currentCount
    }))
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      count: '',
      //dont know best place to put addCount method
      //but it isn't here; move later
      displayCount: this.addCount(prevState.count)
    }))
  }
  addCount(newCount) {
    let total = parseInt(this.state.displayCount)
    total += parseInt(newCount)
    this.setState(prevState => ({
      displayCount: total
    }))
  }
  render() {
    return (
      <div>
        <CountForm 
          handleChange={this.handleChange}
          count={this.state.count}
          handleSubmit={this.handleSubmit}
        />
        <h2>Count: {this.state.count}</h2>
        <h2>Total: {this.state.displayCount}</h2>

      </div>
    )
  }

}



export default CountRender