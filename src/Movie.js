import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }


    render() {
        // console.log(this.props);
        return (
            <div className="Movie">
                <MoviePoster poster={this.props.poster}></MoviePoster>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {

    static propTypes ={
        poster: PropTypes.string.isRequired
    }
    
    render() {
        // console.log(this.props);
        return(
            <img src={this.props.poster} width="150"></img>
        );
    }
}

export default Movie;