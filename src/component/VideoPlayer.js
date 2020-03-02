import React from 'react';
import { getCommentsByVideoId } from '../service/youtubeApi'
import { connect } from 'react-redux';
import { gotComments } from '../actions'
import VideoComments from './VideoComments';

class VideoPlayer extends React.Component {

    isLoadingFromService = false;
    lastLoadedCommentsVideoId = '';

    componentDidUpdate() {
        this.getVideoComments();
    }

    getVideoComments() {

        if (this.props.selectedVideo && !this.isLoadingFromService && this.lastLoadedCommentsVideoId !== this.props.selectedVideo.id.videoId) {
            this.isLoadingFromService = true;
            getCommentsByVideoId(this.props.selectedVideo.id.videoId)
                .then(res => {
                    this.isLoadingFromService = false;
                    this.lastLoadedCommentsVideoId = this.props.selectedVideo.id.videoId;
                    this.props.gotComments(res.data.items);
                })
                .catch(err => {
                    this.isLoadingFromService = false;
                    console.log(err)
                })
        }
    }

    renderContent() {
        return this.props.selectedVideo && !this.props.isfetchingDataFromApi
            ?
            <div style={{ marginRight: '15px', flex: '2' }}>
                <div className="ui embed">
                    <iframe title={this.props.selectedVideo.snippet.title} src={`https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="ui segment">
                    <h4 dangerouslySetInnerHTML={{ __html: this.props.selectedVideo.snippet.title }}></h4>
                    <p dangerouslySetInnerHTML={{ __html: this.props.selectedVideo.snippet.description }}></p>
                    <VideoComments />
                </div>
            </div>
            :
            null;
    }

    render() {
        return (
            this.renderContent()
        );
    }

}

const mapStateToProps = (state) => {
    return { selectedVideo: state.selectedVideo };
}
export default connect(mapStateToProps, { gotComments })(VideoPlayer);