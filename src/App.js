import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
// import logo from './logo.svg';
import "./bootstrap.css";
import "./fontawesome.css";

// function App() {
//   return (
//     <div className="container">
//       Hello World
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <main className="container-fluid">
        <Movies />
      </main>
    );
  }
}

export default App;
