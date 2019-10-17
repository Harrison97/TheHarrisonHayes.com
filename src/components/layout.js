/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          {new Date().getFullYear()}
          <>, Created by Harrison Hayes</>
          <> </>
          <a
            href="https://www.linkedin.com/in/harrisonhayes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <> </>
          <a href="https://github.com/harrison97" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
