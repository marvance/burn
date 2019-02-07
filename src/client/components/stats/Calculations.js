import React from 'react';

class Calculations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: [],
      projects: []

    }
    this.getCounts = this.getCounts.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.sortByProject = this.sortByProject.bind(this);
    this.sortByMonth = this.sortByMonth.bind(this);
    this.sortByYear = this.sortByYear.bind(this);
    this.findMostProductiveDate = this.findMostProductiveDate.bind(this);
    this.findMostProductiveDayOfWeek = this.findMostProductiveDayOfWeek.bind(this);
  }
  componentDidMount() {
    this.getCounts()
  }

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
          this.calculateTotal(this.state.counts)
          // console.log("total: ",this.calculateTotal(this.state.counts))
          // console.log("sort projs: ", this.sortByProject("yyy", this.state.counts ))
          // console.log("sort by month: ", this.sortByMonth("2019-01-4", this.state.counts))
          // console.log("sort by year: ", this.sortByYear("2018", this.state.counts))
          // console.log("productivedate: ", this.findMostProductiveDate(this.state.counts))
          console.log("productivedaY: ", this.findMostProductiveDayOfWeek(this.state.counts))
          
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
  //helper functions, could be moved elsewhere 
  calculateTotal(countsArray){
    //for a given array (sort by proj/date/etc before calling this function)
    //calc total
    if (countsArray.length) {
      return countsArray.map(function(a){
        return parseInt(a.words)
      }).reduce(function(a,b){
        return a+b
      })
    } 
    else {
      return null
    }
  }
  sortByProject(whichProject, countsArray){
    //for given project, return counts only for that project
    if (countsArray.length) {
      return countsArray.filter(function(item){
        return item.project === whichProject
      })
    } 
    else {
      return null
    }

  }
  sortByMonth(dateString, countsArray) {
    //for given month, return counts only for that month
    if (countsArray.length) {
      return countsArray.filter(function(item){
        return item.date.substring(0, 7) === dateString.substring(0, 7)
      })
    } 
    else {
      return null
    }
  }
  sortByYear(year, countsArray){
    //for given year, return counts only for that year
    if (countsArray.length) {
      return countsArray.filter(function(item){
        console.log(item.date.substring(0, 4))
        console.log(year)
        return item.date.substring(0, 4) === year
      })
    } 
    else {
      return null
    }
  }
  insertZeroesForEmptyDates(){
    //for every day since user signed up,
    //for every date that has passed since then with no entry,
    //create new entry with word count value "0"

  }
  findMostProductiveDate(countsArray){
    //for given time frame, find most productive date
    if (countsArray.length) {
      return countsArray.reduce(function(a,b){
        return (a.words > b.words) ? a : b
      })
    } 
    else {
      return null
    }
  }
  findMostProductiveDayOfWeek(data){
    //for given time frame, find most productive day of week
      //storage for counts by day of week
      var days = [0,0,0,0,0,0,0]
      //names of day of week
      var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      //for every item in array 
      for(var i=0; i<data.length;i++){
        //local variable to track dayofweek
        var dayOfWeek;
        console.log(new Date(data[i].date))
        console.log(new Date(data[i].date).getDay())
        //wouldn't need below conditional if new Date(data[i].date)
        //aka entire date selector
        //were not off by 1 day (5 hours)
        //date selector captures 19:00:00 GMT-0500 of day before actual selected
        //perhaps need to convert date at time of selection?
        if(new Date(data[i].date).getDay() === 6){
          dayOfWeek = 0
        } else {
          dayOfWeek = new Date(data[i].date).getDay()+1
        }
        //sort by day of week and keep running total for each day of week
        days[dayOfWeek] += parseInt(data[i].words)
      }
      //compare totals of each day of week and find highest
      var highestCount = days.reduce(function(a,b){
        return Math.max(a,b)
      })
      var highestIndex = days.indexOf(highestCount)
      var productiveDay = dayNames[highestIndex]
      return productiveDay

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