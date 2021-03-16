import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">First App</h1>
        </header>
        {/* would need differnt link for dev */}
        <a className="App-link" href="https://cheesefield.vercel.app/">
          Go to second React app!
        </a>
      </div>
    );
  }
}

export default App;
