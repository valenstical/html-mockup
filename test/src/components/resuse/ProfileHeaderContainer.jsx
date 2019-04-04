import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ProfileHeader from '../../views/reuse/ProfileHeader';

/**
 * Container component for the ProfileHeader view
 * @export
 * @class ProfileHeaderContainer
 * @extends {Component}
 */
export default class ProfileHeaderContainer extends Component{
    /**
     *Creates an instance of ProfileHeaderContainer.
     * @param {object} props The props object
     * @memberof ProfileHeaderContainer
     */
    constructor(props){
        super(props);
    }
    /**
     * The render method
     * @returns {array} The resulting JSX object
     * @memberof ProfileHeaderContainer
     */
    render(){
        const {activePage} = this.props;
        return(
          <ProfileHeader activePage={activePage} />
        );
    }
}

ProfileHeaderContainer.propTypes = {
    /** Used to hightlight the current page. */
    activePage: PropTypes.oneOf(['DASHBOARD','SETTINGS','PROFILE']).isRequired,
};
