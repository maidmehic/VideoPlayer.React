import { combineReducers } from 'redux';

const videosReducer = (videos = [], action) => {
    if (action.type === 'GOT_VIDEOS_FROM_API')
        return action.payload;

    else if (action.type === 'GOT_VIDEOS_FROM_API_NEXT_PAGE')
        return videos.concat(action.payload)

    else
        return videos;
};

const selectedVideoReducer = (video = null, action) => {
    if (action.type === 'SELECT_VIDEO')
        return action.payload;

    return video;
};

export default combineReducers({
    videos: videosReducer,
    selectedVideo: selectedVideoReducer
});

