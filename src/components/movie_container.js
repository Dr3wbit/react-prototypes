import React, { Component } from 'react';
import Movie from './movies';
import axios from 'axios';

class MovieContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            movies : [],
        }
    }
    render() {
        const movieList = this.state.movies.map((movieInfo, index)=>{
            return <Movie info={movieInfo} key={index}/>
        })
        return (
            <div className='row'>
                {movieList}
            </div>
        )
    }
    componentWillMount(){
        const API_URL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json'
        axios.get(API_URL).then((response)=>{
            this.setState({
                movies : response.data.feed.entry,
            })
        })
    }
}

export default MovieContainer;