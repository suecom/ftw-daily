import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TermsOfService.module.css';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: March 1st, 2020</p>

      <p>
        PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES AND OBLIGATIONS.
      </p>

      <p>
        IN PARTICULAR NOTE THE OBLIGATION FOR CAR OWNERS TO MAKE THEIR CAR AVAILABLE IN SUITABLE CONDITION AND WITH FUEL IN IT, AND FOR CAR DRIVERS TO RETURN THE CAR ON TIME AND NOTIFY THE OWNER IF THAT IS NOT POSSIBLE.
      </p>

      <p>
        <b>ALSO THAT ALL BOOKINGS MUST BE MADE VIA THE OLDENCARS PLATFORM. WE RESERVE THE RIGHT TO TERMINATE MEMBERSHIP OF DRIVERS OR OWNERS WHO AGREE TO PRIVATE BOOKINGS OUTSIDE OF THE OLDENCARS PLATFORM.</b>
      </p>

      <p>
        This website is owned and provided by OldenCars Ltd, a company registered in England and Wales with company number 11615865 whose registered address is at 39 Oxford Street, Newbury, Berkshire, RG14 1JG (“OldenCars” or “we”).
      </p>

      <h2>TERMS AND CONDITIONS</h2>
      <ol>
        <li>By registering as an Owner and/or Driver (also referred to as ‘Member’) you are entering into a contract with OldenCars Ltd, and agreeing to abide by these terms and conditions (the “Terms”).</li>
        <li>OldenCars makes available an online platform or marketplace for Drivers and Owners to meet online and arrange for bookings of Cars directly with each other.</li>
        <li>OldenCars reserves the right to modify these Terms from time to time at its sole discretion. Any amendments that affect the terms and conditions applicable to Bookings shall only apply to Bookings entered into after the amended terms and conditions come into force.</li>
        <li>Any Member who does not accept any amended terms and conditions should cease to use the Site after the date on which the amended terms and conditions come into force, save to the extent necessary to complete any Booking entered into prior to that date.</li>
      </ol>

      <h2>How the Site and Services works</h2>
      <p>
        The Site and Services can be used to facilitate the listing and booking of cars. Such cars are included in listings on the site by Owners. You may view listings as an unregistered visitor to the Site and Services; however, if you wish to book a Car or create a listing, you must first register as an OldenCars Member.
      </p>
      <p>
        As stated above, OldenCars makes available an online platform or marketplace for Drivers and Owners to meet online and arrange for bookings of Cars directly with each other. OldenCars is not an owner or operator of Cars and OldenCars does not own, sell, hire, manage and/or control Cars or other types of vehicles or offer transport or travel services. Unless explicitly specified otherwise in the OldenCars platform, OldenCar’s responsibilities are limited to: (i) facilitating the availability of the Site and Services: (ii) serving as the limited payment collection agent of each Owner for the purpose of accepting payments from Drivers on behalf of the Owner and (iii) providing a passive introduction to Lancaster Insurance Services who will provide insurance cover for cars when being hired out via the platform.
      </p>
      <p>
        PLEASE NOTE THAT THE SITE AND SERVICES ARE INTENDED TO BE USED TO FACILITATE OWNERS AND DRIVERS CONNECTING AND BOOKING CARS DIRECTLY WITH EACH OTHER. OLDENCARS CANNOT AND DOES NOT CONTROL THE CONTENT CONTAINED IN ANY LISTINGS AND THE CONDITION, LEGALITY OR SUITABILITY FOR USE OF ANY CAR. OLDENCARS IS NOT RESPONSIBLE FOR AND DISCLAIMS ANY AND ALL LIABILITY RELATED TO ANY AND ALL LISTINGS AND CARS. ACCORDINGLY, ANY BOOKINGS WILL BE MADE OR ACCEPTED AT THE MEMBER'S OWN RISK.
      </p>

      <h2>Key Terms</h2>
      <ol type="a">
        <li>
          <ol>
            <li>
              “Acceptable Car Use” means the following activities are not carried out; Carriage of passengers for hire and reward; or Carriage of goods for hire and reward or use in any competition or motor trial or on any race track;
            </li>
            <li>
              "Booking" means a discrete hire agreement in relation to a Car that is made between a Driver and the relevant Owner in accordance with the terms and conditions of these terms and conditions. The Booking details shall specify the relevant Hire Period and the applicable Hire Fee;
            </li>
            <li>
              "Car Exclusion Circumstances" means, in relation to a Booking, circumstances giving the Driver reasonable justification to believe that: (a) the Car does not meet roadworthy conditions; (b) the Owner is unwilling to record, in the OldenCars Agreement, damage identified by the Driver; or (c) the Car's fuel tank is empty or contains negligible fuel;
            </li>
            <li>
              "Driver" means any Member who has successfully completed a Driver Registration on the Site;
            </li>
            <li>
              "Commission" means the sum taken by OldenCars to facilitate the Booking.
            </li>
            <li>
              "Driver Exclusion Circumstances" means, in relation to a Booking, circumstances giving the Owner reasonable justification to believe that the Driver: (a) is unfit to drive; (b) is an Excluded Person; (c) does not have his/her driving licence with him/her or has not purchased insurance from Lancaster Insurance Services; (d) intends to use the Car other than in accordance with these terms and conditions;
            </li>
            <li>
              "Booking Fee" means a booking handling fee in relation to each Booking;
            </li>
            <li>
              "Hire Fee" means, in relation to a Booking, the hire fee payable by the relevant Driver to the relevant Owner;
            </li>
            <li>
              "Hire Period" means, in relation to a Booking, the period of hire (and any extension thereto) agreed between the relevant Owner and the relevant Driver, including time spent inspecting the Car;
            </li>
            <li>
              "Insurance Fee" means, in relation to a Booking, the sum payable by the relevant Driver for the Insurance Policy;
            </li>
            <li>
              "Insurance Policy" means the motor insurance policy provided by Lancaster Insurance Services;
            </li>
            <li>
              "Member" means any person registered on the Site and who has completed all of the mandatory fields in the Site registration;
            </li>
            <li>
              “Roadworthy" has the meaning given to it in the clause below;
            </li>
            <li>
              “Services” means the listing and booking services provided by OldenCars through the Site;
            </li>
            <li>
              "Owner" means any Member who has completed all of the mandatory fields in the Owner's Registration Form on the Site;
            </li>
            <li>
              "Site" means the website at www.oldencars.com as amended and updated from time to time and / or mobile applications;  
            </li>
          </ol>
        </li>
        <li>
          Where we use the expression "including" this is to be construed as being immediately followed by the expression "without limitation”.Where we use the expression "including" this is to be construed as being immediately followed by the expression "without limitation”.
        </li>
      </ol>

      <h2>REGISTRATION - ALL MEMBERS</h2>
      <ol>
        <li>
          It is a condition of registration as a Member that details are provided of a bank account and a credit or debit card capable of making and accepting electronic payments. OldenCars reserves the right to suspend the account of any Owner / Driver if any transaction effected by OldenCars in relation to a Members' registered credit or debit card is declined.
        </li>
        <li>
          Each Owner and Driver agrees to pay each of the amounts specified in the Cancellation and Compensation Policy (the contents of which are incorporated into these terms and conditions by reference) in the event that the corresponding circumstances set out therein apply.
        </li>
      </ol>

      <h2>OWNER REGISTRATION</h2>
      <ol>
        <li>
          Any Member may register as an Owner. Once registered, an Owner may, using the car registration tools made available on the Site, register one or more suitable cars as being a Car available for hire by Drivers. The Owner shall, for each Car that is registered, specify the daily Hire Fee payable in respect of Bookings for that Car.
        </li>
        <li>
          In relation to each car that is registered as a Car by an Owner, the Owner represents that the Car is owned by the Member who has completed registration as an Owner; and The use of the Car by Drivers will not breach any agreement with third parties; and during each Booking, will comply with the Minimum Specification.
        </li>
        <li>
          OldenCars may, during the registration process, conduct searches of third party vehicle and credit databases in order to corroborate information submitted by Owners. OldenCars reserves the right to reject any attempt to register a car. The Owner undertakes immediately to de-register any car that ceases to comply with OldenCars’ ‘Condition of Cars’ as set out below. 
        </li>
        <li>
          The Owner undertakes to notify OldenCars, and any Driver who has made a Booking in respect of any car that has been de-registered, that the car is no longer available to fulfil Bookings. Any Booking made in respect of any car that has not been successfully registered, or has been de-registered, shall be deemed to have been cancelled by the Owner.
        </li>
        <li>
          If the Owner smokes in their car, it is their responsibility to include this information in the listing.
        </li>
      </ol>

      <h2>DRIVER REGISTRATION</h2>
      <ol>
        <li>
          Only registered Drivers may make a Booking and only the Driver making the Booking may drive the relevant Car.
        </li>
        <li>
          The Driver warrants to OldenCars, and to each Owner to whom a Booking request is made, that they are not at the date of such request, and will not be at any time during the Hire Period, an Excluded Person. 
        </li>
        <li>
          OldenCars reserves the right to reject any attempt by any person to register as a Driver, and/or to de-register any person who has previously been successfully registered as a Driver, in the event that OldenCars has reason to believe that such person is or may be an Excluded Person. Any Driver who becomes an Excluded Person undertakes immediately to de-register themselves as a Driver.
        </li>
        <li>
          Any person who has been de-registered as a Driver undertakes to notify OldenCars, and any Owner who has accepted a Booking from them, that they are no longer available to fulfil Bookings. Any Booking made in respect of any person who has not been successfully registered as a Driver, or has been de-registered, shall be deemed to have been cancelled by the Driver.
        </li>
      </ol>

      <h2>CONDITION OF CARS</h2>
      <p>
        It is the responsibility of an Owner to ensure that, when they hand over their Car to a Driver, that it is safe to drive. This means, as a minimum that it is roadworthy, is clean and tidy inside and out and that the car possesses an MOT even if it is more than 40 years old
      </p>

      <h2>NO ENDORSEMENT</h2>
      <p>
        OldenCars does not endorse any Member or any Car. By using the Site or Services, you agree that any legal remedy or liability that you seek to obtain for actions or omissions of other Members or other third parties will be limited to a claim against the particular Members or other third parties who caused you harm, and not to claim against OldenCars. We encourage you to communicate directly with other Members on the Site regarding any Bookings made by you.  
      </p>

      <h2>MAKING AND CANCELLING A BOOKING</h2>
      <ol>
        <li>
          All Bookings shall be made using the car booking tools made available on the Site. Requests for Bookings may be submitted by Drivers for Hire Periods commencing up to 90 days from the date of the request. Drivers may cancel any request for a Booking at any time before that request has been accepted.
        </li>
        <li>
          No Owner is obliged to accept any request for a Booking submitted by a Driver. In the event that a request for a Booking is accepted by an Owner, a legally binding contract for the Booking, incorporating these terms and conditions, shall come into force.
        </li>
        <li>
          The Hire Period may be extended by mutual agreement between the Driver and the Owner and OldenCars.  
        </li>
        <li>
          If, in relation to any Booking, any Driver Exclusion Circumstances arise then the Booking shall be deemed cancelled and the Owner shall not permit the Driver to take control of the Car. The Owner shall not incur any penalties in relation to any such deemed cancellation and OldenCars shall not be required to refund the Hire Fee.
        </li>
        <li>
          If, in relation to any Booking, any Car Exclusion Circumstances arise then the Booking shall be deemed cancelled and the Driver shall not take control of the Car. In the event of any such deemed cancellation the Hire Fee shall be refunded and the Owner may be subject to a Cancellation Fee.
        </li>
        <li>
          Apart from the deemed cancellations referred to above, Bookings may only be cancelled using the car booking cancellation tools made available on the Site. Such cancellations shall have the consequences set out in the Cancellation and Compensation Policy. 
        </li>
      </ol>

      <h2>COLLECTING, USING AND RETURNING THE CAR</h2>
      <p>
        ONLY THE DRIVER WHO IS NAMED ON THE LANCASTER INSURANCE SERVICES AGREEMENT CAN DRIVE THE CAR. IF, DURING THE HIRE PERIOD, ANOTHER PERSON(S) DRIVE THE CAR THE INSURANCE POLICY WILL BE VOID. THE NAMED DRIVER ON THE AGREEMENT WILL BECOME PERSONALLY LIABLE FOR, BUT NOT LIMITED TOO, ANY DAMAGE OR NON RETURN OF THE CAR, ANY THIRD PARTY DAMAGE TO VEHICLES OR PROPERTY AND ANY INJURIES. 
      </p>
      <ol>
        <li>
          The Driver and Owner shall meet at the time and place agreed at the time of making the Booking and the Driver shall confirm the Booking reference and make their driving licence and proof of insurance purchased from Lancaster Insurance Services available for inspection by the Owner.
        </li>
        <li>
          The Driver shall be responsible for ensuring that: (a) any previously unrecorded damage is identified and recorded to OldenCars; and (b) no Driver Exclusion Circumstances exist.
        </li>
        <li>
          The Driver shall be responsible for inspecting the Car to ensure that no Car Exclusion Circumstances exist.The Driver shall be responsible for inspecting the Car to ensure that no Car Exclusion Circumstances exist.
        </li>
        <li>
          Personal property of the Owner left in the Car at the commencement of the Hire Period is left solely at the Owner's risk.
        </li>
        <li>
          The Driver shall, at all times during the Hire Period, use the Car in accordance with the Acceptable Car Use Policy. 
        </li>
        <li>
          The Driver shall return the Car at the scheduled end of the Hire Period to the location agreed at the time of the Booking. The Owner shall not be obliged to accept the return of the Car before the scheduled end of the Hire Period and no part of the Hire Fee shall be refunded in the event that the Owner agrees to accept the early return of the Car. The Driver shall remain responsible for the Car until it has been returned to the possession of the Owner.
        </li>
        <li>
          Promptly following the return of the Car, the Driver shall record the Car's fuel level and inspect it for any new damage, taking pictures. Drivers are responsible for refuelling any fuel used during the hire, using the appropriate fuel (i.e. regular, premium or diesel.) If the car is returned with less fuel that stated in the agreement, a Refuelling Charge may apply, this charge being the cost of refuelling the Car back to its previous level, plus an Owner Administration Charge.
        </li>
        <li>
          Personal property of the Driver left in the Car at the end of the Hire Period is left solely at the Driver's risk.
        </li>
        <li>
          If a Driver fails to return a Car by the end of the Hire Period the Driver will be liable in accordance with the Cancellation and Compensation Policy.
        </li>
        <li>
          The Driver shall be exclusively responsible for the Car, and all financial and other consequences of their use of it (including road tolls, congestion charges, traffic offence penalties, parking offence penalties, clamping fees, breakdown charges and recovery fees and all sums payable under the Cancellation and Compensation Policy), from the commencement of the Hire Period until the later of the end of: (a) the Hire Period; and (b) the time the Driver returns the Car to the Owner.  
        </li>
        <li>
          In the event that an Owner receives a notice of a speeding offence committed during the Hire Period they shall be obliged to pass on the Driver's details to the police.
        </li>
        <li>
          If a Driver fills the car up with the incorrect petrol, they are responsible to pay for the car to be drained and refilled with the correct petrol.
        </li>
        <li>
          Owners can set their own daily mileage limits and needs to make the Driver aware of this.
        </li>
        <li>
          Drivers are responsible for returning the car in the same condition they received it in. This includes the cleanliness of the interior and exterior of the vehicle. If the Owner reports that the car has not been returned in the same condition then the hirer may be liable to pay for cleaning costs as per the Additional Charges Policy.
        </li>
        <li>
          Pets are not allowed in cars without the Owner’s explicit consent.  If an Owner reports that a Driver has transported a pet without their authorisation, the Driver will be subject to the cleaning fee and Owner Administration Charge.
        </li>
        <li>
          Drivers or their passengers are not permitted to smoke in any car unless the Owner includes this as acceptable behaviour in the car listing.  If smoke is reported by the Owner with 24 hours after a booking has ended, the Driver will be fined with the cleaning fee and Owner Administration Charge. If there is a smoke smell at the beginning of the booking Drivers should report it via email to admin@oldencars.com so you are not held responsible for the violation.
        </li>
        <li>
          Drivers are liable for a key replacement charge in the event the original keys are lost or stolen. In case the keys are locked inside the car, Drivers are liable for a locksmith charge
        </li>
        <li>
          Any information entered by the Driver into technology in a Car (e.g. into the Satnav) is the responsibility of the Driver to delete/clear; OldenCars and the car Owner cannot take responsibility for the Driver data after the end of the booking.
        </li>
      </ol>

      <h2>DAMAGE TO A CAR</h2>
      <ol>
        <li>
          Drivers are responsible for leaving the Car in the condition it was in when they collected it. Drivers agree that they are responsible for their own acts and omissions and are also responsible for the acts and omissions of any individuals who they allow to access the Car.
        </li>
        <li>
          The Driver shall be liable for any new damage to the Car in accordance with the terms of the Cancellation and Compensation Policy. The Owner shall promptly record any such new damage and report the same to OldenCars within 24 hours of the booking being completed. 
        </li>
        <li>
          The Owner must make sure the Driver has completed the pick up and drop off process otherwise claims may not be validated. Likewise the Driver must also make sure the pick up and drop off process is complete as they may become liable for damage they did not commit. 
        </li>
      </ol>

      <h2>OLDENCARS’ RIGHTS AND OBLIGATIONS</h2>
      <ol>
        <li>
          OldenCars shall be entitled to enforce these terms and conditions against any Owner or Driver generally and specifically in the context of any Booking to which they are party.
        </li>
        <li>
          OldenCars gives no warranties or representations about the accuracy of the information on the Site or the Site availability.
        </li>
        <li>
          OldenCars is entitled, where required by law or judicial or regulatory authorities, to provide personal data relating to any Member to any credit reference agencies, HM Revenue & Customs, the police, debt collection agents or any other relevant organisation. 
        </li>
        <li>
          The material displayed on the Site is provided without any guarantees, conditions or warranties as to its accuracy or completeness.
        </li>
      </ol>

      <h2>PRIVACY</h2>
      <p>
        Members agree that OldenCars’ Privacy Policy (as may be updated from time to time) governs OldenCars’ collection and use of their personal information.
      </p>

      <h2>LIMITATION OF LIABILITY OF OLDENCARS</h2>
      <ol type="a">
        <li>
          OldenCars excludes liability for:
          <ol>
            <li>
              any loss of business, profit, data and liability for any indirect or consequential loss arising from the use of the Site, whether caused by tort (including our negligence), breach of contract, breach of statutory duty or otherwise;
            </li>
            <li>
              the cancellation of any Booking by reason of any Car Exclusion Circumstances or Driver Exclusion Circumstances or any other cause specified in these terms and conditions;
            </li>
            <li>
              for any loss or damage to, or theft of, any Car or any other property belonging to any Member;
            </li>
            <li>
              for any sums payable by the Driver for any fuel or incidental expenses;
            </li>
            <li>
              for any loss or damage caused by circumstances beyond OldenCars’ reasonable control.
            </li>
          </ol>
        </li>
        <li>
          OldenCars’ total aggregate liability to any Member in relation to a Booking shall in no circumstances exceed the Hire Fee payable in respect of that Booking made by such Member.
        </li>
      </ol>

      <h2>PRICING AND PAYMENTS</h2>
      <ol>
        <li>
          OldenCars’ obligation to pay any sum payable by a Driver to an Owner or vice versa is conditional on OldenCars receiving such sum from the relevant payor.
        </li>
        <li>
          Drivers agree that, in respect of each Booking, OldenCars may, at any time following the acceptance of the request for the Booking by the Owner, charge the Hire Fee, the Handling Fee, any applicable VAT or other tax and any additional payments that are payable in connection with that Booking, any compensation, fine or penalty payable in the event of any breach of the terms and conditions applicable to the Booking and any sum payable under the Cancellation and Compensation Policy directly to the Driver's registered debit or credit card.
        </li>
        <li>
          Hire Fees received by OldenCars from Drivers shall be paid to the relevant Owner, less the Commission. Payments are made automatically from our payment gateway Stripe. Payments from Stripe may take a number of working days to show in your account (OldenCars does not control this timing).
        </li>
        <li>
          The minimum an Owner can set their car Hire Fee is £50 a day.
        </li>
        <li>
          Payment processing services for OldenCars are provided by Stripe and are subject to the Stripe terms of service. By agreeing to these terms or continuing to operate as an Owner on OldenCars, you agree to be bound by the Stripe Services Agreement, as the same may be modified by Stripe from time to time. As a condition of OldenCars enabling payment processing services through Stripe, you agree to provide OldenCars accurate and complete information about you and you authorise OldenCars to share it and transaction information related to your use of the payment processing services provided by Stripe.
        </li>
      </ol>

      <h2>MEMBERS' GENERAL RESPONSIBILITIES AND INDEMNITY</h2>
      <ol>
        <li>
          Members are responsible for their own personal tax affairs arising from their participation in any Booking including income tax and VAT.
        </li>
        <li>
          Each Member agrees to indemnify and hold harmless OldenCars, its officers and employees against all losses, liabilities, claims or demands arising out of: (a) any breach by such Member of these terms and conditions; (b) any claim by a third party that any content posted by the Member on the Site infringes any proprietary rights of that third party.
        </li>
        <li>
          <b>All bookings and extensions must be made via the OldenCars platform. We reserve the right to terminate membership of Drivers or Owners who agree to private bookings outside of the OldenCars platform.</b>
        </li>
      </ol>

      <h2>INSURANCE POLICY</h2>
      <ol>
        <li>
          Insurance is arranged by Lancaster Insurance Services. Please see their terms of service for further details.
        </li>
      </ol>

      <h2>TERMINATION OF MEMBERSHIP</h2>
      <ol>
        <li>
          Termination of any Member's Membership is without prejudice to any rights or obligations (including the obligation to pay any money and the right to receive any money) that accrue under any Booking that was agreed prior to such termination.
        </li>
        <li>
          OldenCars shall be entitled to limit, suspend, deactivate or terminate the membership of any Member to OldenCars, in its discretion and without liability to the Member, with or without cause, with or without prior notice and at any time.
        </li>
      </ol>

      <h2>ENTIRE AGREEMENT AND MISCELLANEOUS PROVISIONS</h2>
      <ol>
        <li>
          These terms and conditions, and the pages on the Site to which these terms and conditions refer, constitute the entire agreement between OldenCars and the Members. These terms and conditions, together with the details of each Booking, constitute the entire agreement between OldenCars and the Members and between the Members in relation to that Booking.  
        </li>
        <li>
          If any provision (or part of any provision) of these terms and conditions is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions will continue in force without being impaired or invalidated in anyway.
        </li>
        <li>
          No delay by any party in enforcing their rights shall prejudice or restrict those rights. No party shall be deemed to have waived their rights under these terms and conditions because of their failure or delay in exercising that right. 
        </li>
        <li>
          No Member may assign, transfer and/or subcontract all or any of any their rights and/or obligations under these terms and conditions or in relation to any Booking and any attempt on any Member's part to do so is void.
        </li>
      </ol>

      <h2>RIGHTS OF THIRD PARTIES</h2>
      <ol>
        <li>
          A person who is not a party to these terms and conditions or any Booking or any other contractual relationship contemplated by them has no right under the Contracts (Rights of Third Parties) Act 1999 to rely upon or enforce any provision of these terms and conditions or any Booking or any other contractual relationship contemplated by them.  
        </li>
      </ol>

      <h2>JURISDICTION AND GOVERNING LAW</h2>
      <ol>
        <li>
          These terms and conditions and each Booking shall be governed by and interpreted in accordance with the laws of England. The courts of England shall have exclusive jurisdiction in respect of any claim or dispute which may arise in connection with these terms and conditions or any Booking or in connection with and/or arising from any use of the Site.  
        </li>
      </ol>

      <h2>CONCERNS</h2>
      <ol>
        <li>
          If any Member has any concerns about any material whatsoever which appears on the Site, they may contact admin@oldencars.com.
        </li>
        <li>
          If any Member believes that any communication made through or on the Site infringes any legal rights that any they may have or is in breach of any of these terms and conditions or knows of or suspect any unauthorised posting of or attempt to post any communications, that Member may notify us with specific details by email at the following address: admin@oldencars.com.
        </li>
        <li>
          Each OldenCars Member agrees to comply with all reasonable requests from OldenCars, the police, or any statutory or regulatory authorities in identifying any unauthorised users of the Site.
        </li>
      </ol>

      <h2>General Conduct</h2>
      <p>
        All members must:
      </p>
      <ul>
        <li>
          Provide accurate, valid and complete information on their profile and keep this up to date at all times.
        </li>
        <li>
          Not post offensive, defamatory or false claims on reviews.  
        </li>
        <li>
          Never publicly share, post online or misuse other members’ contact information.
        </li>
        <li>
          Not transact bookings outside of the OldenCars platform.
        </li>
      </ul>

      <h2>OldenCars Responsibility</h2>
      <ol>
        <li>
          OldenCars endeavours to only allow safe Drivers and Cars to use the service. To minimise the risk of damage, only safe (vetted/approved) Drivers can become Drivers. OldenCars will use reasonable efforts to undertake online verification of all participating vehicles and Drivers, using a number of third party databases to ensure Drivers meet our Driver Eligibility Criteria and vehicles are not stolen or tainted with illegality or fraud 
        </li>
        <li>
          OldenCars does not undertake any safety checks of the private vehicles offered by Owners on the website. It is the responsibility of the Owner to ensure the Car’s condition is compliant and for the Driver to be satisfied this responsibility has been discharged.
        </li>
        <li>
          Lancaster Insurance Services provides insurance at their absolute discretion, without the involvement of OldenCars. 
        </li>
        <li>
          OldenCars will not be responsible for incidents caused during bookings. Car Owners and Drivers are fully responsible for their own conduct - OldenCars will do its best to police and remove offending parties from future participation.
        </li>
        <li>
          OldenCars is able to remove Members from their website at their absolute discretion. OldenCars has sole discretion in suspending Members from the service and reserves the right to require proof of identity or a security deposit when reinstating membership.
        </li>
      </ol>

      <h2>Cancellation and Compensation Polic</h2>
      <p>
        If a member creates or accepts a booking on OldenCars, they commit to honouring it. The cancellation fines below are designed to minimise inconvenience caused to the disappointed party. Cancellation fees will be applied upon OldenCars’ discretion.
      </p>
      <p>
        However, we encourage Owners and Drivers to resolve cancellation disagreements between themselves. In these cases, both parties must inform OldenCars via email or phone so that the cancellation fine may be waived or refunded. 
      </p>

      <h2>Owner cancellation fees</h2>
      <p>
        If an Owner cancels a booking after accepting it, they will be charged a 10% cancellation fee to cover administrative costs (such as payment processing charges outside of OldenCars’ control)  
      </p>

      <h2>Driver cancellation fees</h2>
      <p>
        If a Driver cancels a booking after it has been accepted by the Owner and more than 48 hours before Car collection, they will receive a full refund less a 10% cancellation fee to cover administrative costs (such as payment processing charges outside of OldenCars’ control). 
      </p>
      <p>
        If a Driver cancels a booking after it has been accepted by the Owner and fewer than 48 hours before Car collection, they will receive no refund. The Owner will be compensated for the inconvenience to an amount up to OldenCars’ discretion.
      </p>
      <p>
        On occasion, it may be necessary for OldenCars to carry out a Booking cancellation. These cancellations and any associated fines or compensation are assessed on a case by case basis
      </p>

      <h2>End of booking</h2>
      <p><b>Drivers are responsible for extending insurance cover in the case of returning a car late.</b></p>

      <h2>Car Suitability Policy</h2>
      <p>
        As per our eligibility criteria, all cars on the service must be safe to drive, in good condition, roadworthy, clean and tidy. If a car cannot be accepted by a Driver at the beginning of a booking, or the vehicle breaks down during a booking due to unsuitability, the Owner may be charged a 10% cancellation fee when substantiating evidence of car unsuitability is provided.
      </p>

      <h2>Before a booking</h2>
      <p>
        If an Owner becomes aware of vehicle faults prior to a booking, they must notify the Driver and OldenCars immediately and cancel the booking or have the fault fixed prior to the start of the booking. If they are unable to provide their Car for the booking they will be charged a 10% cancellation fee to cover administrative costs (such as payment processing charges outside of OldenCars’ control).
      </p>

      <h2>Traffic Fine Policy</h2>
      <p>
        The Driver is responsible for all traffic fines (such as parking fines, congestion charges, toll charges or moving violations) incurred during their booking. Owners and Drivers should work together to resolve these fines quickly.
      </p>
      <p>
        If an Owner receives notification of a traffic fine or similar offence incurred during a OldenCars Booking, they should first contact the Driver via their OldenCars profile or by the telephone number provided at the time of Booking to make them aware of the fine and give them the chance to pay it directly or transfer it into their name. The Owner should provide the Driver with the details of the charge and instructions for payment.
      </p>
      <p>
        If the Driver fails to pay or transfer the fine within 7 days of notification from the Owner, then the Owner may email OldenCars a copy of the violation notification and any further details. OldenCars will then help resolve this fine with the Driver. In this event, Driver will be liable for a £50 administration fee on top of the cost of the fine.
      </p>

      <h2>Appeals and Arbitration Process</h2>
      <p>
        In the event that an Owner or Driver is deemed liable for a fine imposed by a third party such as the Police or a local authority, they will be informed by email and their card debited. This sum is automatically debited from their card but can be challenged by return email or phone. OldenCars reserves the right to request further documentation. OldenCars will consider the Member's appeal and any relevant information provided, but has sole discretion in accepting or refusing the Member's challenge.
      </p>
      
    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
