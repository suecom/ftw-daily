import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import YouTube from 'react-youtube';

import css from './Video.css';

const Video = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <YouTube
        videoId="tFvW5rWgYUs"
      />
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
