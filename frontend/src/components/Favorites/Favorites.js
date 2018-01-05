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

      <div>
      {console.log(this.props.favorite)}
      {this.state.favorite}</div>
    );
  }
}
export default Favorites;
