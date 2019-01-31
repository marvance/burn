import React from 'react';
import PropTypes from 'prop-types';
import ProfileForm from './ProfileForm';




class ProfileRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: {
        name: '',
        genre: '',
        bio: ''        
      },
      displayContents: {
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
    const {name, value} = e.target;
    this.setState(prevState => ({
      contents: {name: '', genre: '', bio: ''},
      displayContents: { ...prevState.contents, [name]: value }

    }))

    //alert('A name was submitted: ' + this.state.contents.name + ' writes ' + this.state.contents.genre + '. They are ' + this.state.contents.bio);
  }

  render(){
    return (
      <div>
        <img
          src={this.props.user.img}
          alt='Profile Pic'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.state.displayContents.name}</h1>
        <h3>Genre: {this.state.displayContents.genre}</h3>
        <h3>Bio: {this.state.displayContents.bio}</h3>

          <ProfileForm 
            handleChange={this.handleChange}
            contents={this.state.contents}
            handleSubmit={this.handleSubmit}
          />
      </div>
    )
  }
}

ProfileRender.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
}

export default ProfileRender