import React from 'react';

const VideoPlayer = ({ selectedVideo, isfetchingDataFromApi }) => {

    const rendered = selectedVideo && !isfetchingDataFromApi
        ?
        <div style={{ marginRight: '15px', flex: '2' }}>
            <div className="ui embed">
                <iframe title={selectedVideo.snippet.title} src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="ui segment">
                <h4 dangerouslySetInnerHTML={{ __html: selectedVideo.snippet.title }}></h4>
                <p dangerouslySetInnerHTML={{ __html: selectedVideo.snippet.description }}></p>
            </div>
        </div>
        :
        null;

    return (
        rendered
    );
}

export default VideoPlayer;