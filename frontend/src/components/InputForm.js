import React, {Component} from 'react';
import RecipeCard from './recipeCard/recipeCard';
const axios = require('axios');
// import './InputForm.css';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: '',
      food: '',
      recipes: []
    };

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();

    const {ingredients, food} = this.state;
    return axios({method: 'get', url: `http://localhost:5000/api/recipes/?ingredients=${this.state.ingredients}&food=${this.state.food}&p=2`}).then((results) => {
      console.log(results.data.results)
      return results.data.results;
    }).then((data) => {
      let recipes = data.map((recipe, index) => {
        return (<div className='col-sm-4' key={index}>
          <div className="card">
            <img className="card-img-top" src={recipe.thumbnail || 'http://img.recipepuppy.com/9.jpg'} alt={recipe.title}></img>
            <div className="card-body">
              <a className='btn-primary btn' href={recipe.href} target="_blank">View Recipe</a>
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
    return (<div>
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
      <RecipeCard recipes={this.state.recipes}/>
    </div>)
  }
}

export default InputForm;
