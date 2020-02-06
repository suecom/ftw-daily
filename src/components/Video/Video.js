import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import YouTube from 'react-youtube';

import css from './Video.css';

const Video = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  return (
    <div className={classes}>
      <div className={css.video}>
        <YouTube 
          videoId="tFvW5rWgYUs"
          opts={opts}
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
