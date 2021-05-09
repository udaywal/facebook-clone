import React, { useState } from 'react'
import './MessageSender.css'

import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = e => {

        // TODO: saving the data to db

        setInput("");
        setImageUrl("");
        e.preventDefault();
    }

    return (
        <div className="messageSender">
            
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input 
                        placeholder="What's on your mind?"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <input 
                        placeholder="Image URL (optional)"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    />
                    <button type="submit" onClick={handleSubmit}>
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "goldenrod" }} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
