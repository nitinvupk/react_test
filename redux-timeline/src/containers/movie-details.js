import React,{Component} from 'react';
import {connect} from 'react-redux';

class MovieDetail extends Component{

  render(){
    if(!this.props.movie){
      return <div>select a movie to get details.</div>;
    }
  
    return(
      <div>
        <h1>Detail for { this.props.movie.title }</h1>
        <h5>Director</h5><p>{this.props.movie.director}</p>
        <h5>Description</h5><p>{this.props.movie.description}</p>
      </div>

      );
  }
}

function mapStateToProps(state){
  return{
    movie:state.activeMovie
  };
}

export default connect(mapStateToProps)(MovieDetail);
