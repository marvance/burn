import React from 'react';
import PropTypes from 'prop-types';
import ProfileForm from './ProfileForm';
import axios from 'axios';

var fixedUrl = axios.create({
  baseUrl: 'localhost:8081',
  proxy: false
})


class ProfileRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: {
        name: '',
        genre: '',
        bio: '',
        photo: ''        
      },
      displayContents: {
        name: '',
        genre: '',
        bio: '',
        photo: '' 
      }
    }
    this.fileInput = React.createRef()
  }

  uploadFile = () => {
    const fd = new FormData();
    fd.append('photo', this.state.contents.photo, this.state.contents.photo.name)
    axios.post('/createprofile', fd)
      .then(response => {
        console.log(response);
      })
  }

  hitTest = () => {
    // axios.get('http://10.0.0.13:8081/test')
    fixedUrl.get('/test')
      .then(response => {
        console.log(response);
      })
  }

  handleFile = e => {
    console.log(e.target.files)
    const upload_file = this.fileInput;
    console.log(upload_file)
    console.log(this.fileInput.current)
    console.log(this.state.contents)
    this.uploadFile();
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.hitTest()
    
    this.setState(prevState => ({
      contents: { ...prevState.contents, [name]: value },
      //added this for file testing, may not need later
      //displayContents: { ...prevState.contents, [name]: value }
      
    }));

  }

  handleSubmit = e => {
    e.preventDefault();
    const {name, value} = e.target;

    this.setState(prevState => ({
      contents: {name: '', genre: '', bio: '', photo: ''},
      displayContents: { ...prevState.contents, [name]: value }

    }))

    alert(
      `Selected file - ${
        this.fileInput.current.files[0].name
      }`
    );
    //alert('A name was submitted: ' + this.state.contents.name + ' writes ' + this.state.contents.genre + '. They are ' + this.state.contents.bio);
  }

  render(){
    console.log(this.fileInput.current)
    console.log(this.state.contents)
    console.log(this.state.displayContents)
    return (
      <div>
        <img
          src={this.state.displayContents.photo}
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
          handleFile={this.handleFile}
          fileInput={this.fileInput}
        />
      </div>
    )
  }
}

ProfileRender.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
}

export default ProfileRender