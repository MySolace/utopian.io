//
// Reference reactjs and StoryDeleted.less
//
import React from 'react';
import {
    FormattedMessage
} from 'react-intl';
import './StoryDeleted.less';

//
// Define StoryDeleted for returning a message to the user about the post
// having been deleted.
//
const StoryDeleted = () => ( <
    div className = "StoryDeleted" >
    <
    h3 >
    <
    FormattedMessage id = "post_deleted"
    defaultMessage = "This post has been deleted" / >
    <
    /h3> <
    /div>
);

//
// Export the constant to use elsewhere.
//
export default StoryDeleted;
