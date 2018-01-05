import React, {Component} from 'react';
import RecipeCard from './recipeCard/recipeCard';
import Favorites from './Favorites/Favorites';
const axios = require('axios');
import './InputForm.css';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: '',
      food: '',
      recipes: [],
      favorites: []
    };

    this.submit = this.submit.bind(this);
    this.favorite = this.favorite.bind(this);
  }
  favorite(recipe) {
    return() => {
      let newArr = this.state.favorites;
      newArr.push(recipe);
      this.setState({favorites: newArr});
      console.log(this.state.favorites);
        let newFavoritesArray = this.state.favorites.map((recipe, index) => {
          return (
            <div className='col-md-4' key={index}>
            <div className="card">
              <img className="card-img-top" src={recipe.thumbnail || 'http://img.recipepuppy.com/9.jpg'} alt={recipe.title}></img>
              <div className="card-body">
                <div className="">{recipe.title}</div>
                <div>Ingredients: {recipe.ingredients}</div>
                <a className='btn-primary btn' href={recipe.href} target="_blank">View Recipe</a>
              </div>
            </div>
          </div>)
        })
        this.setState({favorites: newFavoritesArray});
        console.log(`input 2  ${this.state.favorites}`)
      }
    }


  submit(e) {
    e.preventDefault();
    const {ingredients, food} = this.state;
    return axios({method: 'get', url: `http://localhost:5000/api/recipes/?ingredients=${this.state.ingredients}&food=${this.state.food}&p=2`}).then((results) => {
      return results.data.results;
    }).then((data) => {
      let recipes = data.map((recipe, index) => {
        return (<div className='col-md-4' key={index}>
          <div className="card">
            <img className="card-img-top" src={recipe.thumbnail || 'http://img.recipepuppy.com/9.jpg'} alt={recipe.title}></img>
            <div className="card-body">
              <div className="">{recipe.title}</div>
              <div>Ingredients: {recipe.ingredients}</div>
              <a className='btn-primary btn' href={recipe.href} target="_blank">View Recipe</a>
              <button className='btn btn-primary' onClick={this.favorite({recipe})}>favorite</button>
            </div>
          </div>
        </div>)
      });
      this.setState({recipes: recipes});
      this.setState({ingredients: '', food: ''})
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (<div className='row'>
      <div className='col-md-12'>
        <form onSubmit={this.submit}>
          <input type='text' value={this.state.ingredients} style={{
              marginRight: '5px'
            }} placeholder='ingredients' onChange={event => this.setState({ingredients: event.target.value})}></input>
          <input type='text' value={this.state.food} style={{
              marginRight: '5px'
            }} placeholder='food' onChange={event => this.setState({food: event.target.value})}></input>
          <button>
            Submit
          </button>
        </form>
      </div>
      <div className='col-md-12'>
        <div>
          <RecipeCard className='row' recipes={this.state.recipes}/>
          <Favorites favorites={this.state.favorites}/>
        </div>
      </div>
    </div>)
  }
}

export default InputForm;
