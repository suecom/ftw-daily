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

import css from './HireLondonPage.css';
import image from './location_london.jpg';
import pdf from './pitch32.pdf';

const HireLondon = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Hire in London"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HireLondonPage',
        description: 'Hire London page',
        name: 'Hire London page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Hire a classic in London</h1>
          <img className={css.coverImage} src={image} alt="London" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>
                Treat yourself to an unforgettable experience. 
              </p>
              <p>
                A Morris Minor, Cortina or Mustang for the day?
              </p>
            </div>

            <div className={css.contentMain}>
              <p>
                Classic car hire London. Are you tired of boring modern 
                cars? With existing hire companies your choice is dictated 
                by fleet economics. You get the same car whether you’re going 
                to a meeting, or going on an adventure. Would you choose a 
                business hotel off the North Circular in which to spend your 
                holiday? Of course not, so why drive the equivalent?
              </p>

              <p>
                OldenCars offers London self drive classic car hire, 
                giving you the chance to drive interesting cars without 
                needing to own them. And when booking through OldenCars 
                remember that you’re not driving a car owned by some 
                mega-corp. The classics listed on OldenCars are owned by 
                classics enthusiasts just like you who are happy for you to 
                drive their cars. 
              </p>
              
              <p>
                Unlike more traditional classic car hire sites, we 
                uniquely offer classics for self drive hire. We’re not 
                into cars that are only offered with chauffeurs. We’re 
                focused on the practical classics that you can get behind 
                the wheel and drive yourself.
              </p>

              <p>
                And unlike other classic car hire sites we also provide 
                insurance from leading classics insurer, Lancaster Insurance, 
                so you’re in excellent hands every step of the way.
              </p>

              <p>
                We believe the journey should be as much a part of the 
                leisure experience as the destination. With OldenCars’ 
                self drive classic car hire you can treat yourself or a 
                loved one with a unique experience. Perhaps you want to 
                take your Dad out in the car he used to drive to work, 
                or whisk your wife away in the car you drove when you 
                were first courting? Whatever the journey we help you 
                arrive in style and turn heads.
              </p>

              <p>
                Looking for classic car hire near you? OldenCars 
                offers a growing range of classic cars for London self 
                drive classic hire. Simply enter your location to browse 
                the range of cars on offer.
              </p>

              <p>
                You can book your car per day, for a weekend or for 
                a longer trip. So what are you waiting for? 
                Visit{' '}
                <NamedLink
                  name="SearchPage"
                  to={{
                  search: 'address=London%2C%20United%20Kingdom&bounds=51.609847%2C0.022835%2C51.419624%2C-0.27496',
                }}
                >
                London
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

export default HireLondon;
