import React from 'react';
import ReactPlayer from 'react-player'

const Video = () => {
    return(
        <>
            <ReactPlayer
            url='https://www.youtube.com/watch?v=mgDe3sevN-I&t=260s'
            className='react-player'
            playing
            width='100%'
            height='200%'
            />
        </>
    );
}

export default Video;