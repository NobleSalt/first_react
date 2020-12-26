// import axios from "axios";
import _ from "lodash";
import React, { Component } from "react";
import "../bootstrap.css";
import "../fontawesome.css";
import paginate from "../utils/paginate";
import { fakeGenre } from "./fakeGenre";
import { fakeMovies } from "./fakeMovies";
import ListGroup from "./listGroup";
import "./movies.css";
import MoviesTable from "./moviesTable";
import Pagination from "./pagination";
// const net = require('net');

// net.createServer()

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 3,
    currentPage: 1,
    selectedGenre: false,
    sortColumn: { path: "title", order: "asc" },
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
    console.log(sortColumn);
  };

  handleGenreSelect = (groupGenre) => {
    // console.log("groupGenre", groupGenre);
    // const allMovies = this.state.movies.filter(
    //   (movie) => movie.genre === groupGenre
    // );
    // console.log("allMovies", allMovies);
    // this.setState({ movies: allMovies });
    this.setState({ selectedGenre: groupGenre, currentPage: 1 });
    // console.log("allMovies", allMovies);
    console.log("groupGenre", groupGenre);
  };

  handlePageChange = (page) => {
    console.log("Page", page);
    this.setState({ currentPage: page });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    console.log(movie);
  };

  // fetchGenre = async () => {
  //   const { data } = await axios.get("http://localhost:8000/genres");

  //   this.setState({ genres: data });
  // };

  // fetchMovies = async () => {
  //   const { data } = await axios.get("http://localhost:8000/movies");

  //   const movies = data;

  //   this.setState({ movies });
  // };

  // handleAllMovies = (movie) => {
  //   const movies = this.state.movies.filter((m) => m._id !== movie._id);
  //   this.setState({ movies });
  //   console.log(movie);
  // };

  componentDidMount() {
    console.log("Mounted ");

    const genres = [{ name: "All Genres", _id: "" }, ...fakeGenre];

    this.setState({ genres, movies: fakeMovies });
  }
  // async componentDidMount() {
  //   console.log("Mounted", this.state.currentGenre);
  //   // const fetchGenre = async ()=>{
  //   //   const {data} = await axios.get("http://localhost:8000/genres");

  //   //   this.setState({genres: data});
  //   // }
  //   // const fetchMovies = async ()=>{
  //   //   const {data} = await axios.get("http://localhost:8000/movies");

  //   // let config = {
  //   //   xsrfCookieName: "csrftoken",
  //   //   headers: {
  //   //     "X-Requested-With": "XMLHttpRequest",
  //   //   },
  //   //   "Access-Control-Allow-Origin": true,
  //   // };

  //   let config = {

  //     xsrfCookieName: "csrftoken",
  //     xsrfHeaderName: "X-CSRFToken",
  //     headers: {
  //         'X-Requested-With': 'XMLHttpRequest'
  //     }
  //   }

  //   //     let config = {

  //   //     headers: {
  //   //     Host: "localhost:8000",
  //   // Accept: "text/html,application/xhtml+xml,application/xml",
  //   // AcceptLanguage: "en-US,en;q=0.5",
  //   // AcceptEncoding: "gzip, deflate",
  //   // Cookie: {csrftoken:"fbpifi30c7p8AEM7v0qAKwK5qpUmGnANNAv4ii20ILHJMKmh0AWhdlHdTQ7d23GQ"},
  //   // Connection: "keep-alive",
  //   //     }
  //   //   }
  //   const promise = await axios.get("http://localhost:8000/movies", {Host:"http://localhost:8000"},config);

  //   console.log(promise.data);

  //   //   this.setState({movies: data});
  //   // }

  //   this.fetchGenre();
  //   this.fetchMovies();

  //   // fetchGenre();
  //   // fetchMovies();
  //   // axios
  //   //   .get("http://localhost:8000/genre")
  //   //   .then((res) => (fakeGenre = res.data));
  //   // axios
  //   //   .get("http://localhost:8000/genre")
  //   //   .then((res) => (fakeMovies = res.data ));
  //   // this.setState({ movies: fakeMovies, genres: fakeGenre });
  // }

  render() {
    const {
      currentPage,
      genres,
      movies: allMovies,
      pageSize,
      selectedGenre,
      sortColumn,
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const mo = paginate(sorted, currentPage, pageSize);
    // console.log(this.state.movies);
    const { length: count } = filtered;

    // if (count === 0) {
    //   return <p>There are no movies in the database.</p>;
    // }
    return (
      <div>
        <p>Showing {count} movies in the database</p>
        <div className="row">
          <div className="col-3">
            <div className="list-group">
              {genres.map((genre) => (
                <ListGroup
                  key={genre._id}
                  genre={genre}
                  selectedGenre={selectedGenre}
                  onSelectGenre={this.handleGenreSelect}
                />
              ))}
            </div>
          </div>
          <div className="col">
            <MoviesTable
              movies={mo}
              // onLike={this.handleLike}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemCount={count}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
