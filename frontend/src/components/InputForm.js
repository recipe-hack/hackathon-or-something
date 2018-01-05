import React, { Component } from 'react';
//const axios = require('axios');
// import './InputForm.css';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: '',
      food: '',
    };

    this.submit = this.submit.bind(this);
  }

  submit() {
    const { ingredients, food } = this.state;
    this.setState({
      ingredients: '',
      food: '',
    })
  }

  render() {
    return(
    <form onSubmit={this.submit}>
      <input
        type='text'
        value={this.state.ingredients}
        style={{ marginRight: '5px' }}
        placeholder='ingredients'
        onChange={event => this.setState({ ingredients: event.target.value })}
      >
      </input>
      <input
        type='text'
        value={this.state.food}
        style={{ marginRight: '5px' }}
        placeholder='food'
        onChange={event => this.setState({ food: event.target.value })}
      >
      </input>
      <button>
        Submit
      </button>
    </form>
    )
  }
}

export default InputForm;
