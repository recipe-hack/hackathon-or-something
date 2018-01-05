import React, {Component} from 'react';
import './recipeCard.css';
//const axios = require('axios');

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  render() {
    return (<div>{this.props.recipes}</div>);
  }
}

export default RecipeCard;
