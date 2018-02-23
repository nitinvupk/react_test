import React from 'react';
import PropTypes from 'prop-types';

const BackSvg = props => (
  <svg viewBox="0 0 12 12" >
    <g id="arrow-left-icon" style={{ strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '1.41421', fill: 'none', strokeWidth: '1.5px', stroke: props.stroke }}>
      <path d="M6.026,11l-5.026,-5.026l4.974,-4.974" />
      <path d="M2.693,6l8.333,0" />
    </g>
  </svg>
);

BackSvg.defaultProps = {
  stroke: '#fff',
};

BackSvg.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  stroke: PropTypes.string,
  width: PropTypes.string,
};

export default BackSvg;
