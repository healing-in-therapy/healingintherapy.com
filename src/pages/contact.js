import React from 'react';

import {
  Column,
  Layout,
  Map,
  Row,
  Section,
} from 'components';

function ContactPage() {
  return (
    <Layout title="Contact">
      <h1>Contact</h1>

      <Row>
        <Column width="50%">
          <Map />
        </Column>

        <Column width="50%">
          <Section
            title="My Office"
          >
            <address>
            1801 Park Court Pl. Unit E 105<br />
            Santa Ana, CA 92701
            </address>

            Phone: <a href="tel:1-949-422-6405">1-949-422-6405</a>

            <p>
              There is plently of free parking available in front of the building.
            </p>
          </Section>
        </Column>
      </Row>

      <Row>
        <Column>
          <form id="contact_form" name="contact_form">
            <div>
              <label htmlFor="contact_form_name">Name</label>
              <input id="contact_form_name" name="name" type="text" />
            </div>

            <div>
              <label htmlFor="contact_form_email">Email</label>
              <input id="contact_form_email" name="email" type="email" />
            </div>

            <div>
              <label htmlFor="contact_form_phone">Phone (optional)</label>
              <input id="contact_form_phone" name="phone" type="text" />
            </div>

            <div>
              <label htmlFor="contact_form_message">Message</label>
              <textarea id="contact_form_message" name="message" />
            </div>

            <div>
              Interest

              <ul>
                <li>
                  <label>
                    <input id="contact_form_interest" name="interest" type="radio" value="individuals" />
                    Individuals
                  </label>
                </li>

                <li>
                  <label>
                    <input id="contact_form_interest" name="interest" type="radio" value="couples" />
                    Couples
                  </label>
                </li>

                <li>
                  <label>
                    <input id="contact_form_interest" name="interest" type="radio" value="groups" />
                    Groups
                  </label>
                </li>

                <li>
                  <label>
                    <input id="contact_form_interest" name="interest" type="radio" value="rehabilitation" />
                    Rehabilitation
                  </label>
                </li>

                <li>
                  <label>
                    <input id="contact_form_interest" name="interest" type="radio" value="other" />
                    Other
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </Column>
      </Row>
    </Layout>
  );
}

export default ContactPage;
