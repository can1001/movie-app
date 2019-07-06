import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> rener() -> componentDidUpdate()

  state = {
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({
        movies: [
          {
            id: 1,
            title: "Matrix",
            poster: "http://ticketimage.interpark.com/Movie/still_image/V16/V1601447p_s01.gif"
          },
          {
            id: 2,
            title: "Full Metal Jacket",
            poster: "https://images-na.ssl-images-amazon.com/images/I/41VXPrZfDXL.jpg"
          },
          {
            id: 3,
            title: "Old Boy",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51U%2BG%2BZgGgL.jpg"
          },
          {
            id: 4,
            title: "Star Wars",
            poster: "http://image.yes24.com/momo/TopCate1291/MidCate003/129025467.jpg"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }

}

export default App;
