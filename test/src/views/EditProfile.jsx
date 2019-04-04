/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import {PropTypes}  from 'prop-types';

/**
 * Displays the user profile details. Users can also update their profile here.
 * @export
 * @param {object} props The props object containing values that would be used
 * within this component.
 * @returns {array} The resulting JSX object
 */
const EditProfile = (props)=> {
    const {firstName, lastName, username, email, bio, handleUpdateProfile} = props;
    return (
      <>
        <div className="card mb-5 mt-4">
          <form className="form p-sm-4 p-3" onSubmit={handleUpdateProfile}> 
            <div className="form-group mb-4"> 
              <label htmlFor="fname" className="font-weight-bold">First Name</label>             
              <input type="text" className="form-control text-capitalize" id="fname" defaultValue={firstName} name="firstname" /> 
            </div>
            <div className="form-group mb-4"> 
              <label htmlFor="lname" className="font-weight-bold">Last Name</label>             
              <input type="text" className="form-control text-capitalize" id="lname" defaultValue={lastName} name="lastname" /> 
            </div>
            <div className="form-group mb-4"> 
              <label htmlFor="email" className="font-weight-bold">Email</label>             
              <input type="email" className="form-control text-lowercase" id="email" defaultValue={email} name="email" required /> 
            </div>
            <div className="form-group mb-4"> 
              <label htmlFor="fname" className="font-weight-bold">Username</label>             
              <input type="text" className="form-control" id="username" defaultValue={username} name="username" required /> 
            </div>
            <div className="form-group mb-4"> 
              <label htmlFor="bio" className="font-weight-bold">Bio</label>             
              <textarea className="form-control" id="bio" name="bio" defaultValue={bio} />             
            </div>         
            <button type="submit" className="btn btn-brand btn-plain">Update profile</button>         
          </form>
        </div>

      </>
    );
};

EditProfile.propTypes = {
  /** The firstname of the user */
  firstName: PropTypes.string,
  /**The last name of the user */
  lastName: PropTypes.string,
  /** The unique username of the user */
  username: PropTypes.string.isRequired,
  /** Email address of the user */
  email: PropTypes.string.isRequired,
  /** A short bio of the user */
  bio: PropTypes.string,
  /** Called when the update profile button is clicked */
  handleUpdateProfile: PropTypes.func,
};

EditProfile.defaultProps = {
firstName: '',
lastName: '',
bio: '',
handleUpdateProfile: ()=>{},
};

export default EditProfile;
