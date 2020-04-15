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

import css from './SellersPage.css';
import image from './sellers.jpg';

const SellersPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Seller's page"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'SellersPage',
        description: 'Sellers page',
        name: 'Sellers page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Ten reasons to list your classic</h1>
          <img className={css.coverImage} src={image} alt="London" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>
                Are you an owner interested in classic car hire? 
                Here are ten top reasons why listing your classic on 
                OldenCars is a really great idea.
              </p>
            </div>

            <div className={css.contentMain}>
              <h3>1. You’re in control</h3>
              <p>
                You know your car better than anyone else, so you set the price, its availability and any mileage restrictions. OldenCars pre-screens drivers, but you get to decide whether to accept or reject a booking request every single time.
              </p>

              <h3>2. Keep your car on the road</h3>
              <p>
                The number one problem classics owners face is driving their car enough to keep it in good working order. If it’s not run on a regular basis minor issues develop - failed seals, seized heater controls - which worsen if not addressed. By offering your car with us, you get it driven even when you don’t have the time. This is good for the car’s health and good for your wallet. It’s like livery for classics. 
              </p>
              
              <h3>3. Cover your costs</h3>
              <p>
                Do you know how much your car is costing you (road tax, insurance and maintenance) to run each year? We’ve done the sums on a few cars and the total comes to about 15% of the overall asset value. By listing your car for hire to careful drivers, you can earn this back so ownership ends up costing you nothing.
              </p>

              <h3>4. Enhance your enjoyment</h3>
              <p>
                By offering your car on OldenCars, not only will you avoid the maintenance issues that stem from lack of use, you’ll also be able to earn towards your car’s overall upkeep. This gives you the opportunity to enhance the car for your own enjoyment. Could it be time to purchase that original radio?
              </p>

              <h3>5. Manage your asset’s value</h3>
              <p>
                Cars are assets, whether they’re worth £50,000 or £2,000. By keeping your classic on the road and better maintained, you are proactively managing its re-sale value.
              </p>

              <h3>6. We’ve got you covered</h3>
              <p>
                Every car booked through OldenCars is covered by our specialist insurance policy provided by leading car insurer, Lancaster Insurance Services, leaving your own policy unaffected.
              </p>

              <h3>7. Qualified drivers only</h3>
              <p>
                Anyone looking to book a car on OldenCars must go through an extensive vetting process before they can get behind the wheel. Your car will be in good hands - OldenCars makes sure of it.
              </p>

              <h3>8. Why stop at one car</h3>
              <p>
                There’s no limit to the number of cars you can list on OldenCars, as long as they are roadworthy (MOT required), clean and tidy.
              </p>

              <h3>9. Meet people who love your car</h3>
              <p>
                Perhaps your spouse/partner/significant other/friends/family don’t share your love of your car? Through OldenCars you meet like-minded enthusiasts and possibly future friends who could happily while away hours talking about your car. Not an eye-roll in sight.
              </p>

              <h3>10. Keep classics alive</h3>
              <p>
                In a world where modern cars are becoming increasingly regulated, classics continue to provide a true motoring experience. Not every future enthusiast has the time/space/opportunity to own a classic, but together we can keep the magic alive.
              </p>

              <h3>
                <NamedLink name="SignupPage">Sign up and list your car now</NamedLink>
              </h3>
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

export default SellersPage;
