import React from 'react';
import VideoItem from './VideoItem';
import '../style/VideoList.css'

class VideoList extends React.Component {

    render() {
        if (this.props.isfetchingDataFromApi)
            return null;

        return (
            <div className="video-list">
                {
                    this.props.videos.map((video) => {
                        return (
                            <div key={video.id.videoId}>
                                <VideoItem onVideoSelect={this.props.onVideoSelect} video={video}></VideoItem>
                            </div>
                        );
                    })
                }
            </div>

        );
    }
}

export default VideoList;