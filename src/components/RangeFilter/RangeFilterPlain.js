import React, { Component } from 'react';
import { arrayOf, func, node, number, shape, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import config from '../../config';

import { RangeFilterForm } from '../../forms';

import css from './RangeFilterPlain.module.css';

const RADIX = 10;

const getRangeQueryParamName = queryParamNames => {
  return Array.isArray(queryParamNames)
    ? queryParamNames[0]
    : typeof queryParamNames === 'string'
    ? queryParamNames
    : 'year';
};

// Parse value, which should look like "0,1000"
const parse = rangeRange => {
  const [minRange, maxRange] = !!rangeRange
    ? rangeRange.split(',').map(v => Number.parseInt(v, RADIX))
    : [];
  // Note: we compare to null, because 0 as minRange is falsy in comparisons.
  return !!rangeRange && minRange != null && maxRange != null ? { minRange, maxRange } : null;
};

// Format value, which should look like { minRange, maxRange }
const format = (range, queryParamName) => {
  const { minRange, maxRange } = range || {};
  // Note: we compare to null, because 0 as minRange is falsy in comparisons.
  const value = minRange != null && maxRange != null ? `${minRange},${maxRange}` : null;
  return { [queryParamName]: value };
};

class RangeFilterPlainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: true };

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.toggleIsOpen = this.toggleIsOpen.bind(this);
  }

  handleChange(values) {
    const { onSubmit, queryParamNames } = this.props;
    const rangeQueryParamName = getRangeQueryParamName(queryParamNames);
    onSubmit(format(values, rangeQueryParamName));
  }

  handleClear() {
    const { onSubmit, queryParamNames } = this.props;
    const rangeQueryParamName = getRangeQueryParamName(queryParamNames);
    onSubmit(format(null, rangeQueryParamName));
  }

  toggleIsOpen() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const {
      rootClassName,
      className,
      id,
      label,
      queryParamNames,
      initialValues,
      min,
      max,
      step,
      intl,
    } = this.props;
    const classes = classNames(rootClassName || css.root, className);

    const rangeQueryParam = getRangeQueryParamName(queryParamNames);
    const initialRange = initialValues ? parse(initialValues[rangeQueryParam]) : {};
    const { minRange, maxRange } = initialRange || {};

    const hasValue = value => value != null;
    const hasInitialValues = initialValues && hasValue(minRange) && hasValue(maxRange);

    const labelClass = hasInitialValues ? css.filterLabelSelected : css.filterLabel;
    const labelText = hasInitialValues
      ? intl.formatMessage(
          { id: 'rangeFilter.labelSelectedPlain' },
          {
            minRange: minRange,
            maxRange: maxRange,
          }
        )
      : label
      ? label
      : intl.formatMessage({ id: 'rangeFilter.label' });

    return (
      <div className={classes}>
        <div className={labelClass}>
          <button type="button" className={css.labelButton} onClick={this.toggleIsOpen}>
            <span className={labelClass}>{labelText}</span>
          </button>
          <button type="button" className={css.clearButton} onClick={this.handleClear}>
            <FormattedMessage id={'RangeFilter.clear'} />
          </button>
        </div>
        <div className={css.formWrapper}>
          <RangeFilterForm
            id={id}
            initialValues={hasInitialValues ? initialRange : { minRange: min, maxRange: max }}
            onChange={this.handleChange}
            intl={intl}
            contentRef={node => {
              this.filterContent = node;
            }}
            min={min}
            max={max}
            step={step}
            liveEdit
            isOpen={this.state.isOpen}
          />
        </div>
      </div>
    );
  }
}

RangeFilterPlainComponent.defaultProps = {
  rootClassName: null,
  className: null,
  initialValues: null,
  step: number,
  currencyConfig: config.currencyConfig,
};

RangeFilterPlainComponent.propTypes = {
  rootClassName: string,
  className: string,
  id: string.isRequired,
  label: node,
  queryParamNames: arrayOf(string).isRequired,
  onSubmit: func.isRequired,
  initialValues: shape({
    range: string,
  }),
  min: number.isRequired,
  max: number.isRequired,
  step: number,
  currencyConfig: propTypes.currencyConfig,

  // form injectIntl
  intl: intlShape.isRequired,
};

const RangeFilterPlain = injectIntl(RangeFilterPlainComponent);

export default RangeFilterPlain;
