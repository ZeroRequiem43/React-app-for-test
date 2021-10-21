import React from 'react'

const Profile = (props) => {
   return (
      <div className="profile">
         <div className="profile__body">
            <div className="profile__title">
               <h1>Your login - <b>{props.location.state.login}</b></h1>
            </div>
         </div>
      </div>
   )
}

export default Profile