import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-england',
    predictionPlace: {
      address: 'London, United Kingdom',
      bounds: new LatLngBounds(new LatLng(51.609847, 0.022835), new LatLng(51.419624,-0.274960)),
    },
  },
  {
    id: 'default-manchester',
    predictionPlace: {
      address: 'Manchester, United Kingdom',
      bounds: new LatLngBounds(new LatLng(53.534648, -2.140863), new LatLng(53.380515, -2.360589)),
    },
  },
  {
    id: 'default-birmingham',
    predictionPlace: {
      address: 'Birmingham, United Kingdom',
      bounds: new LatLngBounds(new LatLng(52.573404, -1.78856), new LatLng(52.416636, -2.004263)),
    },
  },
  {
    id: 'default-scotland',
    predictionPlace: {
      address: 'Edinburgh, United Kingdom',
      bounds: new LatLngBounds(new LatLng(55.996255, -3.086345), new LatLng(55.881652, -3.314311)),
    },
  },
  {
    id: 'default-wales',
    predictionPlace: {
      address: 'Cardiff, United Kingdom',
      bounds: new LatLngBounds(new LatLng(51.565230, -3.099630), new LatLng(51.385606, -3.298071)),
    },
  }
];
