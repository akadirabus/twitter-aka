import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import { TimelineProp } from './Icon/index'


function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Anasayfa</h2>
                <TimelineProp class="feed__timelineProp"></TimelineProp>
            </div>

            {/* TwettBox */}
            <TweetBox></TweetBox>

            {/* Posts */}
        </div>
    )
}

export default Feed
