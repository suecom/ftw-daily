import React from 'react';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
} from '../../components';

import css from './HireOxfordPage.module.css';
import image from './location_oxford.jpg';

const HireOxford = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Hire in Oxford"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HireOxfordPage',
        description: 'Hire Oxford page',
        name: 'Hire Oxford page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Self Drive Classic Car Hire in Oxfordshire</h1>
          <img className={css.coverImage} src={image} alt="Oxford" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>
                Make your trip an unforgettable experience. 
                How about a Bentley or Morris Minor for the day? 
              </p>
            </div>

            <div className={css.contentMain}>
              <p>
                Classic car hire Oxfordshire. Are you planning a trip to Bicester, Oxford or perhaps one of the beautiful towns in neighbouring Gloucestershire like Morton-in-Marsh or Stow-on-the-Wold? What better way to immerse yourself in the stunning beauty of this countryside than in a retro car?
              </p>
              <p>
                You wouldn’t book a business hotel on the A40 for your holiday, so why drive the equivalent? Hire a classic instead and make the journey as much a part of the experience as the hotel, trips to museums and local attractions.
              </p>
              <p>
                At OldenCars we uniquely offer classics for self drive hire; we don’t do chauffeured drives. We understand the feeling you get when you’re behind the wheel and so do the owners who offer their cars for hire on our site. We offer unforgettable driving experiences.
              </p>
              <p>
                Leading classics insurer, Lancaster Insurance, offers insurance cover for each booking so you’re in excellent hands.
              </p>
              <p>
                Looking for classic car hire near you? OldenCars offers a growing range of classic cars for Oxfordshire self drive classic hire. Simply enter your location to browse the range of cars on offer.
              </p>
              <p>
                Looking for classic car hire near you? OldenCars 
                offers a growing range of classic cars for London self 
                the range of cars on offer.
              </p>

              <p>
              You can book your car per day, for a weekend or for a longer trip. So what are you waiting for? Visit{' '}
                <NamedLink
                  name="SearchPage"
                  to={{
                  search: 'address=London%2C%20United%20Kingdom&bounds=52.26292352%2C-0.69645525%2C51.22912077%2C-1.88453907',
                }}
                >
                Oxfordshire
                </NamedLink>
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

export default HireOxford;
