import React from 'react'
import "./Widget.css"

function Widget() {
    return (
        <div className="widget">
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGoogleCloudIN&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=158342598050436" 
                width="340" 
                height="1500" 
                style={{ border:"none", overflow:"hidden"}} 
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                allow="encrypted-media;">
            </iframe>
        </div>
    )
}

export default Widget
