import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Resume = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Resume page</h1>
    <p>Welcome to the Resume page!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Resume;
