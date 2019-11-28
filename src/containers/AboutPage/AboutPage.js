import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './mini-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About OldenCars',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>What does OldenCars offer?</h1>
          <img className={css.coverImage} src={image} alt="A lovely Mini." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>
                OldenCars is the Airbnb of memorable motoring. We connect car enthusiasts, 
                offering owners a secure way to earn money from their car and a commitment-free 
                way for drivers to experience memorable drives.
              </p>
            </div>

            <div className={css.contentMain}>
              <p>
                For car owners we provide a secure way to earn money from their car and 
                meet fellow enthusiasts, keeping their cars on the road, not stuck in the 
                garage. We provide the platform, marketing, payment gateway and support between 
                Owners and Drivers, as well as bespoke insurance through our insurance partner.
              </p>

              <p>
                For people who want to enjoy a different driving experience, we provide easy 
                and secure access to a wide choice of interesting cars, with the convenience 
                of local locations and like-minded enthusiasts. 
              </p>
              
              <p>
                Whether you're looking for a fun weekend, a bit of nostalgia, or a chance to 
                experience something new, OldenCars connects owners with drivers.
              </p>

              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
