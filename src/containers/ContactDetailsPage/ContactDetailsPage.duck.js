import merge from 'lodash/merge';
import { denormalisedResponseEntities } from '../../util/data';
import { storableError } from '../../util/errors';
import { currentUserShowSuccess } from '../../ducks/user.duck';

// ================ Action types ================ //

export const SAVE_CONTACT_DETAILS_REQUEST = 'app/ContactDetailsPage/SAVE_CONTACT_DETAILS_REQUEST';
export const SAVE_CONTACT_DETAILS_SUCCESS = 'app/ContactDetailsPage/SAVE_CONTACT_DETAILS_SUCCESS';
export const SAVE_EMAIL_ERROR = 'app/ContactDetailsPage/SAVE_EMAIL_ERROR';
export const SAVE_CONTACT_ERROR = 'app/ContactDetailsPage/SAVE_CONTACT_ERROR';

export const SAVE_CONTACT_DETAILS_CLEAR = 'app/ContactDetailsPage/SAVE_CONTACT_DETAILS_CLEAR';

// ================ Reducer ================ //

const initialState = {
  saveEmailError: null,
  savePhoneNumberError: null,
  saveContactDetailsInProgress: false,
  contactDetailsChanged: false,
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case SAVE_CONTACT_DETAILS_REQUEST:
      return {
        ...state,
        saveContactDetailsInProgress: true,
        saveEmailError: null,
        savePhoneNumberError: null,
        contactDetailsChanged: false,
      };
    case SAVE_CONTACT_DETAILS_SUCCESS:
      return { ...state, saveContactDetailsInProgress: false, contactDetailsChanged: true };
    case SAVE_EMAIL_ERROR:
      return { ...state, saveContactDetailsInProgress: false, saveEmailError: payload };
    case SAVE_CONTACT_ERROR:
      return { ...state, saveContactDetailsInProgress: false, saveContactError: payload };

    case SAVE_CONTACT_DETAILS_CLEAR:
      return {
        ...state,
        saveContactDetailsInProgress: false,
        saveEmailError: null,
        saveContactError: null,
        contactDetailsChanged: false,
      };

    default:
      return state;
  }
}

// ================ Action creators ================ //

export const saveContactDetailsRequest = () => ({ type: SAVE_CONTACT_DETAILS_REQUEST });
export const saveContactDetailsSuccess = () => ({ type: SAVE_CONTACT_DETAILS_SUCCESS });
export const saveEmailError = error => ({
  type: SAVE_EMAIL_ERROR,
  payload: error,
  error: true,
});
export const saveContactError = error => ({
  type: SAVE_CONTACT_ERROR,
  payload: error,
  error: true,
});

export const saveContactDetailsClear = () => ({ type: SAVE_CONTACT_DETAILS_CLEAR });

// ================ Thunks ================ //

/**
 * Make a phone number update request to the API and return the current user.
 */
const requestSaveContact = params => (dispatch, getState, sdk) => {
  const phoneNumber = params.phoneNumber;
  const addressLine1 = params.addressLine1;
  const addressLine2 = params.addressLine2;
  const postalCode = params.postalCode;
  const city = params.city;
  const state = params.state;
  const country = params.country;

  return sdk.currentUser
    .updateProfile(
      {
        protectedData: {
          phoneNumber,
          addressLine1,
          addressLine2,
          postalCode,
          city,
          state,
          country,
        },
      },
      {
        expand: true,
        include: ['profileImage'],
        'fields.image': ['variants.square-small', 'variants.square-small2x'],
      }
    )
    .then(response => {
      const entities = denormalisedResponseEntities(response);
      if (entities.length !== 1) {
        throw new Error('Expected a resource in the sdk.currentUser.updateProfile response');
      }

      const currentUser = entities[0];
      return currentUser;
    })
    .catch(e => {
      dispatch(saveContactError(storableError(e)));
      // pass the same error so that the SAVE_CONTACT_DETAILS_SUCCESS
      // action will not be fired
      throw e;
    });
};

/**
 * Make a email update request to the API and return the current user.
 */
