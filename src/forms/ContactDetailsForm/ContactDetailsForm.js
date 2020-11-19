import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { Form as FinalForm } from 'react-final-form';
import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import * as validators from '../../util/validators';
import { ensureCurrentUser } from '../../util/data';
import config from '../../config';
import getCountryCodes from '../../translations/countryCodes';
import {
  isChangeEmailTakenError,
  isChangeEmailWrongPassword,
  isTooManyEmailVerificationRequestsError,
} from '../../util/errors';
import {
  FieldPhoneNumberInput,
  Form,
  PrimaryButton,
  FieldTextInput,
  FieldSelect,
} from '../../components';

import css from './ContactDetailsForm.module.css';

const SHOW_EMAIL_SENT_TIMEOUT = 2000;

class ContactDetailsFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { showVerificationEmailSentMessage: false, showResetPasswordMessage: false };
    this.emailSentTimeoutId = null;
    this.handleResendVerificationEmail = this.handleResendVerificationEmail.bind(this);
    this.handleResetPassword = this.handleResetPassword.bind(this);
    this.submittedValues = {};
  }

  componentWillUnmount() {
    window.clearTimeout(this.emailSentTimeoutId);
  }

  handleResendVerificationEmail() {
    this.setState({ showVerificationEmailSentMessage: true });

    this.props.onResendVerificationEmail().then(() => {
      // show "verification email sent" text for a bit longer.
      this.emailSentTimeoutId = window.setTimeout(() => {
        this.setState({ showVerificationEmailSentMessage: false });
      }, SHOW_EMAIL_SENT_TIMEOUT);
    });
  }

  handleResetPassword() {
    this.setState({ showResetPasswordMessage: true });
    const email = this.props.currentUser.attributes.email;
    this.props.onResetPassword(email);
  }

  render() {
    return (
      <FinalForm
        {...this.props}
        render={fieldRenderProps => {
          const {
            rootClassName,
            className,
            saveEmailError,
            savePhoneNumberError,
            currentUser,
            formId,
            handleSubmit,
            inProgress,
            intl,
            invalid,
            sendVerificationEmailError,
            sendVerificationEmailInProgress,
            resetPasswordInProgress,
            values,
          } = fieldRenderProps;
          const {
            email,
            phoneNumber,
            addressLine1,
            addressLine2,
            postalCode,
            city,
            state,
            country,
          } = values;

          const user = ensureCurrentUser(currentUser);

          if (!user.id) {
            return null;
          }

          const { email: currentEmail, emailVerified, pendingEmail, profile } = user.attributes;

          // email

          // has the email changed
          const emailChanged = currentEmail !== email;

          const emailLabel = intl.formatMessage({
            id: 'ContactDetailsForm.emailLabel',
          });

          const emailPlaceholder = currentEmail || '';

          const emailRequiredMessage = intl.formatMessage({
            id: 'ContactDetailsForm.emailRequired',
          });
          const emailRequired = validators.required(emailRequiredMessage);
          const emailInvalidMessage = intl.formatMessage({
            id: 'ContactDetailsForm.emailInvalid',
          });
          const emailValid = validators.emailFormatValid(emailInvalidMessage);

          const tooManyVerificationRequests = isTooManyEmailVerificationRequestsError(
            sendVerificationEmailError
          );

          const emailTouched = this.submittedValues.email !== values.email;
          const emailTakenErrorText = isChangeEmailTakenError(saveEmailError)
            ? intl.formatMessage({ id: 'ContactDetailsForm.emailTakenError' })
            : null;

          let resendEmailMessage = null;
          if (tooManyVerificationRequests) {
            resendEmailMessage = (
              <span className={css.tooMany}>
                <FormattedMessage id="ContactDetailsForm.tooManyVerificationRequests" />
              </span>
            );
          } else if (
            sendVerificationEmailInProgress ||
            this.state.showVerificationEmailSentMessage
          ) {
            resendEmailMessage = (
              <span className={css.emailSent}>
                <FormattedMessage id="ContactDetailsForm.emailSent" />
              </span>
            );
          } else {
            resendEmailMessage = (
              <span
                className={css.helperLink}
                onClick={this.handleResendVerificationEmail}
                role="button"
              >
                <FormattedMessage id="ContactDetailsForm.resendEmailVerificationText" />
              </span>
            );
          }

          // Email status info: unverified, verified and pending email (aka changed unverified email)
          let emailVerifiedInfo = null;

          if (emailVerified && !pendingEmail && !emailChanged) {
            // Current email is verified and there's no pending unverified email
            emailVerifiedInfo = (
              <span className={css.emailVerified}>
                <FormattedMessage id="ContactDetailsForm.emailVerified" />
              </span>
            );
          } else if (!emailVerified && !pendingEmail) {
            // Current email is unverified. This is the email given in sign up form

            emailVerifiedInfo = (
              <span className={css.emailUnverified}>
                <FormattedMessage
                  id="ContactDetailsForm.emailUnverified"
                  values={{ resendEmailMessage }}
                />
              </span>
            );
          } else if (pendingEmail) {
            // Current email has been tried to change, but the new address is not yet verified

            const pendingEmailStyled = <span className={css.emailStyle}>{pendingEmail}</span>;
            const pendingEmailCheckInbox = (
              <span className={css.checkInbox}>
                <FormattedMessage
                  id="ContactDetailsForm.pendingEmailCheckInbox"
                  values={{ pendingEmail: pendingEmailStyled }}
                />
              </span>
            );

            emailVerifiedInfo = (
              <span className={css.pendingEmailUnverified}>
                <FormattedMessage
                  id="ContactDetailsForm.pendingEmailUnverified"
                  values={{ pendingEmailCheckInbox, resendEmailMessage }}
                />
              </span>
            );
          }

          // phone
          const protectedData = profile.protectedData || {};
          const currentPhoneNumber = protectedData.phoneNumber;

          // has the phone number changed
          const phoneNumberChanged = currentPhoneNumber !== phoneNumber;

          const phonePlaceholder = intl.formatMessage({
            id: 'ContactDetailsForm.phonePlaceholder',
          });
          const phoneLabel = intl.formatMessage({ id: 'ContactDetailsForm.phoneLabel' });

          const phoneValid = validators.phoneNumberValid(
            intl.formatMessage({
              id: 'ContactDetailsForm.phoneNumberRequired',
            })
          );

          // has addressLine1 changed
          const currentAddressLine1 = protectedData.addressLine1;
          const addressLine1Changed = currentAddressLine1 !== addressLine1;

          const optionalText = intl.formatMessage({
            id: 'ContactDetailsForm.optionalText',
          });

          const addressLine1Label = intl.formatMessage({
            id: 'ContactDetailsForm.addressLine1Label',
          });
          const addressLine1Placeholder = intl.formatMessage({
            id: 'ContactDetailsForm.addressLine1Placeholder',
          });
          const addressLine1Required = validators.required(
            intl.formatMessage({
              id: 'ContactDetailsForm.addressLine1Required',
            })
          );

          // has addressLine2 changed
          const currentAddressLine2 = protectedData.addressLine2;
          const addressLine2Changed = currentAddressLine2 !== addressLine2;

          const addressLine2Label = intl.formatMessage(
            { id: 'ContactDetailsForm.addressLine2Label' },
            { optionalText: optionalText }
          );
          const addressLine2Placeholder = intl.formatMessage({
            id: 'ContactDetailsForm.addressLine2Placeholder',
          });

          // has postalCode changed
          const currentPostalCode = protectedData.postalCode;
          const postalCodeChanged = currentPostalCode !== postalCode;

          const postalCodeLabel = intl.formatMessage({ id: 'ContactDetailsForm.postalCodeLabel' });
          const postalCodePlaceholder = intl.formatMessage({
            id: 'ContactDetailsForm.postalCodePlaceholder',
          });
          const postalCodeRequired = validators.required(
            intl.formatMessage({
              id: 'ContactDetailsForm.postalCodeRequired',
            })
          );

          // has city changed
          const currentCity = protectedData.city;
          const cityChanged = currentCity !== city;

          const cityLabel = intl.formatMessage({ id: 'ContactDetailsForm.cityLabel' });
          const cityPlaceholder = intl.formatMessage({ id: 'ContactDetailsForm.cityPlaceholder' });
          const cityRequired = validators.required(
            intl.formatMessage({
              id: 'ContactDetailsForm.cityRequired',
            })
          );

          // has state changed
          const currentState = protectedData.state;
          const stateChanged = currentState !== state;

          const stateLabel = intl.formatMessage(
            { id: 'StripePaymentAddress.stateLabel' },
            { optionalText: optionalText }
          );
          const statePlaceholder = intl.formatMessage({
            id: 'StripePaymentAddress.statePlaceholder',
          });

          // Use tha language set in config.locale to get the correct translations of the country names
          const countryCodes = getCountryCodes(config.locale);

          // has country changed
          const currentCountry = protectedData.country;
          const countryChanged = currentCountry !== country;

          const countryLabel = intl.formatMessage({ id: 'StripePaymentAddress.countryLabel' });
          const countryPlaceholder = intl.formatMessage({
            id: 'StripePaymentAddress.countryPlaceholder',
          });
          const countryRequired = validators.required(
            intl.formatMessage({
              id: 'StripePaymentAddress.countryRequired',
            })
          );

          // password
          const passwordLabel = intl.formatMessage({
            id: 'ContactDetailsForm.passwordLabel',
          });
          const passwordPlaceholder = intl.formatMessage({
            id: 'ContactDetailsForm.passwordPlaceholder',
          });
          const passwordRequiredMessage = intl.formatMessage({
            id: 'ContactDetailsForm.passwordRequired',
          });

          const passwordRequired = validators.requiredStringNoTrim(passwordRequiredMessage);

          const passwordMinLengthMessage = intl.formatMessage(
            {
              id: 'ContactDetailsForm.passwordTooShort',
            },
            {
              minLength: validators.PASSWORD_MIN_LENGTH,
            }
          );

          const passwordMinLength = validators.minLength(
            passwordMinLengthMessage,
            validators.PASSWORD_MIN_LENGTH
          );

          const passwordValidators = emailChanged
            ? validators.composeValidators(passwordRequired, passwordMinLength)
            : null;

          const passwordFailedMessage = intl.formatMessage({
            id: 'ContactDetailsForm.passwordFailed',
          });
          const passwordTouched = this.submittedValues.currentPassword !== values.currentPassword;
          const passwordErrorText = isChangeEmailWrongPassword(saveEmailError)
            ? passwordFailedMessage
            : null;

          const confirmClasses = classNames(css.confirmChangesSection, {
            [css.confirmChangesSectionVisible]: emailChanged,
          });

          // generic error
          const isGenericEmailError = saveEmailError && !(emailTakenErrorText || passwordErrorText);

          let genericError = null;

          if (isGenericEmailError && savePhoneNumberError) {
            genericError = (
              <span className={css.error}>
                <FormattedMessage id="ContactDetailsForm.genericFailure" />
              </span>
            );
          } else if (isGenericEmailError) {
            genericError = (
              <span className={css.error}>
                <FormattedMessage id="ContactDetailsForm.genericEmailFailure" />
              </span>
            );
          } else if (savePhoneNumberError) {
            genericError = (
              <span className={css.error}>
                <FormattedMessage id="ContactDetailsForm.genericPhoneNumberFailure" />
              </span>
            );
          }

          const sendPasswordLink = (
            <span className={css.helperLink} onClick={this.handleResetPassword} role="button">
              <FormattedMessage id="ContactDetailsForm.resetPasswordLinkText" />
            </span>
          );

          const resendPasswordLink = (
            <span className={css.helperLink} onClick={this.handleResetPassword} role="button">
              <FormattedMessage id="ContactDetailsForm.resendPasswordLinkText" />
            </span>
          );

          const resetPasswordLink =
            this.state.showResetPasswordMessage || resetPasswordInProgress ? (
              <>
                <FormattedMessage
                  id="ContactDetailsForm.resetPasswordLinkSent"
                  values={{
                    email: <span className={css.emailStyle}>{currentUser.attributes.email}</span>,
                  }}
                />{' '}
                {resendPasswordLink}
              </>
            ) : (
              sendPasswordLink
            );

          const classes = classNames(rootClassName || css.root, className);
          const submittedOnce = Object.keys(this.submittedValues).length > 0;
          const pristineSinceLastSubmit = submittedOnce && isEqual(values, this.submittedValues);
          const submitDisabled =
            invalid ||
            pristineSinceLastSubmit ||
            inProgress ||
            !(
              emailChanged ||
              phoneNumberChanged ||
              addressLine1Changed ||
              addressLine2Changed ||
              postalCodeChanged ||
              cityChanged ||
              stateChanged ||
              countryChanged
            );

          return (
            <Form
              className={classes}
              onSubmit={e => {
                this.submittedValues = values;
                handleSubmit(e);
              }}
            >
              <div className={css.contactDetailsSection}>
                <FieldTextInput
                  type="email"
                  name="email"
                  id={formId ? `${formId}.email` : 'email'}
                  label={emailLabel}
                  placeholder={emailPlaceholder}
                  validate={validators.composeValidators(emailRequired, emailValid)}
                  customErrorText={emailTouched ? null : emailTakenErrorText}
                />
                {emailVerifiedInfo}
                <FieldPhoneNumberInput
                  className={css.phone}
                  name="phoneNumber"
                  id={formId ? `${formId}.phoneNumber` : 'phoneNumber'}
                  label={phoneLabel}
                  placeholder={phonePlaceholder}
                  validate={phoneValid}
                />
                <div className={css.formRow}>
                  <FieldTextInput
                    id={formId ? `${formId}.addressLine1` : 'addressLine1'}
                    name="addressLine1"
                    className={css.field}
                    type="text"
                    autoComplete="billing address-line1"
                    label={addressLine1Label}
                    placeholder={addressLine1Placeholder}
                    validate={addressLine1Required}
                  />
                  <FieldTextInput
                    id={formId ? `${formId}.addressLine2` : 'addressLine2'}
                    name="addressLine2"
                    className={css.field}
                    type="text"
                    autoComplete="billing address-line2"
                    label={addressLine2Label}
                    placeholder={addressLine2Placeholder}
                  />
                </div>
                <div className={css.formRow}>
                  <FieldTextInput
                    id={formId ? `${formId}.postalCode` : 'postalCode'}
                    name="postalCode"
                    className={css.field}
                    type="text"
                    autoComplete="billing postal-code"
                    label={postalCodeLabel}
                    placeholder={postalCodePlaceholder}
                    validate={postalCodeRequired}
                  />

                  <FieldTextInput
                    id={formId ? `${formId}.city` : 'city'}
                    name="city"
                    className={css.field}
                    type="text"
                    autoComplete="billing address-level2"
                    label={cityLabel}
                    placeholder={cityPlaceholder}
                    validate={cityRequired}
                  />
                </div>
                <div className={css.formRow}>
                  <FieldTextInput
                    id={formId ? `${formId}.state` : 'state'}
                    name="state"
                    className={css.field}
                    type="text"
                    autoComplete="billing address-level1"
                    label={stateLabel}
                    placeholder={statePlaceholder}
                  />

                  <FieldSelect
                    id={formId ? `${formId}.country` : 'country'}
                    name="country"
                    className={css.field}
                    label={countryLabel}
                    validate={countryRequired}
                  >
                    <option disabled value="">
                      {countryPlaceholder}
                    </option>
                    {countryCodes.map(country => {
                      return (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      );
                    })}
                  </FieldSelect>
                </div>
              </div>

              <div className={confirmClasses}>
                <h3 className={css.confirmChangesTitle}>
                  <FormattedMessage id="ContactDetailsForm.confirmChangesTitle" />
                </h3>
                <p className={css.confirmChangesInfo}>
                  <FormattedMessage id="ContactDetailsForm.confirmChangesInfo" />
                  <br />
                  <FormattedMessage
                    id="ContactDetailsForm.resetPasswordInfo"
                    values={{ resetPasswordLink }}
                  />
                </p>

                <FieldTextInput
                  className={css.password}
                  type="password"
                  name="currentPassword"
                  id={formId ? `${formId}.currentPassword` : 'currentPassword'}
                  autoComplete="current-password"
                  label={passwordLabel}
                  placeholder={passwordPlaceholder}
                  validate={passwordValidators}
                  customErrorText={passwordTouched ? null : passwordErrorText}
                />
              </div>
              <div className={css.bottomWrapper}>
                {genericError}
                <PrimaryButton
                  type="submit"
                  inProgress={inProgress}
                  ready={pristineSinceLastSubmit}
                  disabled={submitDisabled}
                >
                  <FormattedMessage id="ContactDetailsForm.saveChanges" />
                </PrimaryButton>
              </div>
            </Form>
          );
        }}
      />
    );
  }
}

ContactDetailsFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  formId: null,
  saveEmailError: null,
  savePhoneNumberError: null,
  inProgress: false,
  sendVerificationEmailError: null,
  sendVerificationEmailInProgress: false,
  email: null,
  phoneNumber: null,
  addressLine1: null,
  addressLine2: null,
  postalCode: null,
  city: null,
  state: null,
  country: null,
  resetPasswordInProgress: false,
  resetPasswordError: null,
};

const { bool, func, string } = PropTypes;

ContactDetailsFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  formId: string,
  saveEmailError: propTypes.error,
  savePhoneNumberError: propTypes.error,
  inProgress: bool,
  intl: intlShape.isRequired,
  onResendVerificationEmail: func.isRequired,
  ready: bool.isRequired,
  sendVerificationEmailError: propTypes.error,
  sendVerificationEmailInProgress: bool,
  resetPasswordInProgress: bool,
  resetPasswordError: propTypes.error,
};

const ContactDetailsForm = compose(injectIntl)(ContactDetailsFormComponent);

ContactDetailsForm.displayName = 'ContactDetailsForm';

export default ContactDetailsForm;
