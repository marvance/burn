import React from 'react';
// import CountForm from './home/CountForm';
import CountRender from './home/CountRender';
//need to figure out how to render local images
// var testImage = require('./../uploads/TestMaryShelley.jpg');
import BarChart from './stats/Charts';




class Home extends React.Component {
    render() {
    return (
      <div className='home-container'>
        <h1>BURN ONE MILLION</h1>
        <CountRender countTotal={this.props.countTotal}/>
        <BarChart />
      </div>
    )
  }
}

export default Home