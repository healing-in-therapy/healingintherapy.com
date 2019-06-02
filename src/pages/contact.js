import React from 'react';

import { Layout } from 'components';

function ContactPage() {
  return (
    <Layout title="Contact">
      <h1>Contact</h1>

      <address>
      1801 Park Court Pl. Unit E 105<br />
      Santa Ana, CA 92701
      </address>

      Tel: <a href="tel:1-949-422-6405">1-949-422-6405</a>
    </Layout>
  );
}

export default ContactPage;
