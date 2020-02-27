import React from 'react';

import { connect } from 'react-redux';

const VideoPlayer = (props) => {
    const rendered = props.selectedVideo && !props.isfetchingDataFromApi
        ?
        <div style={{ marginRight: '15px', flex: '2' }}>
            <div className="ui embed">
                <iframe title={props.selectedVideo.snippet.title} src={`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="ui segment">
                <h4 dangerouslySetInnerHTML={{ __html: props.selectedVideo.snippet.title }}></h4>
                <p dangerouslySetInnerHTML={{ __html: props.selectedVideo.snippet.description }}></p>
            </div>
        </div>
        :
        null;

    return (
        rendered
    );
}

const mapStateToProps = (state) => {
    return { selectedVideo: state.selectedVideo };
}
export default connect(mapStateToProps)(VideoPlayer);