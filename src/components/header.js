import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { HeaderPageLink } from './headerLinks';

const Header = ({ siteTitle, sidebarQuote }) => (
  <header
    style={{
      background: 'silver',
      marginBottom: '1.45rem',
      position: 'fixed',
      width: '18%',
      height: '100%',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ margin: '7rem auto' }}>
        <HeaderPageLink pageTitle="About" pageLink="/about" />
        <HeaderPageLink pageTitle="Resume" pageLink="/resume" />
        <HeaderPageLink pageTitle="Contact" pageLink="contact" />
      </div>
      <h3>{sidebarQuote}</h3>
      <footer style={{ bottom: '1rem', position: 'absolute' }}>
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
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  sidebarQuote: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
  sidebarQuote: '',
};

export default Header;
