import React, { Component } from 'react';
import './Movie.css';

const movies = [
    title="StarWars",
    aaa="StarWars",
    bbb="StarWars",
    ccc="StarWars"
]
class Movie extends Component {
    render() {
        return (
            <div className="Movie">
                <MoviePoster></MoviePoster>
                <h1>StarWors</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return(
            <img src="http://image.yes24.com/momo/TopCate1291/MidCate003/129025467.jpg" width="150"></img>
        );
    }
}

export default Movie;