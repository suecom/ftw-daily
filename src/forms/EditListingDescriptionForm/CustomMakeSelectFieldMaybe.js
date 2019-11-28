import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomMakeSelectFieldMaybe = props => {
  const { name, id, make, intl } = props;
  const makeLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.makeLabel',
  });
  const makePlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.makePlaceholder',
  });
  const makeRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.makeRequired',
    })
  );
  return make ? (
    <FieldSelect
      className={css.make}
      name={name}
      id={id}
      label={makeLabel}
      validate={makeRequired}
    >
      <option disabled value="">
        {makePlaceholder}
      </option>
      {make.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomMakeSelectFieldMaybe;
