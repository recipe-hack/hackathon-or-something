import React, { Component } from 'react';
class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
    }
  }

  render() {
    return (
      <div>
      <div><h3>Favorites</h3></div>
      <div>{this.props.favorites}</div>
      </div>
    );
  }
}
export default Favorites;
