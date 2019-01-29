import React from 'react';
import PropTypes from 'prop-types';
import ProfileForm from './ProfileForm';


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

class ProfilePart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: {
        name: '',
        genre: '',
        bio: ''        
      }
    }
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState(prevState => ({
      contents: { ...prevState.contents, [name]: value }
    }));
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      contents: {name: '', genre: '', bio: ''}
    }))
    alert('A name was submitted: ' + this.state.contents.name + ' writes ' + this.state.contents.genre + '. They are ' + this.state.contents.bio);
  }

  render(){
    return (
      <div>
        <img
          src={this.props.user.img}
          alt='Profile Pic'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.state.contents.name}</h1>
        <h3>Genre: {this.state.contents.genre}</h3>
        <Users list={[
            {name: 'Henry Miller', friend: true},
            {name: 'F Scott Fitzgerald', friend: false},
            {name: 'Anais Nin', friend: true},
            {name: 'Earnest Hemingway', friend: false},
            {name: 'Virginia Woolf', friend: true},
            {name: 'Jack Kerouac', friend: true},
          ]}/>
          <ProfileForm 
            handleChange={this.handleChange}
            contents={this.state.contents}
            handleSubmit={this.handleSubmit}
          />
      </div>
    )
  }
}

ProfilePart.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
}

export default ProfilePart