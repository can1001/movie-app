import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
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
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
