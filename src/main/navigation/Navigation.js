// Navigation.js


import React from "react";
import "./Navigation.css";
import Selection from './Selection';

class Navigation extends React.Component {
  render() {
    return (
      <section className="navigation">
        {/* <h1>Navigation</h1> */}
        <Selection></Selection>
      </section>
    )
  }
}

export default Navigation;
