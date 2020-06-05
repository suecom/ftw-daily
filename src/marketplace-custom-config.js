/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */

export const filters = [
  {
    id: 'make',
    label: 'Make',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_make'],
    config: {
      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'Abarth', label: 'Abarth' },
        { key: 'AC', label: 'AC' },
        { key: 'Acura', label: 'Acura' },
        { key: 'Alfa Romeo', label: 'Alfa Romeo' },
        { key: 'Allard', label: 'Allard' },
        { key: 'Alpina', label: 'Alpina' },
        { key: 'Alpine', label: 'Alpine' },
        { key: 'Alvis', label: 'Alvis' },
        { key: 'AMC', label: 'AMC' },
        { key: 'Ariel', label: 'Ariel' },
        { key: 'Armstrong Siddeley', label: 'Armstrong Siddeley' },
        { key: 'Ascari', label: 'Ascari' },
        { key: 'Aston Martin', label: 'Aston Martin' },
        { key: 'Audi', label: 'Audi' },
        { key: 'Austin', label: 'Austin' },
        { key: 'Austin Healey', label: 'Austin Healey' },
        { key: 'Autobianchi', label: 'Autobianchi' },
        { key: 'Auverland', label: 'Auverland' },
        { key: 'Avanti', label: 'Avanti' },
        { key: 'Beijing', label: 'Beijing' },
        { key: 'Bentley', label: 'Bentley' },
        { key: 'Berkeley', label: 'Berkeley' },
        { key: 'Bitter', label: 'Bitter' },
        { key: 'Bizzarrini', label: 'Bizzarrini' },
        { key: 'BMW', label: 'BMW' },
        { key: 'Brilliance', label: 'Brilliance' },
        { key: 'Bristol', label: 'Bristol' },
        { key: 'Bugatti', label: 'Bugatti' },
        { key: 'Buick', label: 'Buick' },
        { key: 'Cadillac', label: 'Cadillac' },
        { key: 'Caterham', label: 'Caterham' },
        { key: 'Checker', label: 'Checker' },
        { key: 'Chevrolet', label: 'Chevrolet' },
        { key: 'Chrysler', label: 'Chrysler' },
        { key: 'Citroen', label: 'Citroen' },
        { key: 'Dacia', label: 'Dacia' },
        { key: 'Daewoo', label: 'Daewoo' },
        { key: 'Daf', label: 'Daf' },
        { key: 'Daihatsu', label: 'Daihatsu' },
        { key: 'Daimler', label: 'Daimler' },
        { key: 'Datsun', label: 'Datsun' },
        { key: 'Tomaso De Tomaso', label: 'Tomaso De Tomaso' },
        { key: 'DKW', label: 'DKW' },
        { key: 'Dodge', label: 'Dodge' },
        { key: 'Donkervoort', label: 'Donkervoort' },
        { key: 'Eagle', label: 'Eagle' },
        { key: 'Fairthorpe', label: 'Fairthorpe' },
        { key: 'Ferrari', label: 'Ferrari' },
        { key: 'Fiat', label: 'Fiat' },
        { key: 'Fisker', label: 'Fisker' },
        { key: 'Ford', label: 'Ford' },
        { key: 'Gaz', label: 'Gaz' },
        { key: 'Geely', label: 'Geely' },
        { key: 'Ginetta', label: 'Ginetta' },
        { key: 'GMC', label: 'GMC' },
        { key: 'Holden', label: 'Holden' },
        { key: 'Honda', label: 'Honda' },
        { key: 'Hudson', label: 'Hudson' },
        { key: 'Humber', label: 'Humber' },
        { key: 'Hummer', label: 'Hummer' },
        { key: 'Hyundai', label: 'Hyundai' },
        { key: 'Infiniti', label: 'Infiniti' },
        { key: 'Innocenti', label: 'Innocenti' },
        { key: 'Isuzu', label: 'Isuzu' },
        { key: 'Italdesign', label: 'Italdesign' },
        { key: 'Jaguar', label: 'Jaguar' },
        { key: 'Jeep', label: 'Jeep' },
        { key: 'Jensen', label: 'Jensen' },
        { key: 'Kia', label: 'Kia' },
        { key: 'Koenigsegg', label: 'Koenigsegg' },
        { key: 'Lada', label: 'Lada' },
        { key: 'Lamborghini', label: 'Lamborghini' },
        { key: 'Lancia', label: 'Lancia' },
        { key: 'Land', label: 'Rover Land Rover' },
        { key: 'Lexus', label: 'Lexus' },
        { key: 'Lincoln', label: 'Lincoln' },
        { key: 'Lotec', label: 'Lotec' },
        { key: 'Lotus', label: 'Lotus' },
        { key: 'Luxgen', label: 'Luxgen' },
        { key: 'Mahindra', label: 'Mahindra' },
        { key: 'Marcos', label: 'Marcos' },
        { key: 'Maserati', label: 'Maserati' },
        { key: 'Matra', label: 'Simca Matra Simca' },
        { key: 'Maybach', label: 'Maybach' },
        { key: 'Mazda', label: 'Mazda' },
        { key: 'McLaren', label: 'McLaren' },
        { key: 'Mercedes Benz', label: 'Mercedes-Benz' },
        { key: 'Mercury', label: 'Mercury' },
        { key: 'MG', label: 'MG' },
        { key: 'Mini', label: 'Mini' },
        { key: 'Mitsubishi', label: 'Mitsubishi' },
        { key: 'Monteverdi', label: 'Monteverdi' },
        { key: 'Moretti', label: 'Moretti' },
        { key: 'Morgan', label: 'Morgan' },
        { key: 'Morris', label: 'Morris' },
        { key: 'Nissan', label: 'Nissan' },
        { key: 'Noble', label: 'Noble' },
        { key: 'NSU', label: 'NSU' },
        { key: 'Oldsmobile', label: 'Oldsmobile' },
        { key: 'Opel', label: 'Opel' },
        { key: 'Packard', label: 'Packard' },
        { key: 'Pagani', label: 'Pagani' },
        { key: 'Panoz', label: 'Panoz' },
        { key: 'Peugeot', label: 'Peugeot' },
        { key: 'Pininfarina', label: 'Pininfarina' },
        { key: 'Plymouth', label: 'Plymouth' },
        { key: 'Pontiac', label: 'Pontiac' },
        { key: 'Porsche', label: 'Porsche' },
        { key: 'Proton', label: 'Proton' },
        { key: 'Reliant', label: 'Reliant' },
        { key: 'Renault', label: 'Renault' },
        { key: 'Riley', label: 'Riley' },
        { key: 'Rolls Royce', label: 'Rolls Royce' },
        { key: 'Rover', label: 'Rover' },
        { key: 'Saab', label: 'Saab' },
        { key: 'Saleen', label: 'Saleen' },
        { key: 'Samsung', label: 'Samsung' },
        { key: 'Saturn', label: 'Saturn' },
        { key: 'Scion', label: 'Scion' },
        { key: 'Seat', label: 'Seat' },
        { key: 'Simca', label: 'Simca' },
        { key: 'Singer', label: 'Singer' },
        { key: 'Skoda', label: 'Skoda' },
        { key: 'Smart', label: 'Smart' },
        { key: 'Spyker', label: 'spyker' },
        { key: 'Ssangyong', label: 'Ssangyong' },
        { key: 'Steyr', label: 'Steyr' },
        { key: 'Studebaker', label: 'Studebaker' },
        { key: 'Subaru', label: 'Subaru' },
        { key: 'Sunbeam', label: 'Sunbeam' },
        { key: 'Suzuki', label: 'Suzuki' },
        { key: 'talbot', label: 'Talbot' },
        { key: 'Tata', label: 'Tata' },
        { key: 'Tatra', label: 'Tatra' },
        { key: 'Tesla', label: 'Tesla' },
        { key: 'Toyota', label: 'Toyota' },
        { key: 'Trabant', label: 'Trabant' },
        { key: 'Triumph', label: 'Triumph' },
        { key: 'TVR', label: 'TVR' },
        { key: 'Vauxhall', label: 'Vauxhall' },
        { key: 'Vector', label: 'Vector' },
        { key: 'Venturi', label: 'Venturi' },
        { key: 'Volkswagen', label: 'Volkswagen' },
        { key: 'Volvo', label: 'Volvo' },
        { key: 'Wartburg', label: 'Wartburg' },
        { key: 'Westfield', label: 'Westfield' },
        { key: 'Willys', label: 'Willys' },
        { key: 'Xedos', label: 'Xedos' },
        { key: 'Zagato', label: 'Zagato' },
        { key: 'Zastava', label: 'Zastava' },
        { key: 'Zaz', label: 'Zaz' },
        { key: 'Zenvo', label: 'Zenvo' },
        { key: 'Zil', label: 'Zil' },
      ],
    },
  },
  {
    id: 'dates',
    label: 'Dates',
    type: 'BookingDateRangeFilter',
    group: 'primary',
    // Note: BookingDateRangeFilter is fixed filter,
    // you can't change "queryParamNames: ['dates'],"
    queryParamNames: ['dates'],
    config: {},
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 50,
      max: 500,
      step: 5,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
  {
    id: 'year',
    label: 'Year',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_year'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {
      options: [
        { key: '2005', label: '2005' },
        { key: '2004', label: '2004' },
        { key: '2003', label: '2003' },
        { key: '2002', label: '2002' },
        { key: '2001', label: '2001' },
        { key: '2000', label: '2000' },
        { key: '1999', label: '1999' },
        { key: '1998', label: '1998' },
        { key: '1997', label: '1997' },
        { key: '1996', label: '1996' },
        { key: '1995', label: '1995' },
        { key: '1994', label: '1994' },
        { key: '1993', label: '1993' },
        { key: '1992', label: '1992' },
        { key: '1991', label: '1991' },
        { key: '1990', label: '1990' },
        { key: '1989', label: '1989' },
        { key: '1988', label: '1988' },
        { key: '1987', label: '1987' },
        { key: '1986', label: '1986' },
        { key: '1985', label: '1985' },
        { key: '1984', label: '1984' },
        { key: '1983', label: '1983' },
        { key: '1982', label: '1982' },
        { key: '1981', label: '1981' },
        { key: '1980', label: '1980' },
        { key: '1979', label: '1979' },
        { key: '1978', label: '1978' },
        { key: '1977', label: '1977' },
        { key: '1976', label: '1976' },
        { key: '1975', label: '1975' },
        { key: '1974', label: '1974' },
        { key: '1973', label: '1973' },
        { key: '1972', label: '1972' },
        { key: '1971', label: '1971' },
        { key: '1970', label: '1970' },
        { key: '1969', label: '1969' },
        { key: '1968', label: '1968' },
        { key: '1967', label: '1967' },
        { key: '1966', label: '1966' },
        { key: '1965', label: '1965' },
        { key: '1964', label: '1964' },
        { key: '1963', label: '1963' },
        { key: '1962', label: '1962' },
        { key: '1961', label: '1961' },
        { key: '1960', label: '1960' },
        { key: '1959', label: '1959' },
        { key: '1958', label: '1958' },
        { key: '1957', label: '1957' },
        { key: '1956', label: '1956' },
        { key: '1955', label: '1955' },
        { key: '1954', label: '1954' },
        { key: '1953', label: '1953' },
        { key: '1952', label: '1952' },
        { key: '1951', label: '1951' },
        { key: '1950', label: '1950' },
        { key: '1949', label: '1949' },
        { key: '1948', label: '1948' },
        { key: '1947', label: '1947' },
        { key: '1946', label: '1946' },
        { key: '1945', label: '1945' },
        { key: '1944', label: '1944' },
        { key: '1943', label: '1943' },
        { key: '1942', label: '1942' },
        { key: '1941', label: '1941' },
        { key: '1940', label: '1940' },
        { key: '1939', label: '1939' },
        { key: '1938', label: '1938' },
        { key: '1937', label: '1937' },
        { key: '1936', label: '1936' },
      ]
    },
  },
];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Keyword filter is sorting the results already by relevance.
  // If keyword filter is active, we need to disable sorting.
  conflictingFilters: ['keyword'],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
