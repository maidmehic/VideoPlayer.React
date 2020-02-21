import React from 'react';
import SearchBar from './component/SearchBar';
import { getVideosByQuery } from './service/youtubeApi';
import VideoList from './component/VideoList';
import Spinner from './component/Spinner';
import VideoPlayer from './component/VideoPlayer';
import './App.css';


class App extends React.Component {

  state = { videos: [], selectedVideo: null, isfetchingDataFromApi: false };

  async onVideoSearchSubmit(query) {//we don't need to use async/await here as we already use promises
    this.setState({ isfetchingDataFromApi: true });

    await getVideosByQuery(query)
      .then((res) => {
        console.log(res.data.items);
        this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
      })
      .catch((err) => {
        console.log(err);
      })

    this.setState({ isfetchingDataFromApi: false });
  }

  componentDidMount() {
    this.onVideoSearchSubmit('');
  }

  onVideoSelect(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div>
        <div className="ui container yt-main">
          <SearchBar onSubmit={(e) => this.onVideoSearchSubmit(e)}></SearchBar>

          <div className="wrapper">
            <VideoPlayer
              selectedVideo={this.state.selectedVideo}
              isfetchingDataFromApi={this.state.isfetchingDataFromApi}>
            </VideoPlayer>


            <VideoList
              isfetchingDataFromApi={this.state.isfetchingDataFromApi}
              videos={this.state.videos}
              onVideoSelect={(video) => this.onVideoSelect(video)}>
            </VideoList>
          </div>

          <Spinner isfetchingDataFromApi={this.state.isfetchingDataFromApi}></Spinner>
        </div>
      </div>
    );
  }
}

export default App;
