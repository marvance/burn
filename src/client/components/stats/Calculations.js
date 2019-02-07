import React from 'react';

class Calculations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: []

    }
    this.sendCount = this.sendCount.bind(this);
  }
  componentDidMount() {
    this.sendCount()
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
          counts: res
         
        })
      )})
      
      .catch(err => console.log(err));

  }
  callNewCount = async () => {
    const response = await fetch('/newcount', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }


    });
    const body = await response.json();
    console.log("BODY: ", body)

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }  

  render() {
    return (
      <div>
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


export default Calculations