import './App.css';
import Person from './Component/Person'
import React from 'react'
import {Component} from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.isVisible);
  };

  render() {
    return (
      <div className="App">
        <h1>this is a person</h1>
        <button className="visibility-btn" onClick={this.toggleVisibility}>
          {this.state.isVisible ? 'Hide Person' : 'Show Person'}
        </button>
        {this.state.isVisible && <Person />}
      </div>
    );
  }
}

export default App;
