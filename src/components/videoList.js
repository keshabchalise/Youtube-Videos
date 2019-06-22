import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props)=>{

    const renderVideoItems = props.videos.map(video=>{
        return <VideoItem key={video.id.videoId} video={video} videoItemSelect={props.videoSelect} />
    })
    return (
        <div className="ui relaxed divided list">
            {renderVideoItems}
        </div>
    );
}

export default VideoList;