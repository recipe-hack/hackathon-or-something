import React, {Component} from 'react';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: this.props.favorites,
    };
  }

  // mapFavorites() {
  //   let favorites = this.state.favorites.map((recipe, index) => {
  //     return (<div>className='col-md-4' key={index}>
  //       <div className="card">
  //         <img className="card-img-top" src={recipe.thumbnail || 'http://img.recipepuppy.com/9.jpg'} alt={recipe.title}></img>
  //         <div className="card-body">
  //           <div className="">{recipe.title}</div>
  //           <div>Ingredients: {recipe.ingredients}</div>
  //           <a className='btn-primary btn' href={recipe.href} target="_blank">View Recipe</a>
  //         </div>
  //       </div>
  //     </div>)
  //   })
  //   this.setState(favorites: favorites);
  // }
      render() {
        return (

          <div>{console.log(this.state.favorites)} {this.state.favorites}</div>
        )
    }
}

export default Favorites;
