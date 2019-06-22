import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoList from './videoList';
import VideoDetails from './VideoDetails';
// import youtube from '../api/youtube';

class App extends Component {
    state = { 
        videos:[],
        selectedVideo: null
    }

    componentDidMount(){
        this.onApiCall('bikers');
    }

    onApiCall= async(term)=>{

        const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params: {
                part:"snippet",
                maxResults:10,
                key:"AIzaSyB520Jr_YD-HSS8tvnzasYv-kqKcGd5lgs",
                q:term
            }
        });

        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
    }

    onVideoSelect = (video)=>{
        this.setState({selectedVideo:video});
    }

    render() { 
        return ( <div className="ui container">
            <SearchBar onSearch={this.onApiCall} />
            <div className="ui grid">
                <div className="row">
                    <div className="ten wide column">
                        <VideoDetails video={this.state.selectedVideo} />
                    </div>
                    <div className="six wide column">
                        <VideoList videos={this.state.videos} videoSelect={this.onVideoSelect} />
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default App;