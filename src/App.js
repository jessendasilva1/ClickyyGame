import React, { Component } from 'react';
import './App.css';
import Main from './components/main/main';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

//root component
class App extends Component {
  state = {
    message: "Click an Image to begin!",
    highScore: 0,
    currentScore: 0
  }

  updateMessage = (message) => {
    this.setState({
      message: message
    })
    //console.log("updateMessage");
  }

  updateScore = () => {
    this.setState((prevState) => ({
      currentScore: (prevState.currentScore+1)
    }), function(){
      if(this.state.currentScore > this.state.highScore){
        this.setState({
          highScore: this.state.currentScore
        })
      }
    });
    //console.log("updateCurrentScore");
  }
  
  resetScore = () => {
    this.setState({
      currentScore: 0
    });
  }

  render() {
    return (
     <div>
       <Navbar message={this.state.message} highScore={this.state.highScore} currentScore={this.state.currentScore}/>
       <Header />
       <Main message={this.updateMessage} currentScore={this.updateScore} reset={this.resetScore}/>
       <Footer />
     </div>  
    );
  }
}

export default App;
