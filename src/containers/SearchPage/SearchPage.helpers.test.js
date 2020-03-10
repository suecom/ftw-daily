import {
  validURLParamForExtendedData,
  validFilterParams,
  validURLParamsForExtendedData,
  pickSearchParamsOnly,
} from './SearchPage.helpers.js';

const filters = {
  makeFilter: {
    paramName: 'pub_make',
    options: [{ key: 'audi' }, { key: 'alvis' }],
  },
};

describe('SearchPage.helpers', () => {
  describe('validURLParamForExtendedData', () => {
    it('returns a valid parameter', () => {
      const validParam = validURLParamForExtendedData('pub_make', 'audi', filters);
      expect(validParam).toEqual({ pub_make: 'audi' });
    });

    it('takes empty params', () => {
      const validParam = validURLParamForExtendedData('pub_,make', '', filters);
      expect(validParam).toEqual({});
    });

    it('drops an invalid param value', () => {
      const validParam = validURLParamForExtendedData('pub_make', 'invalid', filters);
      expect(validParam).toEqual({});
    });

    it('drops a param with invalid name', () => {
      const validParam = validURLParamForExtendedData('pub_invalid', 'towels', filters);
      expect(validParam).toEqual({});
    });
  });

  describe('validFilterParams', () => {
    it('returns valid parameters', () => {
      const validParams = validFilterParams(urlParams, filters);
      expect(validParams).toEqual(urlParams);
    });

    it('takes empty params', () => {
      const validParams = validFilterParams({}, filters);
      expect(validParams).toEqual({});
    });

    it('drops an invalid filter param value', () => {
      const params = { pub_make: 'audi' };
      const validParams = validFilterParams(params, filters);
      expect(validParams).toEqual({ pub_make: 'audi' });
    });

    it('drops non-filter params', () => {
      const params = { pub_make: 'audi', other_param: 'somevalue' };
      const validParams = validFilterParams(params, filters);
      expect(validParams).toEqual({ pub_make: 'audi' });
    });
  });

  describe('validURLParamsForExtendedData', () => {
    it('returns valid parameters', () => {
      const validParams = validURLParamsForExtendedData(urlParams, filters);
      expect(validParams).toEqual(urlParams);
    });

    it('takes empty params', () => {
      const validParams = validURLParamsForExtendedData({}, filters);
      expect(validParams).toEqual({});
    });

    it('drops an invalid filter param value', () => {
      const params = { pub_make: 'smoke' };
      const validParams = validURLParamsForExtendedData(params, filters);
      expect(validParams).toEqual({ pub_make: 'audi' });
    });

    it('returns non-filter params', () => {
      const params = { pub_make: 'audi', other_param: 'somevalue' };
      const validParams = validURLParamsForExtendedData(params, filters);
      expect(validParams).toEqual(params);
    });
  });

  describe('pickSearchParamsOnly', () => {
    it('returns search parameters', () => {
      const params = {
        address: 'address value',
        origin: 'origin value',
        bounds: 'bounds value',
      };
      const validParams = pickSearchParamsOnly(params, filters);
      expect(validParams).toEqual({ bounds: 'bounds value' });
    });

    it('returns filter parameters', () => {
      const validParams = pickSearchParamsOnly(urlParams, filters);
      expect(validParams).toEqual(urlParams);
    });

    it('drops an invalid filter param value', () => {
      const params = { pub_make: 'audi' };
      const validParams = pickSearchParamsOnly(params, filters);
      expect(validParams).toEqual({ pub_make: 'audi' });
    });

    it('drops non-search params', () => {
      const params = { pub_make: 'audi', other_param: 'somevalue' };
      const validParams = pickSearchParamsOnly(params, filters);
      expect(validParams).toEqual({ pub_make: 'audi' });
    });
  });
});
