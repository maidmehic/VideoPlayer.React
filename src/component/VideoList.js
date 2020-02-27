import React from 'react';
import VideoItem from './VideoItem';
import '../style/VideoList.css'

import { connect } from 'react-redux';
import { selectVideo } from '../actions';

class VideoList extends React.Component {

    onSelectVideo(video) {
        this.props.selectVideo(video);
    }

    render() {
        if (this.props.isfetchingDataFromApi)
            return null;
        else if (this.props.videos.length === 0)
            return <div>No videos found!</div>;

        return (
            <div className="video-list">
                {
                    this.props.videos.map((video) => {
                        return (
                            <div onClick={() => this.onSelectVideo(video)} key={video.id.videoId}>
                                <VideoItem video={video}></VideoItem>
                            </div>
                        );
                    })
                }
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return { videos: state.videos };
}
export default connect(mapStateToProps, { selectVideo })(VideoList);