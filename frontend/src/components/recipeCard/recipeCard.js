import React, { Component } from 'react';
import'./recipeCard.css';

class RecipeCard extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/recipes/?ingredients=peas&food=salad&p=1')
    .then((results) => {
      return results.json();
    }).then((data) => {
      let recipes = data.results.map((recipe) => {
        return (
          <div className='col-sm-4'>
            <div className="card">
              <img className="card-img-top" src="{recipe.thumbnail}" alt="Card image cap"></img>
                <div className="card-body">
                  <h5 >How to Roast Carrots and Parsnips</h5>
                  <p className='author'>J. Kenji Lopex Alt</p>
                  <br />
                  <a className='btn-primary btn' href='{recipe.href}'>View Recipe</a>
                </div>
            </div>
      </div>
          )
      });
      this.setState({recipes: recipes});
    });
  }

  render() {
    return (

      );
  }
}

export default RecipeCard;
