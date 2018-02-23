import React,{Component} from 'react';

class AddMovie extends Component {
  render() {
    return(
      <a href="#" onClick={this.props.updateMovieList}> Add movie </a>
    )
  }
}

export default AddMovie;