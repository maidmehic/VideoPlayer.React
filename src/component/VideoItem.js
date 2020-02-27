import React from 'react';
import '../style/VideoItem.css';
import moment from 'moment'

class VideoItem extends React.Component {

    render() {
        return (
            <div className="video-item">
                <img alt="" src={this.props.video.snippet.thumbnails.medium.url}></img>
                <div className="video-details">
                    <h5 dangerouslySetInnerHTML={{ __html: this.props.video.snippet.title }}></h5>
                    {/*dangerouslySetInnerHTML aka innerHTML */}
                    <label className="video-some-details">{this.props.video.snippet.channelTitle}</label>
                    <label className="video-some-details" style={{ marginTop: '-3px' }}>{moment(this.props.video.snippet.publishedAt).format('D MMMM YYYY')}</label>
                </div>
            </div>
        );
    }
}

export default VideoItem;