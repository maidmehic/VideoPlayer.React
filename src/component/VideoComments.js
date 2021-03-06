import React from 'react';
import { connect } from 'react-redux';
import VideoCommentsItem from './VideoCommentsItem';
import '../style/VideoComments.css'

class VideoComments extends React.Component {

    state = { toggled: true };

    toggleComments() {
        this.state.toggled ? this.setState({ toggled: false }) : this.setState({ toggled: true });
    }

    render() {
        return (
            <div>
                {
                    this.props.comments.length > 0
                        ?
                        <div className="ui comments">
                            <h4 className="ui dividing header" onClick={() => this.toggleComments()}>
                                Comments
                                <i
                                    style={this.state.toggled ? { transform: 'rotateZ(-180deg)' } : { transform: 'rotateZ(0deg)' }}
                                    className="angle down icon toggle-icon">
                                </i>
                            </h4>
                            <div className={this.state.toggled ? "showComments" : "hideComments"}>
                                {
                                    this.props.comments.map(comment => {
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

}

const mapStateToProps = (state) => {
    return { comments: state.comments };
}
export default connect(mapStateToProps)(VideoComments);