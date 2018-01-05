import React, { Component } from 'react';
class Favorites extends Component {
  constructor(props){
    super(props);
    this.state = {
      favorites: [],
    }
  }
  componentDidMount() {
    this.setState({favorites: this.props.favorite});
  }
  render() {
    return (
      <div className='col-md-4' key={this.props.index}>
        <div className='card'>
          <img
            className='card-img-top'
            src={this.props.favorite.thumbnail || 'http://img.recipepuppy.com/9.jpg'}
            alt={this.props.favorite.title}
          />
          <div className='card-body'>
            <div className='recipe--title'>
              {this.props.favorite.title}
            </div>
            <div>
              Ingredients: {this.props.favorite.ingredients}
            </div>
            <a
              className='btn-primary btn'
              href={this.props.favorite.href}
              target='_blank'
            >
              View Recipe
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Favorites;
