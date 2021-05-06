import React from 'react'
import './MessageSender.css'

import { Avatar } from '@material-ui/core'

function MessageSender() {

    const handleSubmit = e => {
        console.log("handleSubmit");
    }

    return (
        <div className="messageSender">
            
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input placeholder="What's on your mind"/>
                    <input placeholder="Image URL (optional)"/>
                    <button type="submit" onClick={handleSubmit}>
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">

            </div>

        </div>
    )
}

export default MessageSender
