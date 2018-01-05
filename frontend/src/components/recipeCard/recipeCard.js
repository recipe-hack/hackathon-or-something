import React, { Component } from 'react';
import'./recipeCard.css';
const axios = require('axios');


class RecipeCard extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentWillMount() {
    return axios({
      method: 'get',
      url:
      'http://localhost:5000/api/recipes/?ingredients=peas&food=salad&p=1'})
    .then((results) => {
      return results.data.results;
    }).then((data) => {
      let recipes = data.map((recipe, index) => {
        return (
          <div className='col-sm-4' key={index}>
            <div className="card">
              <img className="card-img-top" src={recipe.thumbnail || 'http://img.recipepuppy.com/9.jpg'} alt={recipe.title}></img>
                <div className="card-body">
                  <a className='btn-primary btn' href={recipe.href} target="_blank">View Recipe</a>
                </div>
            </div>
      </div>
          )
      });
      this.setState({recipes: recipes});
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>{this.state.recipes}</div>
      );
  }
}

export default RecipeCard;
