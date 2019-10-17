import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { HeaderPageLink } from './headerLinks';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'silver',
      marginBottom: '1.45rem',
      position: 'fixed',
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
          <HeaderPageLink pageTitle="Home" pageLink="/" />
          <HeaderPageLink pageTitle="About" pageLink="#" />
          <HeaderPageLink pageTitle="Contact" pageLink="#" />
          <HeaderPageLink pageTitle="Resume" pageLink="#" />
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
