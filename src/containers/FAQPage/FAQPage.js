import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import css from './FAQPage.css';
import image from './faq.jpg';

const FAQPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="FAQ"
      schema={{
        '@context': 'http://schema.org',
        "@type": "FAQ-Page",
        "mainEntity": [{
          "@type": "Question",
          "name": "How Do I Know My Car Is Safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We first ensure the Driver is who they say they are and lives at the address on their driving licence. We operate a peer review system so both Owners and Drivers can review each other for the benefit of all. If you don't feel happy with the Driver's previous reviews (or they have none), then you can simply decline the booking request. You are always in control of who drives your car. You can directly ask questions of both the Driver and any previous Owners they've dealt with."
          }
        }, {
          "@type": "Question",
          "name": "Do I Need to Take Out Special Insurance Cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Every rental is covered by comprehensive insurance arranged by OldenCars' insurance partner. Drivers are covered by fully comprehensive insurance. The daily cost of this insurance will be around £30 - £60 per day, depending on the value of the car and your age."
          }
        }]
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Frequently Asked Questions</h1>
          <img className={css.coverImage} src={image} alt="A lovely Mini." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>
                We want to make sharing classics as easy and enjoyable as possible. These are some of
                the most common questions we get asked. If there's anything else you'd like to know
                don't hesitate to contact us - we want to ensure there are no surprises!
              </p>
            </div>

            <div className={css.contentMain}>
              <h1>How it works</h1>
              <div>
                <table cellSpacing="0">
                  <tbody>
                    <tr>
                      <td className={css.column}>
                        <b><font color="#ffffff">POST YOUR CLASSIC</font></b>
                      </td>
                      <td className={css.column}>
                        <b><font color="#ffffff">BOOK A CLASSIC</font></b>
                      </td>
                    </tr>
                    <tr valign="top">
                      <td>
                        <p>
                          <b>Post Your Car</b>
                        </p>
                        <p>
                          It’s quick and easy to create a free posting. Describe your classic, 
                          upload a selection of photos and indicate when it’s available to book.
                        </p>
                      </td>
                      <td>
                        <p>
                          <b>Become an Approved Driver</b>
                        </p>
                        <p>
                          Sign up for OldenCars, browse the available classics in your area, and 
                          ask Owners questions.
                        </p>
                      </td>
                    </tr>
                    <tr valign="top">
                      <td>
                        <p>
                          <b>Respond to Booking Requests</b>
                        </p>
                        <p>
                          We’ll notify you when someone submits a booking request for your car. 
                          Accept or reject each request as soon as possible.
                        </p>
                      </td>
                      <td>
                        <p>
                          <b>Book Your Classic</b>
                        </p>
                        <p>
                          Make a request to book. We'll ask for some details to confirm your identity 
                          and driving record. You also need to buy insurance through our partner.
                        </p>
                      </td>
                    </tr>
                    <tr valign="top">
                      <td>
                        <p>
                          <b>Meet the Enthusiast</b>
                        </p>
                        <p>
                          Arrange a convenient time and place to meet the driver. Check their 
                          licence and booking details. Tell them anything they need to know about 
                          driving the car.
                        </p>
                      </td>
                      <td>
                        <p>
                          <b>Pick Up the Classic</b>
                        </p>
                        <p>
                          Meet the Owner and collect the classic. Say hello and ask questions 
                          about the classic. Walk around the car to confirm its condition, fuel 
                          and mileage. Collect the keys and you’re on your way.
                        </p>
                      </td>
                    </tr>
                    <tr valign="top">
                      <td>
                        <p>
                          <b>Earn</b>
                        </p>
                        <p>
                          Earn money from your classic with absolute peace of mind that it’s 
                          fully insured. Be happy it’s getting used on the road, not gathering dust 
                          in a garage.
                        </p>
                      </td>
                      <td>
                        <p>
                          <b>Drive</b>
                        </p>
                        <p>
                          Head out on your trip and congratulate yourself on your fantastic 
                          decision to pick such an interesting car.
                        </p>
                      </td>
                    </tr>
                    <tr valign="top">
                      <td>
                        <p>
                          <b>Collect Your Car</b>
                        </p>
                        <p>
                          Collect your car at the agreed place and time, check its condition and 
                          fuel and learn how much the enthusiast loved your car. Submit a review to 
                          OldenCars so others can learn about the experience.
                        </p>
                      </td>
                      <td>
                        <p>
                          <b>Hand Back the Car</b>
                        </p>
                        <p>
                          Replace the used fuel, meet the Owner and 
                          hand back the keys. Submit a review to OldenCars so others can learn 
                          about the experience.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h1>FAQ - Owners</h1>
              <Accordion atomic={false}>
                <AccordionItem title="How Do I Know My Car Is Safe?">
                  <p>
                    We first ensure the Driver is who they say they are and lives 
                    at the address on their driving licence. We operate a peer review system so both 
                    Owners and Drivers can review each other for the benefit of all. If you don't 
                    feel happy with the Driver's previous reviews (or they have none), then you can 
                    simply decline the booking request. You are always in control of who drives your 
                    car. You can directly ask questions of both the Driver and any previous 
                    Owners they've dealt with.
                  </p>
                </AccordionItem>
                <AccordionItem title="How do I know who I'm lending to?">
                  <p>
                    We operate a peer review system so both Owners and Drivers can review each 
                    other for the benefit of all. If you don't feel happy with the Driver's previous 
                    reviews (or they have none), then you can simply decline the booking request. 
                    You are always in control of who drives your car. You can directly ask 
                    questions of both the Driver and any previous Owners they've dealt with.
                  </p>
                </AccordionItem>
                <AccordionItem title="Am I Eligible to Join OldenCars?">
                  <p>
                    Car owners must be 17 or older to apply. There are also some eligibility 
                    requirements for your vehicle.
                  </p>
                </AccordionItem>
                <AccordionItem title="What Classic Cars Are Eligible?">
                  <p>
                    OldenCars focuses on fully roadworthy ‘everyday’ practical classics, the 
                    type that can and should be driven like modern cars, not the super-expensive, 
                    high-end rarities. Specific criteria:
                  </p>
                  <ul className={css.ulist}>
                    <li className={css.list}>Built after 1950</li>
                    <li className={css.list}>Replacement value not to exceed £75,000</li>
                    <li className={css.list}>Expiry date of vehicle tax and MOT (if applicable) must be more than 30 days away</li>
                    <li className={css.list}>Car currently comprehensively insured in the UK (we will not use this insurance for hire)</li>
                  </ul>
                  <p>
                    You are responsible for making sure that your car is roadworthy, clean and 
                    that any personal items and valuables have been removed before each rental.
                  </p>
                </AccordionItem>
                <AccordionItem title="How Do I Join OldenCars?">
                  <p>
                    It is straightforward to sign up as a car Owner. Simply go to www.oldencars.com 
                    and register your details. As soon as you've confirmed your registration you can 
                    start creating listings for your car(s). 
                    <br/><br/>
                    When you receive your first rental request, you'll need to enter your banking 
                    details to receive funds from us. Our payment provider will deal with (and store) 
                    the details, but it's very simple.
                  </p>
                </AccordionItem>
                <AccordionItem title="How Much Does It Cost to Join OldenCars?">
                  <p>
                    There is no annual membership fee to join OldenCars.
                  </p>
                </AccordionItem>
                <AccordionItem title="How Long Can I Remain a Member of OldenCars?">
                  <p>
                    Once registered, you can remain a member of OldenCars for as long as you wish.
                    <br/><br/>
                    We reserve the right to suspend or cancel membership in case of misconduct or 
                    inappropriate behaviour. We’ll also have to end your membership if you cease to 
                    meet our eligibility criteria. You are free to delete your account at any time.
                  </p>
                </AccordionItem>
                <AccordionItem title="Is There a Minimum Booking Commitment?">
                  <p>
                    There is no minimum booking commitment. You stay in complete control of 
                    when your car is available, how much you charge and who drives it.
                  </p>
                </AccordionItem>
                <AccordionItem title="Can I Post More Than One Car on OldenCars?">
                  <p>
                    Yes, although all cars need to meet our acceptance criteria.
                  </p>
                </AccordionItem>
                <AccordionItem title="Who Sets the Pricing for My Car?">
                  <p>
                    You do. We can provide guidance on recommended pricing, but ultimately 
                    the pricing is up to you. We anticipate rental prices ranging between 
                    £50 - £250 per day, depending on the car.
                  </p>
                </AccordionItem>
                <AccordionItem title="Who Will Drive my Car?">
                  <p>
                    OldenCars Drivers are not strangers. All Drivers’ identities are verified 
                    and we only accept Drivers who meet the driving record and claim history 
                    stipulated by our insurers.
                    <br/><br/>
                    Despite these checks we believe it is critical for you to retain full 
                    control over who drives your car. You have the option to accept or reject 
                    individual booking requests as you wish.
                  </p>
                </AccordionItem>
                <AccordionItem title="Can I Cancel Booking Requests?">
                  <p>
                    Yes, but if you cancel a confirmed booking you may have to pay a cancellation 
                    fee unless you can agree a solution or compromise with the driver hiring the car.
                  </p>
                </AccordionItem>
                <AccordionItem title="What Insurance Cover Does OldenCars Provide?">
                  <p>
                    OldenCars’ insurance partner provides fully comprehensive insurance for 
                    Owners and Drivers whenever your car is booked through our platform. This 
                    insurance cover works in parallel with your existing car insurance, replacing 
                    your own car insurance for the period of the booking. Drivers need to buy this 
                    insurance from our insurance partner and show the Owner proof of having done so 
                    before they collect the car.
                  </p>
                </AccordionItem>
                <AccordionItem title="What Happens if My Car Gets Damaged During a Booking?">
                  <p>
                    Any claims during the booking are made against the policy arranged through 
                    OldenCars’ insurance partner, so your policy remains unaffected. It is the 
                    responsibility of Drivers to call OldenCars’ insurance provider if they have 
                    an accident. However, if you notice any damage that you believe has occurred 
                    during a booking let us know.
                  </p>
                </AccordionItem>
                <AccordionItem title="What Is the Payment Flow?">
                  <p>
                    OldenCars handles all booking payments through our secure online booking 
                    facility. We only get paid when you successfully hire out your vehicle – i.e. 
                    when you earn money. We charge a 20% commission from Owners. This covers our 
                    staff, online booking systems, administrative support and marketing costs. In 
                    cases where the value of the rental is low, we have a minimum fee per day, to 
                    recoup our administration costs.
                    <br/><br/>
                    Here is a sample transaction for a car owner asking £100 per day for their car:
                    <br/><br/>
                    Upon the Owner accepting the booking request, the Driver pays OldenCars 
                    £100 + insurance cost + service fee + deposit (this is in place to protect 
                    owners from any potential disputes over fuel, cleanliness, delay or minor 
                    damage and depends on the value of the car).
                    <br/><br/>
                    At the end of the booking, OldenCars refunds the Driver the deposit (assuming 
                    there are no charges to be made) and pays the owner £80 (£100 less the 20% commission).
                  </p>
                </AccordionItem>
                <AccordionItem title="How Is My Car Promoted to Drivers?">
                  <p>
                    We promote OldenCars widely within the classic car community and wider 
                    automotive market so you’ll benefit directly from our marketing.
                    <br/><br/>
                    What you write about your car can make a big difference to its popularity. 
                    We recommend you make sure your car profile information is up-to-date and 
                    completed in full. Use your profile description to highlight the condition 
                    of the car, any unique features or “wow” factors. You could mention the date 
                    of the car’s last service, or new tyres you’ve fitted, to show drivers how 
                    well you’ve maintained it. Be honest and make sure the information you provide 
                    is accurate. You may want to mention any minor bodywork scratches to make the 
                    walk-around inspection easier and quicker.
                    <br/><br/>
                    Take a range of good photos to show your car in its true light – both , 
                    external shots - front, side, rear - and interior - to show size of boot, 
                    back seat space and the cockpit.
                  </p>
                </AccordionItem>
                <AccordionItem title="Is There a Member Review System?">
                  <p>
                    Yes, OldenCars follows the well-established model of ‘member rating member’. 
                    This allows other members to make better-informed decisions about who to rent to.
                  </p>
                </AccordionItem>
                <AccordionItem title="What Happens if My Car Is Returned in a Dirty Condition?">
                  <p>
                    We encourage all members to treat the cars as if they were their own. 
                    If a Driver fails to do so, we need to know. We protect Owners by imposing 
                    fines on messy and inconsiderate renters. This money can be used to get your 
                    car professionally cleaned.
                  </p>
                </AccordionItem>
              </Accordion>

              <h1>FAQ - Drivers</h1>
              <Accordion atomic={false}>
                <AccordionItem title="Am I Eligible to Join OldenCars?">
                  <p>
                    To rent a car through OldenCars you must fulfil the following criteria:
                  </p>
                  <ul className={css.ulist}>
                    <li className={css.list}>Be at least 30 years old.</li>
                    <li className={css.list}>Be a UK resident and have held a full valid driving licence for a minimum of 12 months.</li>
                    <li className={css.list}>Have no more than 6 points on your licence, with no more than two fault claims in the last 3 years and no non-motoring criminal convictions.</li>
                  </ul>
                </AccordionItem>
                <AccordionItem title="How do I Join OldenCars?">
                  <p>
                    The first time you make a booking with OldenCars we ask for details to 
                    confirm your identity and to check your licence’s validity and status with 
                    DVLA. Subject to address verification requirements, we may also ask you to 
                    submit a copy of a recent utility bill or passport.
                  </p>
                </AccordionItem>
                <AccordionItem title="How Much Does It Cost to Join OldenCars?">
                  <p>
                    There is no annual membership fee to join OldenCars.
                  </p>
                </AccordionItem>
                <AccordionItem title="Do I Need to Take Out Special Insurance Cover?">
                  <p>
                    No. Every rental is covered by comprehensive insurance arranged by OldenCars' 
                    insurance partner. Drivers are covered by fully comprehensive insurance. 
                    The daily cost of this insurance will be around £30 - £60 per day, 
                    depending on the value of the car and your age.
                  </p>
                </AccordionItem>
                <AccordionItem title="How Do I Book a Car?">
                  <p>
                    You search for cars by location on the OldenCars website and make a booking 
                    request for your desired vehicle. The Owner will need to accept your booking 
                    before it can be confirmed. 
                    <br/><br/>
                    If the Owner doesn’t respond within a reasonable time you are free to search 
                    and book for an alternative car. You will not be charged unless the Owner 
                    accepts your booking request. If the Owner accepts your request you will be 
                    charged the full cost of the rental. These funds will be held by our payment 
                    provider until you have successfully completed your trip (when the Owner will 
                    be paid). Once your booking has been accepted and confirmed, you will be sent 
                    all the other details you’ll need to collect the car from the Owner.
                  </p>
                </AccordionItem>
                <AccordionItem title="Can I Add an Additional Driver to the Booking?">
                  <p>
                    Yes, but all additional Drivers must be registered as renters of OldenCars 
                    and added to the booking prior to the trip in order to be insured to drive. 
                    The Owner must also agree to each Driver.
                  </p>
                </AccordionItem>
                <AccordionItem title="Can I Extend a Booking?">
                  <p>
                    Yes, if the owner agrees, but additional charges will be payable. It is 
                    imperative you inform OldenCars' insurance partner so they can extend the 
                    insurance for you.
                  </p>
                </AccordionItem>
                <AccordionItem title="Can I Cancel a Booking?">
                  <p>
                    Yes, you can cancel a booking but there may be cancellation fees to pay. 
                    See our Terms of Service for details.
                  </p>
                </AccordionItem>
                <AccordionItem title="What Happens if the Owner Cancels?">
                  <p>
                    Although we strongly discourage Owners from cancelling, as all vehicles 
                    are ultimately the private property of the Owners, we can't stop them if 
                    they really want to. If you have a booking which is cancelled by the Owner, 
                    we will refund you. You can then search again and rebook an alternative vehicle.
                  </p>
                </AccordionItem>
                <AccordionItem title="What Happens if the Car Is Damaged or Dirty When I Pick It Up?">
                  <p>
                    You are responsible for any damage that occurs during the rental, so you should 
                    inspect the car thoroughly before each rental, and take photos of the car’s 
                    condition and any existing damage including scuffs, marks and scratches. The 
                    Owner is obliged to provide a Condition Report – you should review this and point 
                    out any omissions.
                    <br/><br/>
                    The car Owner is responsible for making sure that your car is roadworthy, 
                    full of fuel, clean and that any personal items and valuables have been 
                    removed before each rental. Do not accept a car that is dangerous or very 
                    dirty/not as described. Inform OldenCars.
                  </p>
                </AccordionItem>
                <AccordionItem title="What Happens if I Damage the Car I Am Using, or if I Am Involved in an Accident?">
                  <p>
                    If you are involved in an accident, we ask that you telephone our 
                    insurance company as soon as possible.
                    <br/><br/>
                    If you break down, please notify the Owner and call the insurance company, 
                    quoting the car registration number. Please note that if any new parts or 
                    costs are required you should contact the owner for approval first.
                  </p>
                </AccordionItem>
                <AccordionItem title="What is the payment flow?">
                  <p>
                    OldenCars handles all booking payments through our secure online booking facility.
                    <br/><br/>
                    Here is a sample transaction for a car that costs £100 per day to rent:
                    <br/><br/>
                    Upon the Owner accepting your booking request, you pay OldenCars £100 + insurance 
                    cost + service fee + deposit (to cover any potential disputes over fuel, 
                    cleanliness, delay or minor damage and depends on the value of the car).
                    <br/><br/>
                    At the end of the rental, OldenCars refunds you the deposit (assuming 
                    there are no charges to be made) and pays the Owner their fee.
                  </p>
                </AccordionItem>
                <AccordionItem title="Is There a Member Review System?">
                  <p>
                    Yes, OldenCars follows the well-established model of ‘member rating member’. 
                    This allows other members to make better-informed decisions about which cars to hire.
                  </p>
                </AccordionItem>
              </Accordion>  
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

export default FAQPage;
