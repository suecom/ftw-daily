import React from 'react';
import { withRouter } from 'react-router-dom';
import { stringify, parse } from '../../util/urlHelpers';

import RangeFilter from './RangeFilter';

const URL_PARAM = 'pub_year';

// Helper for submitting example
const handleSubmit = (values, history) => {
  const queryParams = values ? `?${stringify(values)}` : '';
  history.push(`${window.location.pathname}${queryParams}`);
};

const RangeFilterWrapper = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const range = params[URL_PARAM];
  const initialValues = { [URL_PARAM]: !!range ? range : null };

  return (
    <RangeFilter
      {...props}
      initialValues={initialValues}
      onSubmit={values => {
        console.log('Submit RangeFilterForm with (unformatted) values:', values);
        handleSubmit(values, history);
      }}
    />
  );
});

export const RangeFilterPopup = {
  component: RangeFilterWrapper,
  props: {
    id: 'RangeFilterPopupExample',
    queryParamNames: [URL_PARAM],
    min: 1932,
    max: 2005,
    step: 1,
    liveEdit: false,
    showAsPopup: true,
    contentPlacementOffset: -14,
    // initialValues: handled inside wrapper
    // onSubmit: handled inside wrapper
  },
  group: 'filters',
};

export const RangeFilterPlain = {
  component: RangeFilterWrapper,
  props: {
    id: 'RangeFilterPlainExample',
    queryParamNames: [URL_PARAM],
    min: 1932,
    max: 2005,
    step: 1,
    liveEdit: true,
    showAsPopup: false,
    contentPlacementOffset: -14,
    // initialValues: handled inside wrapper
    // onSubmit: handled inside wrapper
  },
  group: 'filters',
};
