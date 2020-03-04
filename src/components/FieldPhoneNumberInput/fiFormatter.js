import { PhoneNumberUtil } from 'google-libphonenumber';

export const format = value => {
  if (typeof value === 'undefined' || value === null) {
    // undefined or null values are invalid
    return '';
  }
  if (typeof value === 'string' && value.length > 2) {
    try {
      const phoneUtil = PhoneNumberUtil.getInstance();
      const number = phoneUtil.parseAndKeepRawInput(value, 'GB');
      const val = phoneUtil.formatInOriginalFormat(number, 'GB');

      return val;
    }
    catch(e) {
      return value;
    }
  }
  else {
    return value;
  }
};

/**
 * Parser that strips whitespaces away from a phone number
 * string so that the plain number can be stored.
 */
export const parse = value => (value ? value.replace(/\s/g, '') : '');
