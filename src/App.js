import React from 'react';
import SearchBar from './component/SearchBar';
import VideoList from './component/VideoList';
import Spinner from './component/Spinner';
import VideoPlayer from './component/VideoPlayer';
import './App.css';

import { connect } from 'react-redux';
import { getVideosByQuery } from './service/youtubeApi';
import { gotVideosFromApi, selectVideo, gotVideosFromApiNextPage } from './actions';
import BackToTop from './component/BackToTop';


class App extends React.Component {

  state = { isfetchingDataFromApi: true };
  _searchQuery = '';
  _nextPageToken = '';

  componentDidMount() {
    this.getVideosFromApi('', '');
  }

  onSearchSubmit(searchQuery) {
    this._searchQuery = searchQuery;
    this._nextPageToken = '';
    this.getVideosFromApi(this._searchQuery, '');
  }

  async getVideosFromApi(searchQuery, nextPageToken) {
    if (!nextPageToken)//dont show loader when loading more videos
      this.setState({ isfetchingDataFromApi: true });

    await getVideosByQuery(searchQuery, nextPageToken)
      .then((res) => {

        this._nextPageToken = res.data.nextPageToken;

        if (nextPageToken)//if user clicked Load More
          this.props.gotVideosFromApiNextPage(res.data.items);
        else {
          this.props.gotVideosFromApi(res.data.items);

          this.setState({ isfetchingDataFromApi: false });

          if (res.data.items.length > 0)
            this.props.selectVideo(res.data.items[0]);
          else
            this.props.selectVideo(null);
        }

      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadMore() {
    this.getVideosFromApi(this._searchQuery, this._nextPageToken);
  }

  render() {
    return (
      <div>
        <div className="ui container yt-main">
          <SearchBar onSubmit={(query) => this.onSearchSubmit(query)}></SearchBar>

          <div className="wrapper">
            <VideoPlayer
              isfetchingDataFromApi={this.state.isfetchingDataFromApi}>
            </VideoPlayer>

            <VideoList
              loadMore={() => this.loadMore()}
              isfetchingDataFromApi={this.state.isfetchingDataFromApi}>
            </VideoList>

            <BackToTop></BackToTop>
          </div>
          <Spinner isfetchingDataFromApi={this.state.isfetchingDataFromApi}></Spinner>
        </div>
      </div >
    );
  }
}

export default connect(null, { gotVideosFromApi, selectVideo, gotVideosFromApiNextPage })(App);
