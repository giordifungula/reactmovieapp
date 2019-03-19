// Main.js

import React from "react";
import "./Main.css"
import Navigation from "./navigation/Navigation";
import Movies from "./movies/Movies";

class Main extends React.Component {
  render() {
    return (
      <section className="main">
        <Navigation />
        <Movies />
        <h2>Main</h2>
      </section>
    )
  }
}

export default Main;