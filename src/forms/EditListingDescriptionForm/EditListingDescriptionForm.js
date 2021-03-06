import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { maxLength, required, composeValidators, yearAtLeast, yearLessThan } from '../../util/validators';
import config from '../../config';
import { Form, Button, FieldTextInput } from '../../components';
import CustomMakeSelectFieldMaybe from './CustomMakeSelectFieldMaybe';

import css from './EditListingDescriptionForm.module.css';

const TITLE_MAX_LENGTH = 60;

const EditListingDescriptionFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        make,
        model,
        year,
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
      } = formRenderProps;

      const titleMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.title' });
      const titlePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titlePlaceholder',
      });
      const titleRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titleRequired',
      });
      const maxLengthMessage = intl.formatMessage(
        { id: 'EditListingDescriptionForm.maxLength' },
        {
          maxLength: TITLE_MAX_LENGTH,
        }
      );

      const descriptionMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.description',
      });
      const descriptionPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionPlaceholder',
      });
      const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);
      const descriptionRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.descriptionRequired',
      });

      const modelMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.model',
      });
      const modelPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.modelPlaceholder',
      });
      const modelRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.modelRequired',
      });

      const yearMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.year',
      });
      const yearPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.yearPlaceholder',
      });

      const yearRequired = required(
        intl.formatMessage({
          id: 'EditListingDescriptionForm.yearRequired',
        })
      );
      const minRange = config.listingMinimumYear;
      const minRangeRequired = yearAtLeast(
        intl.formatMessage(
          {
            id: 'EditListingDescriptionForm.yearTooLow',
          },
          {
            minPrice: minRange,
          }
        ),
        config.listingMinimumYear
      );
      const maxRange = config.listingMaximumYear;
      const maxRangeRequired = yearLessThan(
        intl.formatMessage(
          {
            id: 'EditListingDescriptionForm.yearTooHigh',
          },
          {
            minPrice: maxRange,
          }
        ),
        config.listingMaximumYear
      );
      const yearValidators = config.listingMinimumYear && config.listingMaximumYear
        ? composeValidators(yearRequired, minRangeRequired, maxRangeRequired)
        : yearRequired;


      const { updateListingError, createListingDraftError, showListingsError } = fetchErrors || {};
      const errorMessageUpdateListing = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.updateFailed" />
        </p>
      ) : null;

      // This error happens only on first tab (of EditListingWizard)
      const errorMessageCreateListingDraft = createListingDraftError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.createListingDraftError" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessageCreateListingDraft}
          {errorMessageUpdateListing}
          {errorMessageShowListing}
          <FieldTextInput
            id="title"
            name="title"
            className={css.title}
            type="text"
            label={titleMessage}
            placeholder={titlePlaceholderMessage}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
            autoFocus
          />

          <CustomMakeSelectFieldMaybe
            id="make"
            name="make"
            classname={css.make}
            make={make}
            intl={intl}
          />

          <FieldTextInput
            id="model"
            name="model"
            className={css.model}
            type="text"
            model={model}
            label={modelMessage}
            placeholder={modelPlaceholderMessage}
            validate={composeValidators(required(modelRequiredMessage))}
          />

          <FieldTextInput
            id="year"
            name="year"
            className={css.year}
            type="text"
            model={year}
            label={yearMessage}
            placeholder={yearPlaceholderMessage}
            validate={yearValidators}
          />

          <FieldTextInput
            id="description"
            name="description"
            className={css.description}
            type="textarea"
            label={descriptionMessage}
            placeholder={descriptionPlaceholderMessage}
            validate={composeValidators(required(descriptionRequiredMessage))}
          />

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingDescriptionFormComponent.defaultProps = { className: null, fetchErrors: null };

EditListingDescriptionFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  model: string,
  make: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
  year: arrayOf(
    shape({
      key: Number.isRequired,
      label: Number.isRequired,
    })
  ),
};

export default compose(injectIntl)(EditListingDescriptionFormComponent);
