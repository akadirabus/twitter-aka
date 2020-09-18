import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core"
import { Gif, Emoji, Media, Question } from '../Icon/index'
function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={require('../img/avatar.jpg')} class="tweetBox__avatar"></Avatar>
                    <input placeholder="Neler oluyor?"></input>
                </div>

                <div className="tweetbox__icon">
                    <div className="tweetbox__icon__item">
                        <Media></Media>
                    </div>
                    <div className="tweetbox__icon__item">
                        <Gif></Gif>
                    </div>
                    <div className="tweetbox__icon__item">
                        <Question></Question>
                    </div>
                    <div className="tweetbox__icon__item">
                        <Emoji></Emoji>
                    </div>
                    <Button className="tweetBox__button">Tweetle</Button>

                </div>
            </form>
        </div>
    )
}

export default TweetBox
