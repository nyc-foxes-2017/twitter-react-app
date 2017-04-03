import React from 'react';
import './Tweet.css'


class Tweet extends React.Component {
  render(){
    return(

      <li className="tweet" >
        <img className="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt=""/>
        <div className="tweet-content">
          <p>
            <span className="full-name">{this.props.data.full_name}</span>
            <span className="username">@{this.props.data.username}</span>
            <span className="timestamp">- 6m</span>
          </p>
            <p>{this.props.data.content}</p>
        </div>
      </li>

    )
  }
}


export default Tweet;
