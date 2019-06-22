import axios from 'axios';

const KEY = "AIzaSyB520Jr_YD-HSS8tvnzasYv-kqKcGd5lgs";

export default axios.create({
    baseURL :"https://www.googleapis.com/youtube/v3",
    params: {
        part:"snippet",
        maxResults:5,
        key:KEY
    }
});