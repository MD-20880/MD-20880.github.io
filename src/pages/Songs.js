import React from "react";




class SongDisplay extends React.Component {
    render(){
      const musicLyrics = this.props.musicLyrics
      const musicTitle = this.props.musicTitle
      return (
        <div className='songPage'>
          <div className = "lyrics">
            <h1 className = "musicTitle"> {musicTitle}</h1 > 
            <p className = "musicLyrics"> {musicLyrics} </p > 
          </div>
        </div>
        
      )
    }
}

export default SongDisplay;