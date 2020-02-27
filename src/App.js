import React from 'react';
import SearchBar from './component/SearchBar';
import VideoList from './component/VideoList';
import Spinner from './component/Spinner';
import VideoPlayer from './component/VideoPlayer';
import './App.css';

import { connect } from 'react-redux';
import { getVideosByQuery } from './service/youtubeApi';
import { gotVideosFromApi, selectVideo } from './actions';


class App extends React.Component {

  state = { isfetchingDataFromApi: true };

  async getVideosFromApi(searchQuery) {
    this.setState({ isfetchingDataFromApi: true });

    await getVideosByQuery(searchQuery)
      .then((res) => {
        this.setState({ isfetchingDataFromApi: false });
        this.props.gotVideosFromApi(res.data.items);

        if (res.data.items.length > 0)
          this.props.selectVideo(res.data.items[0]);
        else
          this.props.selectVideo(null);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="ui container yt-main">
          <SearchBar onSubmit={(query) => this.getVideosFromApi(query)}></SearchBar>

          <div className="wrapper">
            <VideoPlayer
              isfetchingDataFromApi={this.state.isfetchingDataFromApi}>
            </VideoPlayer>

            <VideoList
              isfetchingDataFromApi={this.state.isfetchingDataFromApi}>
            </VideoList>
          </div>
          <Spinner isfetchingDataFromApi={this.state.isfetchingDataFromApi}></Spinner>
        </div>
      </div >
    );
  }
}

export default connect(null, { gotVideosFromApi, selectVideo })(App);
