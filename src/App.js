import React, { Component } from 'react';
import './App.css';
import Books from './Books'
import 'antd/dist/antd.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Books /> 
      </div>
    );
  }
}

export default App;
