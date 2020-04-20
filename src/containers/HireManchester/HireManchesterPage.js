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

import css from './HireManchesterPage.css';
import image from './location_manchester.jpg';

const HireManchester = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Hire in Manchester"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HireManchesterPage',
        description: 'Hire Manchester page',
        name: 'Hire Manchester page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Self drive classic car hire in Manchester</h1>
          <img className={css.coverImage} src={image} alt="Manchester" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>
                Drive the car you wish you’d never sold. 
              </p>
            </div>

            <div className={css.contentMain}>
              <p>
                Classic car hire Manchester. Chocolate is overrated. Surprise someone with something different. A drive in a classic makes your trip to Manchester a special occasion that will leave you with memories to cherish. Imagine exploring this area so rich in art, culture and history in a car that matches the occasion.
              </p>
              <p>
                Modern car rental is so boring - you aren’t even guaranteed to get the Toyota Yaris you requested. But with OldenCars you get the exact car you booked. So what would you choose? A Morris Minor? Fiat 500? Triumph Spitfire? Bentley? Let your imagination go wild at the options. You could even drive the car you wish you’d never sold. 
              </p>
              <p>
                We believe passionately that the journey should be as much a part of the leisure experience as the destination. So unlike more traditional classic car hire sites, OldenCars uniquely offers classics for self drive hire -  the practical classics that should be driven. The classics listed on OldenCars are owned by classics enthusiasts just like you who are happy for you to drive their cars.
              </p>
              <p>
                You’re well covered, too: we provide insurance from leading classics insurer, Lancaster Insurance, so you’re in excellent hands every step of the way.
              </p>
              <p>
                Looking for classic car hire near you? OldenCars offers a growing range of classic cars for Manchester self drive classic hire. Simply enter your location to browse the range of cars on offer.
              </p>
              <p>
                You can book your car per day, for a weekend or for a longer trip. So what are you waiting for? Visit{' '}
                <NamedLink
                  name="SearchPage"
                  to={{
                  search: 'address=Manchester%2C%20United%20Kingdom&bounds=53.534648%2C-2.140863%2C53.380515%2C-2.360589',
                }}
                >
                Manchester
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

export default HireManchester;
