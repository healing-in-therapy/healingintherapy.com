import React from 'react';

import { Layout, SEO } from 'components';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />

      <div>
        <h1>Contact</h1>

        <address>
        1801 Park Court Pl. Unit E 105<br />
        Santa Ana, CA 92701
        </address>

        Tel: <a href="tel:1-949-422-6405">1-949-422-6405</a>
      </div>
    </Layout>
  );
}

export default ContactPage;
