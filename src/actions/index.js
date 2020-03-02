export const gotVideosFromApi = videos => {
    return {
        type: 'GOT_VIDEOS_FROM_API',
        payload: videos
    };
};

export const gotVideosFromApiNextPage = videos => {
    return {
        type: 'GOT_VIDEOS_FROM_API_NEXT_PAGE',
        payload: videos
    };
};

export const gotComments = comments => {
    return {
        type: 'GOT_COMMENTS',
        payload: comments
    };
};

export const selectVideo = video => {
    return {
        type: 'SELECT_VIDEO',
        payload: video
    };
};
