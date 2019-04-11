import React, { Component } from "react";
import './navbar.css';

class Navbar extends Component {
    render() {
    return (
        <div id="navbar" className="navbar">
            <h2 className="ml-5">Clicky Game!</h2>
            <div id="guess" className="pr-3 pl-3">{this.props.message}</div>
            <div id="score" className="mr-5">Score: {this.props.currentScore} | HighScore: {this.props.highScore}</div>
        </div>
    );
    }
}

export default Navbar;