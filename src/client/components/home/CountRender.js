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
      receivedCount: {
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
    console.log("count on change: ", this.state.count)
    this.sendCount()
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

  // componentDidUpdate() {

  // }


  sendCount(){
    console.log("sendCount called")
    this.callNewCount()
      .then(res => this.setState({
          receivedCount: {
            words: res.words,
            date: res.date,
            project: res.project 
          }
         
        }))
      .catch(err => console.log(err));

  }
  callNewCount = async () => {
    console.log("callnewCount called")
    const cd = new FormData();
    cd.append("words", this.state.count.words)
    cd.append("project", this.state.count.project)
    console.log(cd)

    const response = await fetch('/newcount', {
      method: 'POST',
      body: cd

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
    console.log(this.receivedCount)
    
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
        <h2>Server Count: {this.state.receivedCount.words}</h2>
        <ul>
          {this.state.counts.map(function(ct){
            return (
              <li key={ct}>
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