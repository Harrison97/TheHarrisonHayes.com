import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import MyResume from '../components/myResume';
import SEO from '../components/seo';

const Resume = () => (
  <Layout>
    <SEO title="Page two" />
    <div style={{ align: 'right' }}>
      <MyResume />
    </div>
  </Layout>
);

export default Resume;
