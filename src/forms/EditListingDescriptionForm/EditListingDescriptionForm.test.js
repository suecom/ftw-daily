import React from 'react';
import { renderDeep } from '../../util/test-helpers';
import { fakeIntl } from '../../util/test-data';
import EditListingDescriptionForm from './EditListingDescriptionForm';

const noop = () => null;

describe('EditListingDescriptionForm', () => {
  it('matches snapshot', () => {
    const tree = renderDeep(
      <EditListingDescriptionForm
        intl={fakeIntl}
        dispatch={noop}
        onSubmit={v => v}
        saveActionMsg="Save description"
        updated={false}
        updateInProgress={false}
        make={[{ key: 'audi', label: 'Audi' }, { key: 'alvis', label: 'Alvis' }]}
        year={[{ key: 2004, label: 2004 }, { key: 2003, label: 2003 }]}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
