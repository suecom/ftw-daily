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
                OldenCars is the Airbnb of fun motoring. We connect car enthusiasts, 
                offering owners a secure way to earn money from their car, and drivers a commitment-free 
                way to experience classic motoring
              </p>
            </div>

            <div className={css.contentMain}>
              <p>
                For owners we provide a secure way to earn from your car and 
                meet fellow enthusiasts. Keeping your car on the road, and not stuck in the 
                garage is a win-win for everybody. We provide the platform, security, marketing, payment gateway and 
                support between Owner and Driver, as well as insurance through Lancaster - the leading classic insurer.
              </p>

              <p>
                For drivers who want to enjoy a different experience, we provide easy 
                and secure access to a wide choice of fun cars, with the convenience 
                of local locations and like-minded enthusiasts. 
              </p>
              
              <p>
                Whether you're looking for a fun weekend, a bit of nostalgia, or a chance to 
                experience something new, OldenCars connects owners and drivers.
              </p>

              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink> 
                {' '}pages.
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
