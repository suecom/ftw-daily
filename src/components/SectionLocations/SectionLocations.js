import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import londonImage from './images/location_london.jpg';
import manchesterImage from './images/location_manchester.jpg';
import edinburghImage from './images/location_edinburgh.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'London',
          londonImage,
          '?address=London%2C%20United%20Kingdom&bounds=51.609847%2C0.022835%2C51.419624%2C-0.27496'
        )}
        {locationLink(
          'Manchester',
          manchesterImage,
          '?address=Manchester%2C%20United%20Kingdom&bounds=53.534648%2C-2.140863%2C53.380515%2C-2.360589'
        )}
        {locationLink(
          'Edinburgh', 
          edinburghImage,
          '?address=Edinburgh%2C%20United%20Kingdom&bounds=55.996255%2C-3.086345%2C55.881652%2C-3.314311'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
