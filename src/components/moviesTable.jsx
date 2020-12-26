import React, { Component } from "react";
import Like from "./like";

class MoviesTable extends Component {
  state = {};

  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalStock", label: "Rate" },
    {},
    {},
  ];

  raiseSort = (path) => {
    const { sortColumn, onSort } = this.props;
    const sortColum = { ...sortColumn };
    if (sortColum.path === path) {
      sortColum.order = sortColum.order === "asc" ? "desc" : "asc";
    } else {
      sortColum.path = path;
      sortColum.order = "asc";
    }
    onSort(sortColumn);
  };

  render() {
    const { movies, onDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
            <th>Like</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
