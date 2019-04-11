import React, { Component } from "react";
import './main.css';
import ImageComponent from '../imageComponent/image';

// ask about this
import Arya from '../../imgs/aryastark.jpg';
//import Bran from '../../imgs/branstark.jpg';
import Bronn from '../../imgs/bronn.jpg';
import Cersi from '../../imgs/cersilanister.png';
import Danareys from '../../imgs/danareys.png';
import Joffrey from '../../imgs/joffreylanister.png';
import Jon from '../../imgs/jonsnow.jpg';
import Karl from '../../imgs/karldrogo.jpg';
import Ned from '../../imgs/nedstark.jpg';
import Ramsey from '../../imgs/ramseybolton.jpg';
import Davos from '../../imgs/sirdavos.jpg';
import Hound from '../../imgs/thehound.jpg';
import Mountain from '../../imgs/themountain.jpg';

class Main extends Component {
    state = {
        images: [Arya,Bronn,Cersi,Danareys,Joffrey,Jon,Karl,Ned,Ramsey,Davos,Hound,Mountain],
        previousChoices: [],
        incorrect: false
    }

    // render the list of images to the screen    
    componentDidMount() {
        this.shuffle(this.state.images);
    }

    shuffle = (array) => {
        var currentIndex = array.length;
        var temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        this.setState({
            images: array,
            incorrect: false
        });
    };

    checkSelection = key => {
        console.log("main componenent: " + key);
        let temp = this.state.previousChoices;
        let found = temp.find(function(element){
            if(key === element){
                // current choice has been selected already
                return key;
            } else {
                // current choice hasnt already been selected before
                return undefined;
            }
        });
        if(found === undefined){
            //console.log("not found");
            this.props.message("You Guessed Correctly!");
            this.props.currentScore();
            this.setState((prevState) => ({
                previousChoices: [...prevState.previousChoices, key],
            }));
            this.shuffle(this.state.images);
        } else {
            this.setState({
                incorrect: true
            });
            this.props.reset();
            this.props.message("Incorrect, Sorry!");
            setTimeout(() => {
                this.shuffle(this.state.images);
            }, 400)
            console.log("duplicate click");
        }
    }

    render() {
        return (
            <div id="main" className="container">
                <div id="imagesDiv">
                    {this.state.images.map((image) => {
                        //console.log(image);
                        return (
                            <ImageComponent key={image} src={image} check={this.checkSelection} incorrect={this.state.incorrect}/>
                            
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Main;