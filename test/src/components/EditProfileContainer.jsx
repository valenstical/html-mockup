import React, {Component} from 'react';

import EditProfile from '../views/EditProfile';
import ProfileHeader from './resuse/ProfileHeaderContainer';
import Wrapper from '../views/reuse/Wrapper';


/**
 * Container component for the EditProfile view
 * @export
 * @class EditProfileContainer
 * @extends {Component}
 */
export default class EditProfileContainer extends Component{
     /**
     *Creates an instance of EditProfileContainer.
     * @param {object} props The props object
     * @memberof EditProfileContainer
     */
    constructor(props){
        super(props);
        this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
    }
    handleUpdateProfile(event){
      event.preventDefault();
      const data = new FormData(event.target);
      alert(data.get('username'));
    }
     /**
     * The render method
     * @returns {array} The resulting JSX object
     * @memberof EditProfileContainer
     */
    render(){
        return (
          <Wrapper>
            <ProfileHeader activePage="PROFILE" username="alexis" />
            <EditProfile handleUpdateProfile={this.handleUpdateProfile} />
          </Wrapper>
        );
    }
}