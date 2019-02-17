import React from 'react';
import ReactFauxDOM from 'react-faux-dom';
import * as d3 from 'd3';
 
class BarChart extends React.Component {
 
  render() {
    // let data = this.props.data

 
    //Create the element
    const chartDiv = new ReactFauxDOM.Element('div')
     


   //all you need for a bar chart
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    // const dataset = [
    //   {
    //     name: 'memoir',
    //     value: 12
    //   },
    //   {
    //     name: 'memoir',
    //     value: 31
    //   },
    //   {
    //     name: 'novel',
    //     value: 17
    //   },
    //   {
    //     name: 'novel',
    //     value: 25
    //   }
    // ]
    
    d3.select(chartDiv).selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d*10 + "px"))


    //end simple bar chart
 
    //DOM manipulations done, convert to React
    return chartDiv.toReact()
  }
 
}
export default BarChart


