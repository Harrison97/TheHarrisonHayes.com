import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { HeaderPageLink } from './headerLinks';

const Header = ({ siteTitle, sidebarQuote, sidebarQuoteAuthor }) => (
  <header
    style={{
      background: 'silver',
      marginBottom: '1.45rem',
      position: 'fixed',
      width: '300px',
      height: '100%',
      padding: '20px',
      paddingTop: '40px',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: 0,
      }}
    >
      <div className="sidebarTop" style={{ textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '26px', wordSpacing: '3px', letterSpacing: '1px' }}>
          <Link
            to="/"
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <p style={{ fontSize: '10px', wordSpacing: '-1px', letterSpacing: '3px' }}>
          Engineer | Artist | Thinker | Kid
        </p>
      </div>

      <div className="sidebarLinks" style={{ margin: '30px' }}>
        <HeaderPageLink pageTitle="About" pageLink="/about" />
        <HeaderPageLink pageTitle="Resume" pageLink="/resume" />
        <HeaderPageLink pageTitle="Contact" pageLink="contact" />
        <div style={{ textAlign: 'center' }}>
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
        </div>
      </div>

      <hr style={{ margin: '100px 30px' }} />

      <div className="quote" style={{ textAlign: 'center', width: '100%', marginTop: '100px' }}>
        <p style={{ lineHeight: '2' }}>{sidebarQuote}</p>
        <p>{sidebarQuoteAuthor}</p>
      </div>

      <footer
        style={{
          bottom: '1rem',
          left: '1rem',
          right: '1rem',
          position: 'absolute',
          fontSize: '14px',
          lineHeight: '1rem',
        }}
      >
        <hr style={{ margin: '20px 30px' }} />
        <div>{new Date().getFullYear()}</div>
        <div>All Rights Reserved.</div>
        <div>Created by Harrison Hayes.</div>
      </footer>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  sidebarQuote: PropTypes.string,
  sidebarQuoteAuthor: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
  sidebarQuote: '',
  sidebarQuoteAuthor: '',
};

export default Header;
