import React from 'react';
import DisplayProjects from './stats/DisplayProjects';
// import Calculations from './stats/Calculations';
import BarChart from './stats/BarChart';


class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: [],
      projects: []

    }
  
    this.getCounts = this.getCounts.bind(this);
   
  }
  //grab counts
  componentDidMount() {
    this.getCounts()
  }
//server endpoint calls to get all counts
  getCounts(){
    this.callNewCount()
      .then((res) => {
     
        console.log(res)
        var projectNames = res.map(item => (
          item.project
        )).filter((value, index, self) => (
          self.indexOf(value) === index
        ))
        console.log("PROJS: ", projectNames)

        this.setState({  
          counts: res,
          projects: projectNames
         
        }, () => {
          console.log("should calculations go HERE??")
          
          // this.calculateTotal(this.state.counts)
          // console.log("total: ",this.calculateTotal(this.state.counts))
          // console.log("sort projs: ", this.sortByProject("yyy", this.state.counts ))
          // console.log("sort by month: ", this.sortByMonth("2019-01-4", this.state.counts))
          // console.log("sort by year: ", this.sortByYear("2018", this.state.counts))
          // console.log("productivedate: ", this.findMostProductiveDate(this.state.counts))
          // console.log("productivedaY: ", this.findMostProductiveDayOfWeek(this.state.counts))
          // console.log("avg: ", this.calculateAverage(this.state.counts))
          
        })
      })      
      .catch(err => console.log(err));
  }
  callNewCount = async () => {
    const response = await fetch('/getcounts', {
      method: 'GET'
    });
    const body = await response.json();
    console.log("BODY: ", body)

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  } 

  componentDidUpdate() {
    
  }


  //pass projects array to projects
  render() {
    console.log(this.state.projects,this.state.counts)
    return (
      <div>
        <DisplayProjects 
          projectsList={this.state.projects}
          countsList={this.state.counts} />
        <BarChart countsList={this.state.counts} />
      </div>
    )
  }
}



export default Stats