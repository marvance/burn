import React from 'react';
import PropTypes from 'prop-types';
import ProfileForm from './ProfileForm';
import axios from 'axios';
var testImage = require('../../../../uploads/TestMaryShelley.jpg');


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
      },
      data: null,
      hardCodedImage: testImage
    };
    this.fileInput = React.createRef()
    this.testFile = this.testFile.bind(this);
    this.callCreateProfile = this.callCreateProfile.bind(this);
  }

  testFile(){
    this.callCreateProfile()
      .then(res => this.setState({data: res.express}))
      .catch(err => console.log(err));
  }

  callCreateProfile = async () => {

    this.state.contents.photo = this.fileInput.current.files[0]
    console.log(this.state.contents)
    const fd = new FormData();
    fd.append('photo', this.state.contents.photo)
    console.log(fd)

    const response = await fetch('/createprofile', {
      method: 'POST',
      body: fd
      // headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        // 'Accept': 'application/json, */*',
        // 'Content-Type': 'application/json',
        // 'Content-Type': 'multipart/form-data',
        // 'cache-control': 'no-cache'
      // }

    });
    const body = await response.json();
    console.log("BODY: ", body)

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  handleChange = e => {
    const {name, value} = e.target;
   
    this.setState(prevState => ({
      contents: { ...prevState.contents, [name]: value },
      //added this for file testing, may not need later
      //displayContents: { ...prevState.contents, [name]: value }
      
    }));
    if(e.target.type === 'file') {
      this.setState(prevState => ({
        contents : {
          photo: this.fileInput.current.files[0]
        }
      }))
      console.log("CONTENTS ON CHANGE: ", this.state.contents)

      this.testFile();
    }


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
  }

  render(){
    console.log(this.state.contents)
    console.log(this.state.displayContents)
    return (
      <div>

        <img
          src={this.state.hardCodedImage}
          alt='Hardcoded Profile Pic'
          style={{width: 100, height: 100}}
        />

        <h1>Name: {this.state.displayContents.name}</h1>
        <h3>Genre: {this.state.displayContents.genre}</h3>
        <h3>Bio: {this.state.displayContents.bio}</h3>

        <ProfileForm 
          handleChange={this.handleChange}
          contents={this.state.contents}
          handleSubmit={this.handleSubmit}
          handleFile={this.handleChange}
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