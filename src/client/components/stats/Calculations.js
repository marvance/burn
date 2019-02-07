import React from 'react';

class Calculations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: [],
      projects: []

    }
    this.getCounts = this.getCounts.bind(this);
  }
  componentDidMount() {
    this.getCounts()
  }

  getCounts(){
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
          projects: projects
         
        })
      )})      
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
  //helper functions, could be moved elsewhere 
  calculateTotal(countsArray){
    //for a given array (sort by proj/date/etc before calling this function)
    //calc total
  }
  sortByProject(project){
    //for given project, return counts only for that project

  }
  sortByMonth(month, year) {
    //for given month, return counts only for that month

  }
  sortByYear(year){
    //for given year, return counts only for that year
  }
  insertZeroesForEmptyDates(){
    //for every day since user signed up,
    //for every date that has passed since then with no entry,
    //create new entry with word count value "0"

  }
  findMostProductiveDate(monthORyearORalltime){
    //for given time frame, find most productive date

  }
  findMostProductiveDayOfWeek(monthORyearORalltime){
    //for given time frame, find most productive day of week

  }
  calculateAverage(monthORyearORalltime){
    //for given time frame, find daily average
  }

  render() {
    console.log(this.state.projects)
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