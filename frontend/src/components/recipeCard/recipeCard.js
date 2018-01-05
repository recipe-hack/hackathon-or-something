import React, {Component} from 'react';
// import CSS files
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
    // for css you just put things in the classname
    // delete these comments btw
    // extraclass can be used as a class as well. just add any classes
    // after any bootstrap classes you've added
    return (<div className= 'test extraclass'/*just put the classname you want in here*/>{this.props.recipes}</div>);
  }
}

export default RecipeCard;
