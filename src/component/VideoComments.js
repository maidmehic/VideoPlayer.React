import React, { useState } from 'react';
import { connect } from 'react-redux';
import VideoCommentsItem from './VideoCommentsItem';
import '../style/VideoComments.css'

const VideoComments = (props) => {

    const [toggled, setToggled] = useState(true);

    const toggleComments = () => {
        toggled ? setToggled(false) : setToggled(true);
    }

    return (
        <div>
            {
                props.comments.length > 0
                    ?
                    <div className="ui comments">
                        <h4 className="ui dividing header" onClick={() => toggleComments()}>
                            Comments
                                <i
                                style={toggled ? { transform: 'rotateZ(-180deg)' } : { transform: 'rotateZ(0deg)' }}
                                className="angle down icon toggle-icon">
                            </i>
                        </h4>
                        <div className={toggled ? "showComments" : "hideComments"}>
                            {
                                props.comments.map(comment => {
                                    return <div key={comment.id}><VideoCommentsItem comment={comment.snippet} /></div>
                                })
                            }
                        </div>
                    </div>
                    :
                    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>No comments!</div>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(VideoComments);