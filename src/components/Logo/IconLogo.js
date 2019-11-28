import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = props => {
  const { className, ...rest } = props;

  return (
    <svg className={className} {...rest}
        width="32" 
        height="32" 
        viewBox="0 0 32.000000 32.000000">
      <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path d="M165 298 c-99 -55 -152 -193 -96 -252 52 -56 137 -21 185 76 35 71 35 130 0 163 -29 27 -57 31 -89 13z m69 -44 c25 -66 -95 -235 -134 -189 -29 35 16 138 78 180 43 29 48 30 56 9z"/>
      </g>
    </svg> 
    
  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
