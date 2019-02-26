import React, { Component } from 'react';
import './App.css';
import Books from './Books';
import 'antd/dist/antd.css';


class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>BOOK FINDER</h1>
        </header>
        <div className="App">
          <Books />
        </div>
      </div>
      
    );
  }
}

export default App;
