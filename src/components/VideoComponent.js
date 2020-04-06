import React from 'react';
import ReactPlayer from 'react-player'

const Video = () => {
    return(
        <>
            <ReactPlayer
            //url='https://youtu.be/XPjtL0BBu5E'
            className='react-player'
            playing
            width='100%'
            height='200%'
            />
        </>
    );
}

export default Video;