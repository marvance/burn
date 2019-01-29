import React from 'react';
import PropTypes from 'prop-types';


class Users extends React.Component {
  render(){
    var friends = this.props.list.filter(function(user){
      return user.friend === true;
    });

    var nonFriends = this.props.list.filter(function(user){
      return user.friend !== true;
    });

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(function(user){
            return (
              <li key={user.name}>
                {user.name}
              </li>
            )
          })}



        </ul>
      </div>
    )
  }
}

Users.propTypes = {
  list: PropTypes.array.isRequired,
}

class Profile extends React.Component {
  render(){
    console.log("Props: ", this.props)
    return (
      <div>
        <img
          src={this.props.user.img}
          alt='Profile Pic'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.user.name}</h1>
        <h3>Genre: {this.props.user.genre}</h3>
        <Users list={[
            {name: 'Henry Miller', friend: true},
            {name: 'F Scott Fitzgerald', friend: false},
            {name: 'Anais Nin', friend: true},
            {name: 'Earnest Hemingway', friend: false},
            {name: 'Virginia Woolf', friend: true},
            {name: 'Jack Kerouac', friend: true},
          ]}/>
      </div>
    )
  }
}

Profile.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
}

export default Profile