import React, { Component } from "react";
import './header.css';

class Navbar extends Component {
    render() {
        return (
            <div id="header" className="navbar">
                <div id="headerDiv">
                    <h2>Game of Thrones Edition</h2>
                    <p>Click on one image, but dont click on the same image twice!</p>
                </div>
            </div>
        );
    }
}

export default Navbar;