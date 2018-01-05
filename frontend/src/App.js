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
          <h1 className='App-title'>Hackathon Recipe Search</h1>
          <h3 className='App-details'>
            Input ingredients, food, both, or or just leave blank for random
            lookup
          </h3>
        </header>
        <img src={Logo} alt='recipe hack' />

        <InputForm />
      </div>
    );
  }
}

export default App;
