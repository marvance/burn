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
        <h1>Friends You Follow:</h1>
        <ul>
          {friends.map(function(user){
            return (
              <li key={user.name}>
                <h2>{user.name}</h2>
                <h3>{user.genre}</h3>
                <p>{user.bio}</p>
              </li>
            )
          })}
       </ul>
        <h1>You May Want to Follow:</h1>
        <ul>
          {nonFriends.map(function(user){
            return (
              <li key={user.name}>
                <h2>{user.name}</h2>
                <h3>{user.genre}</h3>
                <p>{user.bio}</p>
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

export default Users