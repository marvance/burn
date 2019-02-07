import React from 'react';
import PropTypes from 'prop-types';
import CountForm from './CountForm';
import axios from 'axios';


class CountRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: {
        words: '',
        date: '',
        project: ''
      },
      serverCount: {
        words: '',
        date: '',
        project: ''
      },
      displayCount: 0,
      counts: [],
      chooseFromProjects: []
    }
    this.addCount = this.addCount.bind(this);
    this.sendCount = this.sendCount.bind(this);
  }

  handleSelect = e => {
    this.setState({
      count: {
        project: event.target.value
      }
    })    
  }
  handleChange = e => { 
    const {name, value} = e.target;
    e.persist()
    this.setState(prevState => (
      {
        count: {
          ...prevState.count,
          [name]: value
        }
      }
    ));  
  }
  handleSubmit = e => {
    e.preventDefault();
    this.sendCount(); 
  }

  sendCount(){
    this.callNewCount()
      .then((res) => {
     
        console.log(res)
        var projects = res.map(item => (
          item.project
        )).filter((value, index, self) => (
          self.indexOf(value) === index
        ))
        console.log("PROJS: ", projects)

        this.setState(prevState => ({  
          counts: res,
          serverCount: res[res.length-1],
          count: {
            words: '',
            date: '',
            project: ''
          },
          chooseFromProjects: projects,
          displayCount: this.addCount(prevState.count.words)
         
        })
      )})
      
      .catch(err => console.log(err));

  }
  callNewCount = async () => {
    const response = await fetch('/newcount', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.count)


    });
    const body = await response.json();
    console.log("BODY: ", body)

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body


  }



  addCount(newCount) {
    let total = parseInt(this.state.displayCount)
    total += parseInt(newCount)
    this.setState(prevState => ({
      displayCount: total
    }))
  }
  render() {
    console.log(this.state.serverCount)
    console.log(this.state.count)
    
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
            <option value=''>Select Project</option>
            {optionTemplate}
          </select>
        </label>



        <h2>Count: {this.state.count.words}</h2>
        <h2>Total: {this.state.displayCount}</h2>
        <h2>Server Count: {this.state.serverCount.words}</h2>
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