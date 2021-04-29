import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state ={
      string: 'Hello Srijan'
    };
  }
  render() {
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.string}
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.state.string.includes('Srijan') ? this.setState({ string: "Hello Mansi!" }) : this.setState({ string: "Hello Srijan!" })}>Change Text</button>
      </header>
    </div>
    );
  }
}

export default App;
