import axios from 'axios';


  //Calculations functions, could be moved elsewhere 
  export function calculateTotal(countsArray){
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
  export function sortByProject(whichProject, countsArray){
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
  export function sortByMonth(dateString, countsArray) {
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
  export function sortByYear(year, countsArray){
    //for given year, return counts only for that year

    if (countsArray.length) {
      return countsArray.filter(function(item){
        // console.log(item.date.substring(0, 4))
        // console.log(year)
        return item.date.substring(0, 4) === year
      })
    } 
    else {
      return null
    }
  }
  function insertZeroesForEmptyDates(){
    //for every day since user signed up,
    //for every date that has passed since then with no entry,
    //create new entry with word count value "0"

  }
  export function findMostProductiveDate(countsArray){
    //for given time frame, find most productive date
    if (countsArray.length) {
      return countsArray.reduce(function(a,b){
        return (parseInt(a.words) < parseInt(b.words)) ? b : a
      })
    } 
    else {
      return null
    }
  }
  export function findMostProductiveDayOfWeek(data){
    //for given time frame, find most productive day of week
      //storage for counts by day of week

      var days = [0,0,0,0,0,0,0]
      //names of day of week
      var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      //for every item in array 
      for(var i=0; i<data.length;i++){
        //local variable to track dayofweek
        var dayOfWeek;

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
  export function calculateAverage(countsArray){
    //for given time frame, find daily average
    //perhaps run allTime calcs from date of first entry, rather than date of signup
    //array will already be filtered by year, month, or none if want alltime
    //zeroes should also already be added to given time span
    //days in current month or year that have not yet occured should produce no value, not even 0
    //can account for this in insertZeroes function
    //given that the array will already be sorted,
    //all we need to do is find number of days in countsArray
    //and this function turns out very simple
    return (this.calculateTotal(countsArray) / countsArray.length).toFixed(0)
  }


