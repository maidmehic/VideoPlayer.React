import React from 'react';

const VideoCommentsItem = (props) => {
    const comment = props.comment.topLevelComment.snippet;
    return (
        <div style={{ marginTop: '20px' }} className="comment">
            <div className="avatar">
                <img alt="" src={comment.authorProfileImageUrl} />
            </div>
            <div className="content">
                <a href={comment.authorChannelUrl} className="author">{comment.authorDisplayName}</a>
                <div className="metadata">
                    <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text" dangerouslySetInnerHTML={{ __html: comment.textDisplay }}></div>
                <div className="actions">
                    <a href="#" className="reply">Reply</a>
                </div>
            </div>
        </div>
    );
}

export default VideoCommentsItem;