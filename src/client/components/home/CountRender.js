import React from 'react';
import PropTypes from 'prop-types';
import CountForm from './CountForm';


class CountRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: {
        words: '',
        date: '',
        project: ''
      },
      displayCount: 0,
      counts: [],
      chooseFromProjects: []
    }
    this.addCount = this.addCount.bind(this);
  }

  handleSelect = e => {
    console.log(event.target)
    this.setState({
      count: {
        project: event.target.value
      }
    })    
  }
  handleChange = e => { 
    const {name, value} = e.target;
    this.setState(prevState => ({
      count: { ...prevState.count, [name]: value }
       
    }))
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      counts: [...prevState.counts, prevState.count],
      count: {
        words: '',
        date: '',
        project: ''
      },
      chooseFromProjects: [...prevState.chooseFromProjects, prevState.count.project],
      //dont know best place to put addCount method
      //but it isn't here; move later
      displayCount: this.addCount(prevState.count.words)
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
    
    let optionTemplate = this.state.chooseFromProjects.map(item => (
      <option value={item}>{item}</option>
    ));
    console.log(this.state.chooseFromProjects)
    return (
      <div>
        <CountForm 
          handleChange={this.handleChange}
          count={this.state.count}
          handleSubmit={this.handleSubmit}
    
        />

        <label>
          Choose Project:
          <select value={this.state.value} onChange={this.handleSelect}>
            <option value='' disabled>Select Project</option>
            {optionTemplate}
          </select>
        </label>


        <h2>Count: {this.state.count.words}</h2>
        <h2>Total: {this.state.displayCount}</h2>
        <ul>
          {this.state.counts.map(function(ct){
            return (
              <li key={ct.date}>
                <h2>{ct.date}</h2>
                <h3>{ct.project}</h3>
                <h3>{ct.words}</h3>
              </li>
            )
          })}
       </ul>

      </div>
    )
  }

}



export default CountRender