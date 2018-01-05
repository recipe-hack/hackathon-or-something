import React, { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import { Container } from 'react-bootstrap';
import Logo from './images/recipehack2.png';

class App extends Component {
  render () {
    return (
      <div className='App container-fluid'>
        <header className='App-header'>
        </header>
        <img src={Logo} alt='header'/>

        <InputForm />
      </div>
    );
  }
}

export default App;
