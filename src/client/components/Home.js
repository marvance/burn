import React from 'react';
import CountInput from './home/CountInput';
import CountTotal from './home/CountTotal';
//move Profile to its own file later; this is just to test
import Profile from './Profile';
//need to figure out how to render local images
// var testImage = require('./../uploads/TestMaryShelley.jpg');



var USER_PROPS = {
  name: 'Jenn Vance',
  genre: 'nonfiction',
  img: 'https://via.placeholder.com/100'
}

class Home extends React.Component {
    render() {
    return (
      <div>
        <CountInput />
        <CountTotal countTotal={this.props.countTotal}/>
        <Profile user={USER_PROPS}/>
      </div>
    )
  }
}

export default Home