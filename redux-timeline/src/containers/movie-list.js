import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectMovie} from '../actions/index';
import { bindActionCreators } from 'redux';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import icon from 'react-icons/lib/fa/group';
import Logo from "./logo.js";
import FaGroup from 'react-icons/lib/fa/group';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';
import $ from 'jquery';

class MovieList extends Component{
  renderMovies(){
    const BackSvg = () => (
      <svg viewBox="0 0 12 12">
        <g id="arrow-left-icon" style={{ strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '1.41421', fill: 'none', strokeWidth: '1.5px', stroke: props.stroke }}>
          <path d="M6.026,11l-5.026,-5.026l4.974,-4.974" />
          <path d="M2.693,6l8.333,0" />
        </g>
      </svg>
    );

    let ary = Object.assign(this.props.movies)
    ary.sort(function(a,b) {return (new Date(a.release_date) > new Date(b.release_date)) ? 1 : ((new Date(b.release_date) > new Date(a.release_date)) ? -1 : 0);} );
    var newA = [];
    for (var i = 0; i < ary.length - 1; i++) {
      var start = new Date (ary[i].release_date)
      var end = new Date(ary[i+1].release_date)
      // end - start returns difference in milliseconds
      var diff = new Date(end - start);

      // get days
      var days = diff/1000/60/60/24;
      ary[i].isLate = days > 30 ? true : false
    }

    return ary.map((movie) => {
      return(
        <TimelineEvent title={movie.title}
                       orientatoin="right"
                       titleStyle={{"font-size": '24px'}}
                       icon={<svg viewBox="0 0 12 12" >
                         <g id="arrow-left-icon" style={{ strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '1.41421', fill: 'none', strokeWidth: '1.5px'}}>
                           <path d="M6.026,11l-5.026,-5.026l4.974,-4.974" />
                           <path d="M2.693,6l8.333,0" />
                         </g>
                       </svg>}
                       style={{"text-align": "left", "float": "right", "width": "50%"}}
                       icon={<FaGroup />}
        >
          { movie.isLate && <span style={{content: "",display: 'block',width: 0,height: '100%',border: '1px dashed black', position: 'absolute',top: '30px',left: '532px'}}></span>}
          <span className="second_item" style={{'position':'absolute','top':'50px','border-radius':'50%','width':'30px','height':'30px','margin-left':'1px','background':'#e9f0f5','border':'2px solid #6fba1c','display':'flex','right':'-45px'}}><FaInfoCircle /></span>
          <p> Lead Actor {movie.lead_actor}<br/>
          Release Date: {movie.release_date}<br/>
          Sub-Genre: {movie.sub_genre}<br/>
          Producer: {movie.producer}</p>
        </TimelineEvent>
      );
    }, {newA: newA});
  }

  render() {
    return(
      <div>
        <Timeline orientation="right" style={{"border": "1px dashed #fff"}}>
          {this.renderMovies()}
        </Timeline>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    movies:state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectMovie: selectMovie }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
