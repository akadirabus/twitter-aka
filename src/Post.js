import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import { Share, Like, Retweet, Reply, ArrowBottom } from './Icon/';

function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={require('./img/avatar.jpg')} class="tweetBox__avatar"></Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3 className="post__Name">
                            Abdulkadir Abuş
                            <span class="post__userName">
                                @akadirabus · 2d
                            </span>

                            <ArrowBottom className="post__arrowBattom"></ArrowBottom>

                        </h3>

                    </div>
                    <div className="post__headerDescription">
                        <p>abdulkadir Abuşabdulkadir Abuşabdulkadir Abuşabdulkadir Abuşabdulkadir Abuşabdulkadir Abuşabdulkadir Abuşabdulkadir Abuşabdulkadir Abuşabdulkadir Abuş</p>
                    </div>
                </div>
                <div className="post__footer">
                    <Reply className="post__footer__Reply"></Reply>
                    <Retweet className="post__footer__Retweet"></Retweet>
                    <Like className="post__footer__Like"></Like>
                    <Share className="post__footer__Share"></Share>
                </div>
            </div>
        </div>
    )
}

export default Post
