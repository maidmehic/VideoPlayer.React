import axios from 'axios'

const ACCESS_KEY = 'AIzaSyBmH-_dMVpfiNkjYvArwmqAfVl6DdC9P3o';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export async function getVideosByQuery(query, pageToken) {
    return await axios.get(BASE_URL + '/search', {
        params: {
            part: 'snippet',
            type: 'video',
            maxResults: 10,
            key: ACCESS_KEY,
            q: query,
            pageToken: pageToken
        }
    });
}