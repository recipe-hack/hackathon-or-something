import React, { Component } from 'react';
import RecipeCard from './recipeCard/recipeCard';
import Favorites from './Favorites/Favorites';
import './InputForm.css';
const axios = require('axios');

class InputForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ingredients: '',
      food: '',
      page: 1,
      oldingredients: '',
      oldfood: '',
      oldpage: 1,
      recipes: [],
      favorites: []
    };

    this.submit = this.submit.bind(this);
    this.PrevPage = this.PrevPage.bind(this);
    this.NextPage = this.NextPage.bind(this);
    this.favorite = this.favorite.bind(this);
  }

  componentDidMount () {
    const { ingredients, food } = this.state;
    return axios({
      method: 'get',
      url: 'http://localhost:5000/api/recipes/random'
    })
      .then(results => {
        return results.data.results;
      })
      .then(data => {
        let recipes = data.map((recipe, index) => {
          return (
            <div className='col-md-4 col-md-6' key={index}>
              <div className='card'>
                <img
                  className='card-img-top'
                  src={recipe.thumbnail || 'http://img.recipepuppy.com/9.jpg'}
                  alt={recipe.title}
                />
                <div className='card-body'>
                  <div className='recipe--title'>
                    {recipe.title}
                  </div>
                  <div>
                    Ingredients: {recipe.ingredients}
                  </div>
                  <a
                    className='btn-primary btn'
                    href={recipe.href}
                    target='_blank'
                  >
                    View Recipe
                  </a>
                  <button
                    className='btn btn-primary'
                    onClick={this.favorite({ recipe })}
                  >
                    favorite
                  </button>
                </div>
              </div>
            </div>
          );
        });
        this.setState({ recipes: recipes });
        this.setState({
          oldingredients: this.state.ingredients,
          oldfood: this.state.food,
          oldpage: this.state.page
        });
        this.setState({ ingredients: '', food: '', page: 1 });
      })
      .catch(err => {
        console.log(err);
      });
  }

  favorite (recipe) {
    return () => {
      let newArr = this.state.favorites;
      newArr.push(recipe);
      this.setState({
        favorites: newArr,
        favorited: true
      });

      this.setState({
        favorites: this.state.favorites
      });
    };
  }

  submit (e) {
    e.preventDefault();
    const { ingredients, food } = this.state;

    return axios({
      method: 'get',
      url: `http://localhost:5000/api/recipes/?ingredients=${this.state
        .ingredients}&food=${this.state.food}&p=${this.state.page}`
    })
      .then(results => {
        return results.data.results;
      })
      .then(data => {
        let recipes = data.map((recipe, index) => {
          return (
            <div className='col-md-4 col-md-6' key={index}>
              <div className='card'>
                <img
                  className='card-img-top'
                  src={recipe.thumbnail || 'http://img.recipepuppy.com/9.jpg'}
                  alt={recipe.title}
                />
                <div className='card-body'>
                  <div className=''>
                    {recipe.title}
                  </div>
                  <div>
                    Ingredients: {recipe.ingredients}
                  </div>
                  <a
                    className='btn-primary btn'
                    href={recipe.href}
                    target='_blank'
                  >
                    View Recipe
                  </a>
                  <button
                    className='btn btn-primary'
                    onClick={this.favorite({ recipe })}
                  >
                    favorite
                  </button>
                </div>
              </div>
            </div>
          );
        });
        this.setState({ recipes: recipes });
        this.setState({
          oldingredients: this.state.ingredients,
          oldfood: this.state.food,
          oldpage: this.state.page
        });
        this.setState({ ingredients: '', food: '', page: 1 });
      })
      .catch(err => {
        console.log(err);
      });
  }

  PrevPage (e) {
    e.preventDefault();
    let tempPage = this.state.oldpage;
    if (tempPage > 1) {
      let tempPage = this.state.oldpage - 1;
      this.setState({ oldpage: tempPage });
    }
    return axios({
      method: 'get',
      url: `http://localhost:5000/api/recipes/?ingredients=${this.state
        .oldingredients}&food=${this.state.oldfood}&p=${this.state.oldpage}`
    })
      .then(results => {
        return results.data.results;
      })
      .then(data => {
        let recipes = data.map((recipe, index) => {
          return (
            <div className='col-md-4 col-md-6' key={index}>
              <div className='card'>
                <img
                  className='card-img-top'
                  src={recipe.thumbnail || 'http://img.recipepuppy.com/9.jpg'}
                  alt={recipe.title}
                />
                <div className='card-body'>
                  <div className=''>
                    {recipe.title}
                  </div>
                  <div>
                    Ingredients: {recipe.ingredients}
                  </div>
                  <a
                    className='btn-primary btn'
                    href={recipe.href}
                    target='_blank'
                  >
                    View Recipe
                  </a>
                  <button
                    className='btn btn-primary'
                    onClick={this.favorite({ recipe })}
                  >
                    favorite
                  </button>
                </div>
              </div>
            </div>
          );
        });
        this.setState({ recipes: recipes });
      })
      .catch(err => {
        console.log(err);
      });
  }

  NextPage (e) {
    e.preventDefault();
    let tempPage = this.state.oldpage;
    if (tempPage >= 1) {
      let tempPage = this.state.oldpage + 1;
      this.setState({ oldpage: tempPage });
    }
    return axios({
      method: 'get',
      url: `http://localhost:5000/api/recipes/?ingredients=${this.state
        .oldingredients}&food=${this.state.oldfood}&p=${this.state.oldpage}`
    })
      .then(results => {
        return results.data.results;
      })
      .then(data => {
        let recipes = data.map((recipe, index) => {
          return (
            <div className='col-md-4 col-md-6' key={index}>
              <div className='card'>
                <img
                  className='card-img-top'
                  src={recipe.thumbnail || 'http://img.recipepuppy.com/9.jpg'}
                  alt={recipe.title}
                />
                <div className='card-body'>
                  <div className=''>
                    {recipe.title}
                  </div>
                  <div>
                    Ingredients: {recipe.ingredients}
                  </div>
                  <a
                    className='btn-primary btn'
                    href={recipe.href}
                    target='_blank'
                  >
                    View Recipe
                  </a>
                  <button
                    className='btn btn-primary'
                    onClick={this.favorite({ recipe })}
                  >
                    favorite
                  </button>
                </div>
              </div>
            </div>
          );
        });
        this.setState({ recipes: recipes });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render () {
    return (
      <div className='row'>
        <div className='col-sm-12'>
        <div className='row-fluid'>
          <form onSubmit={this.submit}>
            <input className='col-sm-3'
              type='text'
              value={this.state.ingredients}
              style={{
                marginRight: '5px'
              }}
              placeholder='ingredients (ie. corn, peas)'
              onChange={event =>
                this.setState({ ingredients: event.target.value })}
            />
            <input className='col-sm-2'
              type='text'
              value={this.state.food}
              style={{
                marginRight: '5px'
              }}
              placeholder='food'
              onChange={event => this.setState({ food: event.target.value })}
            />
            <button className='btn btn-primary col-sm-2'>Submit</button>
          </form>
          <form onSubmit={this.PrevPage}>
            <button className='btn btn-primary col-sm-2'>Previous Page</button>
          </form>
          <form onSubmit={this.NextPage}>
            <button className='btn btn-primary col-sm-2'>Next Page</button>
          </form>
        </div>
        </div>
        <div className='col-md-12'>
          <div>
            <RecipeCard className='row' recipes={this.state.recipes} />

          </div>
        </div>
        <div className='col-md-12'>
        <div className='favoritesHeader'>Favorites</div>
          <div>
            {this.state.favorites.map((favorite, index) => <Favorites key={index} favorite={favorite.recipe}/>) }
            </div>
        </div>
      </div>
    );
  }
}

export default InputForm;
