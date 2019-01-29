import React from 'react';
import CountInput from './home/CountInput';
import CountTotal from './home/CountTotal';
//need to figure out how to render local images
// var testImage = require('./../uploads/TestMaryShelley.jpg');




class Home extends React.Component {
    render() {
    return (
      <div className='home-container'>
        <h1>BURN ONE MILLION</h1>
        <CountInput />
        <CountTotal countTotal={this.props.countTotal}/>
      </div>
    )
  }
}

export default Home