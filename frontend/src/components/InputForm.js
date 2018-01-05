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
            <div className='col-md-4' key={index}>
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

      let newFavoritesArray = this.state.favorites.map((recipe, index) => {
        return (
          <div className='col-md-4' key={index}>
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
              </div>
            </div>
          </div>
        );
      })
      this.setState({
        favorites: newFavoritesArray
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
            <div className='col-md-4' key={index}>
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
            <div className='col-md-4' key={index}>
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
            <div className='col-md-4' key={index}>
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
        <div className='col-md-12'>
          <form onSubmit={this.submit}>
            <input
              type='text'
              value={this.state.ingredients}
              style={{
                marginRight: '5px'
              }}
              placeholder='ingredients'
              onChange={event =>
                this.setState({ ingredients: event.target.value })}
            />
            <input
              type='text'
              value={this.state.food}
              style={{
                marginRight: '5px'
              }}
              placeholder='food'
              onChange={event => this.setState({ food: event.target.value })}
            />
            <button className='btn btn-primary'>Submit</button>
          </form>
        </div>
        <div className='col-md-12'>
          <div>
            <RecipeCard className='row' recipes={this.state.recipes} />
            <div className='page-buttons'>
              <form onSubmit={this.PrevPage}>
                <button className='btn btn-primary'>Previous Page</button>
              </form>
              <form onSubmit={this.NextPage}>
                <button className='btn btn-primary'>Next Page</button>
              </form>
            </div>
          </div>
        </div>
        <div className='col-md-12'>
          <div>
          {console.log(this.state.favorites)}
            <Favorites favorites={this.state.favorites} />
            </div>
        </div>
      </div>
    );
  }
}

export default InputForm;
