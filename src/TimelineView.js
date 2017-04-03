import React from 'react';
import Tweet from './Tweet'


class TimelineView extends React.Component{
  render(){
    let tweets = [
      {full_name: "Iuliia Kotlenko", username: "iuliia", content: "My latest contribution to the advancement of the human race."},
      {full_name: "Pan", username: "pan", content: "My latest contribution to the advancement of the human race."},
      {full_name: "Sam", username: "sam", content: "My latest contribution to the advancement of the human race."},
      {full_name: "Phil", username: "phil", content: ",kdflksdjflskdj"}

    ];
    return(
      <div>
        {
          tweets.map((tweet, id) => {
            return(
              <Tweet data={tweet}/>
            )
          })
        }
      </div>
    )
  }
}






export default TimelineView
