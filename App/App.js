import React, { Component } from 'react';
import './App.css';
 
import Intro from '../componets/intro'

class App extends Component {
  state = {
    series: []
  }
  render() {
    return ( 
    <div className="App">
      <header className="App-header">
        <h1>TV SERIES</h1>
      </header>
       <Intro message="Here you can find all of your most loved series"/>
       The length of series array - {this.state.series.length}
    </div>
  );}
}

export default App;
