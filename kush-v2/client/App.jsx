import React, { Component } from 'react';
import Header from './Header.jsx';
import firebase from 'firebase';
import FB_CONFIG from './config.js';

class App extends Component {
  constructor() {
    super() 
    this.app = firebase.initializeApp(FB_CONFIG);
    this.database = this.app.database().ref().child('////value-name-here');

  }

  componentDidMount() {
    this.database.on("value", map => {

    })
  }

  render() {
    return (
      <div id="app-container">
        <Header />
        <p>Please enjoy the Forge!</p>
      </div>
    );
  }
}

export default App;
