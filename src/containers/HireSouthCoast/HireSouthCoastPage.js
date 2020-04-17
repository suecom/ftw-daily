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

import css from './HireSouthCoastPage.css';
import image from './location_southcoast.jpg';

const HireSouthCoast = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Hire by South Coast"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HireSouthCoastPage',
        description: 'Hire South Coast page',
        name: 'Hire South Coast page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Self Drive Classic Car Hire South Coast</h1>
          <img className={css.coverImage} src={image} alt="SouthCoast" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>
                Turn heads in a memorable classic.
                Fancy driving a Mini or TR5 for the day? 
              </p>
            </div>

            <div className={css.contentMain}>
              <p>
                Classic car hire South Coast of England. What better way of exploring the fantastic South Coast than in a real head turner? Are you planning a staycation in Devon, Dorset, West Sussex or Hampshire? What better way to enhance the experience than driving a car with character?
              </p>
              <p>
                There’s nothing like getting behind the wheel of a classic - you get a sense of freedom and excitement that will never compare to driving a modern. Road trips and weekends away in the country and at the seaside in the car of your dreams - these are the experiences to cherish and share with others. 
              </p>
              <p>
                Unlike traditional classic car hire sites, OldenCars uniquely offers classics for self drive hire. We don’t do chauffeur drives - we’re all about practical classics you can drive yourself. The classics listed on OldenCars are owned by classics enthusiasts just like you who are happy for you to drive their cars.
              </p>
              <p>
                We provide insurance from leading classics insurer, Lancaster Insurance, for the duration of your trip so you’re in excellent hands every step of the way.
              </p>
              <p>
                Looking for classic car hire near you? OldenCars offers a growing range of classic cars for South Coast self drive classic hire. Simply enter your location to browse the range of cars on offer.
              </p>
              <p>
                Looking for classic car hire near you? OldenCars 
                offers a growing range of classic cars for London self 
                drive classic hire. Simply enter your location to browse 
                the range of cars on offer.
              </p>

              <p>
              You can book your car per day, for a weekend or for a longer trip. So what are you waiting for? Visit the{' '}
                <NamedLink
                  name="SearchPage"
                  to={{
                  search: 'address=London%2C%20United%20Kingdom&bounds=51.37914936%2C0.01807976%2C50.3390106%2C-1.17310024',
                }}
                >
                South Coast
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

export default HireSouthCoast;
