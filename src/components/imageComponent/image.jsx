import React, { Component } from "react";
import './image.css';

class Image extends Component {  
    
    state = {
        imageSource: this.props.src
    }

    hello(){
        console.log("hello");
    }

    render() {
        //console.log(this.props.src);
        return (
            <div className={this.props.incorrect ? "images wiggle" : "images"} onClick={() => this.props.check(this.props.src)}>
                <img className="imageLink" src={this.props.src} alt="testing" />
            </div>
        );
    }
}

export default Image;