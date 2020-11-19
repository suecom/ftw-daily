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

import css from './HireScotlandPage.module.css';
import image from './location_scotland.jpg';

const HireScotland = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Hire in Scotland"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HireScotlandPage',
        description: 'Hire Scotland page',
        name: 'Hire Scotland page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Self Drive Classic Car Hire in Scotland</h1>
          <img className={css.coverImage} src={image} alt="Scotland" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>
                Arrive at your destination in style. 
                A Fiat 500 or Triumph Spitfire for the trip? 
              </p>
            </div>

            <div className={css.contentMain}>
              <p>
                Classic car hire Scotland. Perhaps you’re planning a trip to Edinburgh, Stirling, the Trossachs or a remote B&B? What better way to enhance the experience than driving a car with character? Scotland offers breathtaking views, romantic spires and deep cultural heritage - it’s hard to imagine a more elegant or memorable way of enhancing your trip than in a classic. 
              </p>
              <p>
                We believe passionately that the journey should be as much a part of the leisure experience as the destination. So unlike more traditional classic car hire sites, OldenCars uniquely offers classics for self drive hire. We’re not into cars that are only offered with chauffeurs. We’re focused on the practical classics that you can get behind the wheel and drive yourself. The classics listed on OldenCars are owned by classics enthusiasts just like you who are happy for you to drive their cars.
              </p>
              <p>
                And unlike other classic car hire sites we also provide insurance from leading classics insurer, Lancaster Insurance, so you’re in excellent hands every step of the way.
              </p>
              <p>
                Looking for classic car hire near you? OldenCars offers a growing range of classic cars for Scotland self drive classic hire. Simply enter your location to browse the range of cars on offer.
              </p>
              <p>
                You can book your car per day, for a weekend or for a longer trip. So what are you waiting for?
                Visit{' '}
                <NamedLink
                  name="SearchPage"
                  to={{
                  search: 'address=Scotland%2C%20United%20Kingdom&bounds=59.65582912%2C-0.76262815%2C52.99442956%2C-8.87726533'
                }}
                >
                Scotland
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

export default HireScotland;
