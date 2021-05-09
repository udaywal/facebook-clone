import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profileImage="https://www.dreshare.com/wp-content/uploads/2019/11/Brooke-Ence-age-height-and-weight.jpg"
                userName="Brooke Ence"
                timestamp="May 3, 21"
                message="Ready for the muscle session tommorrow. 💪🏻"
                image="https://ucarecdn.com/d2a7a1d4-d996-4169-95bd-63138d2ee811/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            />
            <Post 
                profileImage="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2020-08-03-at-2-41-55-pm-1596490932.png"
                userName="Adison Rae"
                timestamp="May 4, 21"
                message="It was fun night at the TikTok super star show. 😎"
                image="https://assets.entrepreneur.com/content/3x2/2000/1607541276-GettyImages-1285871962.jpg"
            />
            <Post 
                profileImage="https://therumpus.net/wp-content/uploads/2018/01/Jeannie-Vanasco.jpg"
                userName="Ayesha Karo"
                timestamp="May 5, 21"
                message="We held a meeting with our team, it went well. ✅"
                image="https://www.daysoftheyear.com/wp-content/uploads/business-womens-day1.jpg"
            />
        </div>
    )
}

export default Feed
