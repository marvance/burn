import React from 'react';
import ProfilePart from './profile/ProfileParts';
import ProfileForm from './profile/ProfileForm';


var USER_PROPS = {
  name: 'Jenn Vance',
  genre: 'nonfiction',
  img: 'https://via.placeholder.com/100'
}

class Profile extends React.Component {
    render() {
    return (
      <div>
        <ProfilePart user={USER_PROPS}/>
        
      </div>
    )
  }
}

export default Profile