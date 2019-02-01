import React from 'react';
import ProfileRender from './profile/ProfileRender';


var USER_PROPS = {
  name: 'Jenn Vance',
  genre: 'nonfiction',
  photo: 'https://via.placeholder.com/100',
  bio: 'JD of Technology'
}

class Profile extends React.Component {
    render() {
    return (
      <div>
        <ProfileRender user={USER_PROPS}/>

      </div>
    )
  }
}

export default Profile