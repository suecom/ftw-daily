import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomYearSelectFieldMaybe = props => {
  const { name, id, year, intl } = props;
  const yearLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.yearLabel',
  });
  const yearPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.yearPlaceholder',
  });
  const yearRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.yearRequired',
    })
  );
  return year ? (
    <FieldSelect
      className={css.year}
      name={name}
      id={id}
      label={yearLabel}
      validate={yearRequired}
    >
      <option disabled value="">
        {yearPlaceholder}
      </option>
      {year.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomYearSelectFieldMaybe;
