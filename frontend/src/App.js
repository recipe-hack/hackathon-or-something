import React, {Component} from 'react';
import './App.css';
import InputForm from './components/InputForm';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (<div className="App container-fluid">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>

        <InputForm/>
    </div>);
  }
}

export default App;
