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
      hardCodedImage: testImage,
      localUpload: [],
      serverUpload: {}
    };
    this.fileInput = React.createRef()
    this.sendFile = this.sendFile.bind(this);
  }

  sendFile(){
    this.callCreateProfile()
      .then(res => this.setState({
          data: res.express.filename,
          serverUpload: res.express
         
        }))
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

    });
    const body = await response.json();
    console.log("BODY: ", body)

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  handleChange = e => {
    console.log(this.fileInput.current.files[0])
    const {name, value} = e.target;
   
    this.setState(prevState => ({
      contents: { ...prevState.contents, [name]: value },
      //added this for file testing, may not need later
      //displayContents: { ...prevState.contents, [name]: value }
      
    }));
    if(e.target.type === 'file') {
      var imgFile = this.fileInput.current.files[0];
      var fileReader = new FileReader();
      fileReader.readAsDataURL(imgFile);
      fileReader.onloadend = function (e) {
        this.setState({
          localUpload: [fileReader.result]
        })
      }.bind(this);
      console.log("CONTENTS ON CHANGE: ", this.state.contents)

      this.sendFile();
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
   
    console.log(this.state.serverUpload)
    console.log(this.state.contents)
    console.log(this.state.displayContents)
    return (
      <div>

        <img
          src={this.state.hardCodedImage}
          alt='Hardcoded Profile Pic'
          style={{width: 100, height: 100}}
        />

        <img
          src={this.state.localUpload}
          alt='Local Pic'
          style={{width: 100, height: 100}}
        />

        <img
          src={this.state.serverUpload.filename}
          alt='Server Pic'
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

        <h1>Pic: {this.state.data}</h1>
        
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