import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {PROFILE_PLACEHOLDER} from '../../utils/constants';

/**
 * For a logged in user, this component is displayed under the main navigation bar.
 * Shown on the DASHBOARD, SETTINGS and EDIT PROFILE pages.
 * @export
 * @param {object} props The props object containing values that would be used
 * within this component
 * @returns {array} The resulting JSX object
 */
 const ProfileHeader = (props)=>{
    const {profileImage, firstName, lastName,username, activePage, handleImageUpload } = props;
        return (
          <>
            <header className="page-header">
              <h1>{`My ${activePage}`}</h1>
            </header>
            <div className="profile-box mt-n4">
              <div className="d-inline-block relative profile-img-cover">
                <img src={profileImage} className="img-thumbnail" alt={username} />
                {
                activePage==='PROFILE' && (
                <button type="button" className="btn change-image" onClick={handleImageUpload}>
                  <i className="fas fa-camera" />
                </button>
                )}
              </div>
              <div className="profile-wrapper">
                <h4 className="profile-name">
                  {firstName} 
                  {lastName}
                </h4>
                <p className="profile-username">{`@${username}`}</p>
              </div>
              <div className="profile-footer">
                <Link to="/dashboard" className={`btn ${activePage === 'DASHBOARD' && 'active'}`}><span className="relative">Dashboard</span></Link>
                <Link to="/profile" className={`btn ${activePage === 'PROFILE' && 'active'}`}><span className="relative">Edit profile</span></Link>
                <Link to="/settings" className={`btn ${activePage === 'SETTINGS' && 'active'}`}><span className="relative">Settings</span></Link>
              </div>
            </div>
          </>
        );
};

ProfileHeader.propTypes = {
    /** First name of the user */
    firstName: PropTypes.string,
    /** Last name of the user */
    lastName: PropTypes.string,
    /** The username of the user */
    username: PropTypes.string.isRequired,
    /** Used to hightlight the current page */
    activePage: PropTypes.oneOf(['DASHBOARD','SETTINGS','PROFILE']).isRequired,
    /** The profile image of the user */
    profileImage: PropTypes.string,
    /** Gets called when the user clicks on the upload image button */
    handleImageUpload: PropTypes.func,
};

ProfileHeader.defaultProps = {
  firstName: '',
  lastName: '',
  profileImage: PROFILE_PLACEHOLDER,
  handleImageUpload: ()=>{},
};

export default ProfileHeader;
