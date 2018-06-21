import React from 'react';
import Link from 'gatsby-link';
import SubscribeEmail from '../components/subscribe-email';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>
      Environment: {process.env.NODE_ENV}
    </p>
    <p>
      Test Key: {process.env.TEST_KEY}
    </p>
    <p>
      Mailchimp Endpoint: {process.env.MAILCHIMP_API_ENDPOINT}
    </p>
    <SubscribeEmail />
  </div>
)

export default IndexPage