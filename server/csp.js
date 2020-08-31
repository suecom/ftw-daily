const helmet = require('helmet');

const dev = process.env.REACT_APP_ENV === 'development';
const self = "'self'";
const unsafeInline = "'unsafe-inline'";
const unsafeEval = "'unsafe-eval'";
const data = 'data:';
const blob = 'blob:';
const devImagesMaybe = dev ? ['*.localhost:8000','localhost:5000'] : [];
const baseUrl = process.env.REACT_APP_SHARETRIBE_SDK_BASE_URL || 'https://flex-api.sharetribe.com';

// Default CSP whitelist.
//
// NOTE: Do not change these in the customizations, make custom
// additions within the exported function in the bottom of this file.
const defaultDirectives = {
  baseUri: [self],
  defaultSrc: [self],
  childSrc: [blob],
  connectSrc: [
    self,
    baseUrl,
    'maps.googleapis.com',
    '*.tiles.mapbox.com',
    'api.mapbox.com',
    'events.mapbox.com',

    // Google Analytics
    'www.google-analytics.com',
    'stats.g.doubleclick.net',

    'sentry.io',
    '*.stripe.com',
  ],
  fontSrc: [self, data, 'assets-sharetribecom.sharetribe.com', 'fonts.gstatic.com'],
  frameSrc: [
    self, 
    '*.stripe.com',
  ],
  imgSrc: [
    self,
    data,
    blob,
    ...devImagesMaybe,
    '*.imgix.net',
    'sharetribe.imgix.net', // Safari 9.1 didn't recognize asterisk rule.

    // Styleguide placeholder images
    'lorempixel.com',
    'via.placeholder.com',

    'api.mapbox.com',
    'maps.googleapis.com',
    '*.gstatic.com',
    '*.googleapis.com',
    '*.ggpht.com',

    // Google Analytics
    'www.google.com',
    'www.google-analytics.com',
    'stats.g.doubleclick.net',

    '*.stripe.com',
  ],
  scriptSrc: [
    self,
    unsafeInline,
    unsafeEval,
    data,
    'maps.googleapis.com',
    'api.mapbox.com',
    '*.google-analytics.com',
    'js.stripe.com',
  ],
  styleSrc: [self, unsafeInline, 'fonts.googleapis.com', 'api.mapbox.com'],
};

/**
 * Middleware for creating a Content Security Policy
 *
 * @param {String} reportUri URL where the browser will POST the
 * policy violation reports
 *
 * @param {Boolean} enforceSsl When SSL is enforced, all mixed content
 * is blocked/reported by the policy
 *
 * @param {Boolean} reportOnly In the report mode, requests are only
 * reported to the report URL instead of blocked
 */
module.exports = (reportUri, enforceSsl, reportOnly) => {
  // ================ START CUSTOM CSP URLs ================ //

  // Add custom CSP whitelisted URLs here. See commented example
  // below. For format specs and examples, see:
  // https://content-security-policy.com/

  // Example: extend default img directive with custom domain
  // const { imgSrc = [self] } = defaultDirectives;
  // const exampleImgSrc = imgSrc.concat('my-custom-domain.example.com');

  const { defaultSrc = [self], scriptSrc = [self], imgSrc = [self], frameSrc = [self], connectSrc = [self], fontSrc = [self], styleSrc = [self] } = defaultDirectives;

  const customDirectives = {
    // Example: Add custom directive override
    // imgSrc: exampleImgSrc,

    frameSrc: frameSrc.concat([
      'www.youtube.com', 
      'js.stripe.com',
      '*.tawk.to',
      'player.vimeo.com',
    ]),
    imgSrc: imgSrc.concat([
      '*.oldencars.com',
      '*.oldencars.com:5000', 
      'www.youtube.com',
      '*.ytimg.com',
      '*.google.co.uk',
      '*.google.fr',
      '*.google.fi',
      '*.google.com',
      '*.google.ie',
      '*.google.ch',
      '*.google.nl',
      '*.google.de',
      '*.google.com.tr',
      '*.google.cz',
      '*.google.es',
      '*.google.ca',
      '*.google.ae',
      '*.google.co.nz',
      '*.google.com.au',
      '*.google.sk',
      'www.google.be',
      'www.google.hu',
      'gateway.zscloud.net',
      'cdn.jsdelivr.net',
      'https://tawk.link/',
      '*.amazonaws.com',
      '*.tawk.to',
      '*.vimeocdn.com',
      'www.facebook.com',
    ]),
    scriptSrc: scriptSrc.concat([
      'www.youtube.com', 
      '*.ytimg.com', 
      'api.mapbox.com',
      '*.tawk.to',
      'cdn.jsdelivr.net',
      'gateway.zscloud.net',
      'connect.facebook.net',
      'player.vimeo.com',
    ]),
    connectSrc: connectSrc.concat([
      '*.tawk.to',
      'wss://*.tawk.to/',
      'vimeo.com',
    ]),
    fontSrc: fontSrc.concat([
      '*.tawk.to',
      'static3.avast.com',
    ]),
    styleSrc: styleSrc.concat([
      'cdn.jsdelivr.net',
      'gateway.zscloud.net',
    ]),
    defaultSrc: defaultSrc.concat([
      '*.tawk.to',
    ]),
    manifestSrc: [
      self,
      'gateway.zscloud.net',
    ],
  };

  // ================ END CUSTOM CSP URLs ================ //

  // Helmet v4 expects every value to be iterable so strings or booleans are not supported directly
  // If we want to add block-all-mixed-content directive we need to add empty array to directives
  // See Helmet's default directives:
  // https://github.com/helmetjs/helmet/blob/bdb09348c17c78698b0c94f0f6cc6b3968cd43f9/middlewares/content-security-policy/index.ts#L51

  const directives = Object.assign({ reportUri: [reportUri] }, defaultDirectives, customDirectives);
  if (enforceSsl) {
    directives.blockAllMixedContent = [];
  }

  // See: https://helmetjs.github.io/docs/csp/
  return helmet.contentSecurityPolicy({
    directives,
    reportOnly,
  });
};
