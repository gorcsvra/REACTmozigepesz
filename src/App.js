import React, { Component } from "react";
import "./App.css";
import MovieRow from "./MovieRow.js";
import $ from "jquery"

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {}
   /* console.log("This is")

    this.const movies = [
      {
        id: 0,
        poster_src: 
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/45ho3J929VhtfYgTAgADQJyorYp.jpg",
        title: "Avengers: Infinity War",
        overview: "As the Avengers",
      },
      {
        id: 1,
        poster_src:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2F2HzloPm5gFYGaJ9ub3orN74hf.jpg",
        title: "The Avengers",
        overview: "As the Avengers",
      },
      {
        id: 2,
        poster_src:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oSjxEkgwITSdpi7lIIIpxZ546g9.jpg",
        title: "Avengers: Infinity War",
        overview: "This is my second owerview",
      },
    ];

    var movieRows = [];
    movies.forEach((movie) => {
      console.log(movie.title);
      const movieRow = <MovieRow movie={movie} />;
      movieRows.push(movieRow);
    });

    this.state = { rows: movieRows };*/
  
this.performSearch("ant man");
}

performSearch(searchTerm) {
  console.log("Perform search using moviedb")
  const urlString = "https://api.themoviedb.org/3/movie?api_key=da2b2674d6bcb0d6b1ab24925f2ce427&query=" + searchTerm
  $.ajax({
    url:urlString,
    success: (searchResults) => {
      console.log("Fetched data succesfully")

      const results = searchResults.results

var movieRows = []

results.forEach((movie) => {
movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
 console.log(movie.poster_path)
  const movieRow = <MovieRow key={movie.id} movie={movie}/>
  movieRows.push(movieRow)
})

this.setState({rows: movieRows})
  },
error: (xhr, status, err) => {
  console.error("Failed to fetch data")
}
  })
}

searchChangeHandler(event) {
console.log(event.target.value)
const boundObject = this
const searchTerm = event.target.value
this.performSearch(searchTerm)
}

  render(){
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
            <td>
                <img
                  width="50"
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
                  alt="svg"
                />
              </td>
              <td width="8" />
              <td>
                <img
                  width="50"
                  src="291690_viddler_movie_social_social media_logo_icon.svg"
                  alt="svg"
               />
              </td>
              <td width="8" />
              <td>
                <h1>Mozigépész</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          style={{
            fontSize: 24,
            display: "block",
            width: "98%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
          }} onChange={this.searchChangeHandler.bind(this)}placeholder="Keresés" />

        {this.state.rows}

      </div>
    );
        
  }
}

export default App
