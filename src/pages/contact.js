import React, { useCallback, useRef, useState } from 'react';

import { Column, Layout, Map, Row, Section } from 'components';

import * as styles from './style/contact.module.scss';

function ContactPage() {
  const [interest, setInterest] = useState(null);

  const email = useRef(null);
  const form = useRef(null);
  const formName = useRef(null);
  const message = useRef(null);
  const name = useRef(null);
  const phone = useRef(null);

  function onInterestChange(event) {
    setInterest(event.target.value);
  }

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const data = {
        interest,
        email: email.current.value,
        message: message.current.value,
        name: name.current.value,
        phone: phone.current.value,
        'form-name': formName.current.value,
      };

      const body = Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
      fetch('/', {
        body,
        method: 'POST',

        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      form.current.reset();
    },
    [interest]
  );

  return (
    <Layout title="Contact">
      <h1>Contact</h1>

      <Section>
        <Row>
          <Column width="50%">
            <form
              data-netlify-honeypot="bot-field"
              data-netlify="true"
              id="contact_form"
              method="post"
              name="contact"
              onSubmit={onSubmit}
              ref={form}
            >
              <input
                name="form-name"
                ref={formName}
                type="hidden"
                value="contact"
              />

              <div className={styles.honeypot}>
                <input name="bot-field" />
              </div>

              <div>
                <label htmlFor="contact_form_name">Name</label>
                <input
                  id="contact_form_name"
                  name="name"
                  ref={name}
                  required
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="contact_form_email">Email</label>
                <input
                  id="contact_form_email"
                  name="email"
                  ref={email}
                  required
                  type="email"
                />
              </div>

              <div>
                <label htmlFor="contact_form_phone">Phone (optional)</label>
                <input
                  id="contact_form_phone"
                  name="phone"
                  ref={phone}
                  type="tel"
                />
              </div>

              <div>
                <label htmlFor="contact_form_message">Message</label>
                <textarea
                  id="contact_form_message"
                  name="message"
                  ref={message}
                  required
                />
              </div>

              <div>
                Interest
                <ul>
                  <li>
                    <label>
                      <input
                        id="contact_form_interest"
                        name="interest"
                        onChange={onInterestChange}
                        required
                        type="radio"
                        value="individuals"
                      />
                      Individuals
                    </label>
                  </li>

                  <li>
                    <label>
                      <input
                        id="contact_form_interest"
                        name="interest"
                        onChange={onInterestChange}
                        required
                        type="radio"
                        value="couples"
                      />
                      Couples
                    </label>
                  </li>

                  <li>
                    <label>
                      <input
                        id="contact_form_interest"
                        name="interest"
                        onChange={onInterestChange}
                        required
                        type="radio"
                        value="groups"
                      />
                      Groups
                    </label>
                  </li>

                  <li>
                    <label>
                      <input
                        id="contact_form_interest"
                        name="interest"
                        onChange={onInterestChange}
                        required
                        type="radio"
                        value="rehabilitation"
                      />
                      Rehabilitation
                    </label>
                  </li>

                  <li>
                    <label>
                      <input
                        id="contact_form_interest"
                        name="interest"
                        onChange={onInterestChange}
                        required
                        type="radio"
                        value="other"
                      />
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

          <Column width="50%">
            <Map />
            <h2>My Office</h2>
            <address>
              1801 Park Court Pl. Unit E 105
              <br />
              Santa Ana, CA 92701
            </address>
            Phone: <a href="tel:1-949-422-6405">1-949-422-6405</a>
            <p>
              There is plently of free parking available in front of the
              building.
            </p>
          </Column>
        </Row>
      </Section>
    </Layout>
  );
}

export default ContactPage;
