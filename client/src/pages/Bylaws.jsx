import { Seo } from '../components/Seo';
import pdf from '../documents/Internal-Rules.pdf';
import ScrollToTop from 'react-scroll-to-top';

const Bylaws = () => {
  return (
    <section className='  my-10 align-element'>
      <Seo title='SAGI' description='Helping people helping themselves' />
      <ScrollToTop smooth color='#0891b2' width='40' />
      <div className='mb-12'>
        <h1 className='text-3xl sm:text-6xl text-center font-bold capitalize text-base-content'>
          SAGI Bylaws
        </h1>
        <div className='w-28 h-1 mt-3 bg-cyan-600 mx-auto mb-10 '></div>
        <div className='flex items-center justify-center'>
          <a className='btn  bg-primary text-white' href={pdf}>
            DOWNLOAD A PDF VERSION
          </a>
        </div>
      </div>

      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl bg-base-300 text-primary '>
          SECTION-1: PREAMBLE
        </div>
        <div className='collapse-content text-base-content bg-base-300 '>
          <p>
            <span className='font-bold'>
              1.1. PURPOSE OF INTERNAL RULES & REGULATIONS.
            </span>
            <br /> The purpose of the \nInternal Rules & Regulations is to
            ensure the smooth running and proper functioning of the
            organization. The Internal Rules & Regulations will provide
            guidelines on maintaining the organizations vision, harboring a
            close and supportive relationship between the bureau/board and the
            delegates, resolving confusion, facilitating daily activities, and
            improving the management of the bureau/board. <br />
            The following Internal Rules & Regulations effectively serve as the
            Bylaws of this organization. <br />
            <br />
            <span className='font-bold'>1.2. LIVING DOCUMENT.</span>
            <br />
            The Internal Rules & Regulations should serve as a living document
            to the organization’s officers, presidents of associations, and
            delegates. This is a set of rules that every association member
            should abide by. The Internal Rules & Regulations shall be available
            to every SAGI association/member of the organization through the
            website or provided via electronic mail.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-2: THE NAME
        </div>
        <div className='collapse-content text-base-content '>
          <p>
            <span className='font-bold'>2.1. OFFICIAL NAME</span>
            <br /> The official name of the organization is Active Solidarity
            Ltd. The French translation of Active Solidarity is Solidarité
            Agissante (SAGI). Active Solidarity, Ltd. <br />
            <br />
            People refer to the organization as “SAGI”
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-3: MISSION AND OBJECTIVE
        </div>
        <div className='collapse-content text-base-content '>
          <p>
            SAGI’s mission is to create a network of Cameroonians living in the
            United States of America (“US”), for the purpose of helping families
            within the community to alleviate the financial burden of losing a
            loved one. <br />
            <br />
            SAGI’s objectives include:
            <br />- Creating an electronic database of different Cameroonian
            associations in the US. <br />
            -Facilitating the repatriation of the remains of individuals who
            belonged to associations that are current members of SAGI, deceased
            in the US or in other countries excluding Cameroon.
            <br /> -Facilitating burials of individuals who belonged to “current
            member associations” who died in the United States. Informing all
            member associations, through their president and delegates in case
            of the death of a member association’s individual member. <br />
            -Collecting contributions (donations) from each SAGI member
            association. <br />
            -Transferring the collected contributions to the funeral home, and
            to the beneficiary in case there is a balance after administrative
            costs are subtracted.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300  ftext-base-content my-5'
      >
        <div className='collapse-title sm:text-2xl  text-primary'>
          SECTION-4: OFFICERS
        </div>
        <div className='collapse-content  text-base-content'>
          <p>
            SAGI’s Bureau / Board of Directors include a
            <br /> President,
            <br /> Vice President(s),
            <br /> Secretary-General(s),
            <br /> a Treasurer, <br />
            and an Auditor.
            <br /> The Bureau/Board may appoint other officers.
            <br /> Officers whose authority and duties are not prescribed in the
            Bylaws shall have the authority and perform the duties prescribed,
            from time to time, by the Board of Directors. All officers of the
            SAGI Bureau are co-opted by the Founders of SAGI, and approved by
            the Bureau / Board of Directors.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 focus:bg-base-300  text-base-content my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-5: GENERAL ASSEMBLY
        </div>
        <div className='collapse-content  text-base-content'>
          <p>
            The General Assembly meets when summoned by SAGI Bureau/Board of
            Directors. <br />
            The SAGI Bureau/Board of Directors decides the location and time of
            the General Assembly. <br />
            Presidents and delegates from each association should take part in
            the General Assembly.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300  focus:bg-base-300  text-base-content my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-6: REGULAR BUREAU/BOARD MEETING
        </div>
        <div className='collapse-content  text-base-content'>
          <p>
            The SAGI Bureau/Board meets at least three (3) times a year for
            periodic review, to ensure the organization operates in a manner
            consistent with SAGI’s mission and objective.
            <br /> In case of emergency, the President shall summon a meeting.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300  focus:bg-base-300  text-base-content my-5 '
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-7: EXTRAORDINARY BUREAU MEETING
        </div>
        <div className='collapse-content  text-base-content'>
          <p>
            SAGI Bureau/Board meets 48 hours following the announcement of the
            death of an individual belonging to a member-association of SAGI to:
            Officially announce the death of the individual. Verify and send out
            all required documents to validate the death. Prepare and send out
            the contribution table to collect funds from member associations.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300  focus:bg-base-300  text-base-content my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-8: MEMBERSHIP
        </div>
        <div className='collapse-content  text-base-content'>
          <p>
            Membership in SAGI is free and voluntary, however, only associations
            can be members of SAGI. <br />
            Any association that becomes a member of SAGI must agree to
            subscribe to SAGI’s Internal Rules and Regulations. <br />
            Member associations will be assisted with contributions in case of
            death of individuals belonging to the respective member association,
            if they remain in good standing meaning they pay administration
            and/or matriculation fees, among other requirements stated herein.
            <br />
            SAGI accepts as members-only associations or groups with a minimum
            of twenty (20) individuals, <br />
            No association should go below ten (10) individuals in their
            membership at any time. The individuals are members of the member
            associations of SAGI. <br />
            The individuals have no standing to make claims or raise issues with
            SAGI including but not limited to claims regarding the operation of
            the organization and the management of SAGI funds. Only SAGI member
            associations in good standing may make such demands of SAGI.
            <br /> A SAGI membership is considered “active” once a SAGI
            matriculation number is assigned and published by email. It is at
            the discretion of SAGI to accept or decline an association’s
            membership to SAGI, however, individuals may be members of SAGI
            Member Associations at the Association’s discretion. <br />
            Any association member can voluntarily withdraw from SAGI by
            submitting a letter or email to SAGI Bureau/Board. SAGI has the
            authority to terminate the membership of any member or association
            whose behavior may disrupt or destabilize the organization.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300  t my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary '>
          SECTION-9: MATRICULATION
        </div>
        <div className='collapse-content  text-base-content'>
          <p>
            Matriculation numbers are attributed and published at least ninety
            (90) days after receiving a new list for registration or addition.
            No member association may have two matriculation numbers. It is the
            responsibility of each president/delegates of each association to
            ensure that their member association is not registered twice. Any
            member who was previously a SAGI member can be reinstated after
            paying all missed contributions, in addition to a return fee and
            observe the waiting period of ninety (90) days after SAGI’s receipt
            of the return fee payment. Names and date of birth of individuals
            who belong to SAGI member associations should be provided exactly as
            they are written on official documents and without abbreviations.
            Name changes of deceased individuals are not accepted after the
            death announcement.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-10: NEW MEMBER REGISTRATION
        </div>
        <div className='collapse-content text-base-content'>
          <p>
            Requests for new member registration can be submitted at any time.
            SAGI only accepts associations or groups with a minimum of twenty
            (20) individuals as members. The form called Form S3- New
            Registration. can be downloaded from the website:
            www.sagiusa.org/forms The form should be completed in all uppercase
            letters (UPPERCASE LETTERS) and returned to SAGI via email in EXCEL
            format. There is a waiting period of at least ninety (90) days,
            after receiving a new list for registration.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-11: LIST UPDATE
        </div>
        <div className='collapse-content text-base-content'>
          <p>
            <span className='font-bold'>
              11.2. ADDITION <br />
            </span>
            All requests for addition of individuals belonging to member
            associations of SAGI should be done by submitting Form S1 - SAGI
            Addition. Names and date of birth on the form should be written
            exactly as they appear on the official document (ID, passport, etc.)
            of the individual member of the member association. There is a
            waiting period of at least ninety (90) days, after receiving the
            addition form before the individual person is added as a member of
            the member association. Individuals added to member associations of
            SAGI must pay their Administration and Matriculation fees fifteen
            (15) days after receiving the invoice. <br /> <br />
            <span className='font-bold'>
              11.2. WITHDRAWAL <br />
            </span>
            All requests for member withdraw should be done by submitting Form
            S2 - SAGI Withdraw Once the withdrawal form is submitted to SAGI,
            all individuals belongings to the member association included in the
            withdrawal form are automatically removed. Specifically, the member
            association is no longer a member of SAGI even if it has not yet
            been published. It should take SAGI one (1) to two (2) weeks to
            publish all withdrawals after receiving the form. The effective date
            is the 25th of the month the withdrawal form has been submitted.
            <br /> <br />
            <span className='font-bold'>
              11.3. NAME CORRECTION <br />
            </span>
            All requests for name corrections should be done by submitting Form
            S4 – SAGI Name Correction. Name corrections should be done for minor
            errors such as typos. If a member individual’s name has changed due
            to: Divorce: Provide a copy of the divorce decree. Marriage: Provide
            a copy of the marriage certificate. Court Order Name Change: Provide
            a copy of a court-issued document. <br />
            <br />
            <span className='font-bold'>11.4. TRANSFER</span>
            <br />
            Any individual belonging to an active member association of SAGI can
            elect to transfer from one association to another without delay. The
            transfer should be done by filling out the transfer form: Form S5 -
            SAGI Member Transfer. The presidents/delegates of the current and
            the future associations should send an email requesting the
            transfer. <br /> <br />
            <span className='font-bold'> 11.5. CONTACTS</span>
            <br /> All requests for contacts updates should be done by
            submitting Form S6 - SAGI Contacts. When completing the contact
            form, provide the email and phone number of each delegate.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-12: RETURNING MEMBER / ASSOCIATION
        </div>
        <div className='collapse-content text-base-content'>
          <p>
            Any association that voluntarily left SAGI can return upon issuance
            of a new SAGI matriculation number. The returning member/association
            must pay the missed contribution(s), in addition to the returning
            fee, and observe the waiting period of ninety (90) days after SAGI’s
            receipt of the return fee payment. Any individual who voluntarily
            left a member association of SAGI can come back based on the rules
            and regulations of their local member association but cannot keep
            the previously used SAGI matriculation number.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-13: FRAUD
        </div>
        <div className='collapse-content text-base-content'>
          <p>
            <span className='font-bold'>13.1. WHAT IS FRAUD</span>
            <br />A member having a SAGI matriculation number and not residing
            in the United States. Any falsified document. Any false statement.{' '}
            <br /> <br />
            <span className='font-bold'>13.2. SANCTIONS</span>
            <br />
            Where an offense is believed to have been committed the SAGI
            Bureau/Board can consider administering a caution or a penalty. The
            decision to offer a penalty will depend on individual circumstances.
            If the offense is intended to disrupt or destabilize the
            organization, the offender’s membership will be terminated. If fraud
            is detected, the individual and/or member association who committed
            the offense will be excluded from SAGI.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-14: SAGI MEMBERSHIP IDENTIFICATION
        </div>
        <div className='collapse-content text-base-content'>
          <p>
            When they exist, All SAGI ID cards remain the sole property of SAGI,
            and in any case cannot be used outside the scope of SAGI. The use of
            names and matriculation numbers, as well as emails and phone numbers
            from SAGI for political or economic purposes are specifically
            prohibited.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-15: LITIGATION
        </div>
        <div className='collapse-content text-base-content'>
          <p>
            <span className='font-bold'>15.1. EXCLUSIVE FORUM PROVISION</span>
            <br />
            The headquarters of SAGI are located in Montgomery County, Maryland.
            Unless SAGI consents in writing to the selection of an alternative
            forum, the sole and exclusive forum for (i) any derivative action or
            proceeding brought on behalf of SAGI, (ii) any action asserting a
            claim of breach of fiduciary duty owed by any director or officer of
            SAGI to the Organization or the Organization’s members (which are
            only associations), (iii) any action asserting a claim against SAGI
            or any director or officer of SAGI arising pursuant to any provision
            of the Maryland Law or the Certificate of Incorporation or these
            By-Laws (in each case, as they may be amended from time to time), or
            (iv) any action asserting a claim against SAGI or any director or
            officer of SAGI governed by the internal affairs doctrine, shall be
            the Circuit Court for Montgomery County (or if the Circuit Court for
            Montgomery County does not have subject matter jurisdiction, the
            federal district court for the District of Maryland). <br />
            <br />
            <span className='font-bold'>15.2. CLAIMS</span>
            <br /> Only member associations have a right to accounting and to
            challenge in court or through the general assembly, the operation of
            the organization including the management of funds. Individuals
            belonging to associations that are members of SAGI do not have a
            right to accounting and cannot challenge in court or otherwise, the
            operation of the organization including the management of its funds
            and the conduct of its officers. SAGI employees are indemnified by
            SAGI for work done on SAGI&apos;s behalf.
            <br />
            <br />
            <span className='font-bold'>15.3. ATTORNEY FEES</span>
            <br />
            In any litigation, arbitration, or other proceedings in which SAGI
            is the prevailing party, SAGI shall collect from the non-prevailing
            party, its reasonable attorneys&apos; fees incurred.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-16: IN CASE OF DEATH OF A SAGI MEMBER
        </div>
        <div className='collapse-content text-base-content'>
          <p>
            <span className='font-bold'>16.1. DEATH ANNOUNCEMENT</span>
            <br /> Any death must be reported to the SAGI bureau within seven
            (7) days from the date of death; after this period, the death is no
            longer considered by SAGI and contributions will not be provided by
            SAGI. To preserve the privacy of the deceased, associations and
            families are encouraged, but not required to conceal the cause of
            death, usually mentioned on the death certificate, before providing
            it to SAGI. <br /> <br />{' '}
            <span className='font-bold'>
              16.2. DEATH THAT OCCURRED IN THE UNITED STATES
            </span>
            Documents to be submitted for a death in the US: Death certificate
            (Cause of death may be redacted) SAGI Matriculation Number Picture
            of the deceased Funeral Home invoice Evidence the member association
            is in good standing with SAGI (i.e. No outstanding invoices) <br />
            <br />
            <span className='font-bold'>
              16.3. DEATH THAT OCCURRED IN CAMEROON OR ANYWHERE OUT OF US
            </span>
            <br />
            a. A death in Cameroon or Anywhere out of the US, as used in this
            section, describe the death of an individual SAGI member who is
            either a US citizen or Legal Permanent Resident (as defined in the
            US Nationality Laws enforced) who passed away while visiting
            Cameroon or any other country with no intention of remaining
            permanently, provided that the death occurred within 180 days of the
            individual entering the country. <br /> <br /> b. The deceased was a
            Sagi member (Have a SAGI Matriculation issued and published per the
            general bylaws establishing membership) at the commencement of
            his/her visit. <br /> <br />
            c. The association is in good standing. <br /> <br />
            d. The following documentation shall be required as part of the
            report of death in Cameroon or anywhere out of the US:
            <br /> <br /> I. Certified copy of death certificate by the Ministry
            of External Relations of the country where the death occurred.
            <br /> <br /> II. Proof that the death has been reported to Social
            Security Administration (The American Citizen Services in the
            consular section of the embassy is where the “Consular Report of
            Death”).
            <br /> <br />
            III A copy of the deceased&apos;s green card and Passport or US
            passport, including the VISA page. <br /> <br />
            IV A copy of the deceased trip ticket(s) <br /> <br />
            <span className='font-bold'>16.4. ADMINISTRATIVE FORMALITIES</span>
            <br />
            SAGI does not deal with paperwork. This task falls to the family
            concerned with the death. Ergo, SAGI does not retain any documents
            pertaining to deaths or the individual families. SAGI maintains no
            records.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-17: CONTRIBUTIONS
        </div>
        <div className='collapse-content text-base-content'>
          <p>
            <span className='font-bold'>
              17.1. WHO SHOULD CONTRIBUTE? <br />
            </span>
            All active member associations should take part in the ongoing
            contributions, even if the death of the individual occurred before
            their matriculation. <br /> <br />
            <span className='font-bold'>
              17.2. CONTRIBUTION AMOUNT <br />
            </span>
            The ﬁxed amount to be collected is $20,000.00 (twenty thousand
            dollars) if the death occurred in the US or in a country that is not
            the deceased’s country of descent and $10,000.00(ten thousand
            dollars) if the death occurred in the deceased’s country of descent.
            <br />
            This amount is divided among all active members in member
            associations, and each association’s contribution depends on the
            total number of individuals belonging to that association. The
            amount of the contribution cannot be modiﬁed after the list is sent
            out.
            <br /> <br />{' '}
            <span className='font-bold'>17.3. CONTRIBUTION DUE DATE </span>
            <br />
            The due date of contributions is posted on the contribution table
            sent out by the SAGI Bureau/Board. The associations are strongly
            encouraged to make their contributions as soon as the list of
            contributions is published, without waiting for the deadline. The
            official announcement of death is only made after the SAGI
            Bureau/Board receives the required documents as outlined above.
            <br />
            <br />
            <span className='font-bold'>
              17.4. NOT ELIGIBLE FOR CONTRIBUTIONS
            </span>
            <br /> <br />
            Deaths are not eligible for contributions under the following
            circumstances:
            <br /> <br />
            a. The individual died within the waiting period before a
            matriculation number could be assigned.
            <br /> <br /> b. The association is NOT IN GOOD STANDING for
            non-contribution or non-payment of any administration fees.
            <br /> <br /> c. The name on the individual’s death certificate is
            different from the name in SAGI’s database. <br /> <br />
            d. The individual passed away out of the USA after starting his or
            her visit before May 1st, 2024. <br /> <br />
            e. The Individual passed away out of the USA after being in the
            country of death for more than 180 days.
            <br /> <br />
            f. The individual passed away out of the USA and does not hold a US
            green card, a US Passport or any other US document allowing him or
            her to live permanently in the USA.
            <br /> <br />
            g. The death was announced to SAGI more than seven (7) days of the
            person passing.
            <br /> <br />
            h. The body was donated for research.
            <br /> <br />
            i. The body was cremated.
            <br /> <br />
            <span className='font-bold'>17.5. CONTRIBUTIONS MODE</span>
            <br />
            Contributions are made in any of the the following ways:
            <br />
            a. Bank deposit/transfer into one of SAGI’s bank accounts, provided
            with the contribution list.
            <br />
            b. Online application using SAGI’s email: info@sagiusa.org and name:
            Active Solidarity Ltd
            <br /> <br />
            <span className='font-bold'> 17.6. CONTRIBUTION FORMALITIES </span>
            <br />
            Bank deposits must be the exact amount as it appears on the
            contribution list. DO NOT neglect cents, this is very important as
            it corresponds to the association bank code. The deposit receipt
            must be sent via email after any deposit into SAGI accounts.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-18: DISBURSEMENT
        </div>
        <div className='collapse-content text-base-content'>
          <p>
            SAGI shall disburse a total sum of twenty thousand dollars
            ($20,000.00) for each death, to assist in the repatriation or burial
            of the corpse of a deceased member(s). This amount is directly paid
            to the funeral home and the beneficiary when there is a balance. The
            payment of the funeral home’s bill is made by one of the following
            methods: Transfer of funds into the bank account of the funeral home
            Direct payment to the funeral home by check or cashier check When
            there is a remaining balance, a check with the corresponding amount
            is issued to the beneficiary. The president or delegate of the
            association to which the deceased individual belongs, is responsible
            for providing the name and mailing address of the beneficiary. Under
            no circumstances shall the funds be given to the beneficiary in the
            form of cash.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-19: PENALTIES
        </div>
        <div className='collapse-content text-base-content'>
          <p>
            All returning members must pay a returning fee penalty of $150.00 in
            addition to any contributions missed. Any association that fails to
            honor its contribution (donation) on the due date will pay a late
            fee of $100.00. Any association that fails to pay its contribution
            (including the late fees), 24 hours after the due date, will be
            excluded from SAGI. A penalty of 20% applies to the administration
            fees after 30 days of non-payment.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-20: SAGI FEES
        </div>
        <div className='collapse-content text-base-content'>
          <p>
            <span className='font-bold'>
              20.1. ADMINISTRATION FEES
              <br />
            </span>{' '}
            Every individual belonging to a member association of SAGI must pay
            an administration fee equivalent to $1.00 per month for a total of
            $12.00 per year, due once on January, 25th of each year. Funds
            collected are to be allocated toward administrative expenses only.
            Within the category of administrative expenses lie funds to support
            day to day activities, legal fees, to assist members of the SAGI
            Bureau/Board, etc. The Administration fee is non-refundable.
            <br />
            <br />
            <span className='font-bold'>20.2. MATRICULATION FEES</span>
            <br />
            a. Every new individual must make a one-time payment of $20.00 as a
            matriculation fee, due after the attribution of a matriculation
            number.
            <br /> b. The Matriculation fee is non-refundable.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse bg-base-300 text-base-content focus:bg-base-300   my-5'
      >
        <div className='collapse-title sm:text-2xl text-primary'>
          SECTION-21: AMENDMENTS TO THE INTERNAL RULES & REGULATIONS
        </div>
        <div className='collapse-content text-base-content'>
          <p>
            SAGI Internal Rules & Regulations can be amended and modified by
            majority vote of the Bureau / Board. If there are any changes
            relating to the Internal Rules & Regulations of SAGI, it should be
            amended. The Internal Rules & Regulations are established by the
            members of the SAGI Bureau / Board. Any amendment of the Internal
            Rules & Regulations must be approved by the majority of the Bureau /
            Board of Directors. SAGI Internal Rules & Regulations shall be sent
            to all presidents and delegates of associations by email.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bylaws;
