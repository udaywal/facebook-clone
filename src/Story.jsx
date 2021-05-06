import React from 'react'
import './Story.css'

import { Avatar } from '@material-ui/core';

function Story({ thumbnailImage, profilePic, userName }) {
    return (
        <div style={{ backgroundImage: `url(${thumbnailImage})` }} className="story">
            <Avatar src={profilePic} className="story__avatar" />
            <h4>{userName}</h4>
        </div>
    )
}

export default Story
