import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                thumbnailImage="https://graziamagazine.com/us/wp-content/uploads/sites/15/2020/12/Jennifer-Lopez-Skin-3.jpg" 
                profilePic="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jl1-jennifer-lopez-101020-6a-shot-04-165-crop-1606857570.jpg" 
                userName="Jennifer Lopez" />
            <Story 
                thumbnailImage="https://i.pinimg.com/736x/ee/c6/14/eec61400296af8ca7e3c9a80f71dc7ac.jpg" 
                profilePic="https://images.sadhguru.org/sites/default/files/inline-images/isha-home-mystic_new.jpg" 
                userName="Sadhguru" />
            <Story 
                thumbnailImage="https://codedamn.com/assets/images/creators/aniakubow.jpeg" 
                profilePic="https://yt3.ggpht.com/ytc/AAUvwnjSRt8sIbeM7P--pHoUDh67sDhaNTCMF_XiNOCvUw=s900-c-k-c0x00ffffff-no-rj" 
                userName="Ania Kubow" />
            <Story 
                thumbnailImage="https://data.whicdn.com/images/313525434/original.jpg" 
                profilePic="https://i.insider.com/5ecfd53c988ee318b47ad472?width=700" 
                userName="Camila Cabello" />
            <Story 
                thumbnailImage="https://www.arsenal.com/sites/default/files/2021-03/750x1334_wallpaper%20%281%29.jpg" 
                profilePic="https://wallpapercave.com/wp/wp7422182.jpg" 
                userName="Arsenal" />
        </div>
    )
}

export default StoryReel
