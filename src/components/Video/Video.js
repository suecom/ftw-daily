import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactPlayer from 'react-player/lazy'

import css from './Video.css';

const Video = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.video}>
        <ReactPlayer 
          width = '100%'
          height = '100%'
          controls = 'true'
          url = { props.url }
          config = {{
            youtube: {
              playerVars: { 
                autoplay: 0,
                rel: 0,
                origin: 'https://oldencars.com'
              } 
            }
          }}
        />
      </div>
    </div>
  );
};

Video.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

Video.propTypes = {
  rootClassName: string,
  className: string,
};

export default Video;
