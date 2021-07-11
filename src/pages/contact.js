import * as React from 'react';
import { convertToBgImage } from 'gbimage-bridge';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

import { Layout, PageTitle, Section } from 'components';

import * as styles from './style/contact.module.scss';

function ContactPage() {
  const { hero } = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, quality: 80)
        }
      }
    }
  `);

  const image = getImage(hero);

  const bgImage = convertToBgImage(image);

  const [interest, setInterest] = React.useState(null);

  const email = React.useRef(null);
  const form = React.useRef(null);
  const formName = React.useRef(null);
  const message = React.useRef(null);
  const name = React.useRef(null);
  const phone = React.useRef(null);

  function onInterestChange(event) {
    setInterest(event.target.value);
  }

  const onSubmit = React.useCallback(
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
      <PageTitle bgImage={bgImage} title="Contact" />

      <Section>
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

          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="contact_form_name">
              Name*
            </label>
            <input
              className={styles.textField}
              id="contact_form_name"
              name="name"
              ref={name}
              required
              type="text"
            />
          </div>

          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="contact_form_email">
              Email*
            </label>
            <input
              className={styles.textField}
              id="contact_form_email"
              name="email"
              ref={email}
              required
              type="email"
            />
          </div>

          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="contact_form_phone">
              Phone (optional)
            </label>
            <input
              className={styles.textField}
              id="contact_form_phone"
              name="phone"
              ref={phone}
              type="tel"
            />
          </div>

          <div className={styles.formRow}>
            <fieldset className={styles.fieldSet}>
              <legend className={styles.legend}>Interest*</legend>

              <div className={styles.fieldSetItem}>
                <label>
                  <input
                    className={styles.radio}
                    id="contact_form_interest"
                    name="interest"
                    onChange={onInterestChange}
                    required
                    type="radio"
                    value="individuals"
                  />
                  Individuals
                </label>
              </div>

              <div className={styles.fieldSetItem}>
                <label>
                  <input
                    className={styles.radio}
                    id="contact_form_interest"
                    name="interest"
                    onChange={onInterestChange}
                    required
                    type="radio"
                    value="couples"
                  />
                  Couples
                </label>
              </div>

              <div className={styles.fieldSetItem}>
                <label>
                  <input
                    className={styles.radio}
                    id="contact_form_interest"
                    name="interest"
                    onChange={onInterestChange}
                    required
                    type="radio"
                    value="other"
                  />
                  Other
                </label>
              </div>
            </fieldset>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label} htmlFor="contact_form_message">
              Message*
            </label>
            <textarea
              className={styles.textArea}
              id="contact_form_message"
              name="message"
              ref={message}
              required
              rows="4"
            />
          </div>

          <div>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </div>
        </form>
      </Section>
    </Layout>
  );
}

export default ContactPage;