const requestSaveEmail = params => (dispatch, getState, sdk) => {
  const { email, currentPassword } = params;

  return sdk.currentUser
    .changeEmail(
      { email, currentPassword },
      {
        expand: true,
        include: ['profileImage'],
        'fields.image': ['variants.square-small', 'variants.square-small2x'],
      }
    )
    .then(response => {
      const entities = denormalisedResponseEntities(response);
      if (entities.length !== 1) {
        throw new Error('Expected a resource in the sdk.currentUser.changeEmail response');
      }

      const currentUser = entities[0];
      return currentUser;
    })
    .catch(e => {
      dispatch(saveEmailError(storableError(e)));
      // pass the same error so that the SAVE_CONTACT_DETAILS_SUCCESS
      // action will not be fired
      throw e;
    });
};

/**
 * Save email and update the current user.
 */
const saveEmail = params => (dispatch, getState, sdk) => {
  return (
    dispatch(requestSaveEmail(params))
      .then(user => {
        dispatch(currentUserShowSuccess(user));
        dispatch(saveContactDetailsSuccess());
      })
      // error action dispatched in requestSaveEmail
      .catch(e => null)
  );
};

/**
 * Save contact details and update the current user.
 */
const saveContact = params => (dispatch, getState, sdk) => {
  return (
    dispatch(requestSaveContact(params))
      .then(user => {
        dispatch(currentUserShowSuccess(user));
        dispatch(saveContactDetailsSuccess());
      })
      // error action dispatched in requestSaveContact
      .catch(e => null)
  );
};

/**
 * Save email and phone number and update the current user.
 */
const saveEmailAndContact = params => (dispatch, getState, sdk) => {
  const {
    email,
    phoneNumber,
    currentPassword,
    addressLine1,
    addressLine2,
    postalCode,
    city,
    state,
    country,
  } = params;

  // order of promises: 1. email, 2. phone number
  const promises = [
    dispatch(requestSaveEmail({ email, currentPassword })),
    dispatch(
      requestSaveContact({
        phoneNumber,
        addressLine1,
        addressLine2,
        postalCode,
        city,
        state,
        country,
      })
    ),
  ];

  return Promise.all(promises)
    .then(values => {
      // Array of two user objects is resolved
      // the first one is from the email update
      // the second one is from the phone number update

      const saveEmailUser = values[0];
      const savePhoneNumberUser = values[1];

      // merge the protected data from the user object returned
      // by the phone update operation
      const protectedData = savePhoneNumberUser.attributes.profile.protectedData;
      const phoneNumberMergeSource = { attributes: { profile: { protectedData } } };

      const currentUser = merge(saveEmailUser, phoneNumberMergeSource);
      dispatch(currentUserShowSuccess(currentUser));
      dispatch(saveContactDetailsSuccess());
    })
    .catch(e => null);
};

/**
 * Update contact details, actions depend on which data has changed
 */
export const saveContactDetails = params => (dispatch, getState, sdk) => {
  dispatch(saveContactDetailsRequest());

  const {
    email,
    currentEmail,
    phoneNumber,
    currentPhoneNumber,
    addressLine1,
    currentAddressLine1,
    addressLine2,
    currentAddressLine2,
    postalCode,
    currentPostalCode,
    city,
    currentCity,
    state,
    currentState,
    country,
    currentCountry,
    currentPassword,
  } = params;
  const emailChanged = email !== currentEmail;
  const contactChanged =
    phoneNumber !== currentPhoneNumber ||
    addressLine1 !== currentAddressLine1 ||
    addressLine2 !== currentAddressLine2 ||
    postalCode !== currentPostalCode ||
    city !== currentCity ||
    state !== currentState ||
    country !== currentCountry;

  if (emailChanged && contactChanged) {
    return dispatch(
      saveEmailAndContact({
        email,
        currentPassword,
        phoneNumber,
        addressLine1,
        addressLine2,
        postalCode,
        city,
        state,
        country,
      })
    );
  } else if (emailChanged) {
    return dispatch(saveEmail({ email, currentPassword }));
  } else if (contactChanged) {
    return dispatch(
      saveContact({ phoneNumber, addressLine1, addressLine2, postalCode, city, state, country })
    );
  }
};
