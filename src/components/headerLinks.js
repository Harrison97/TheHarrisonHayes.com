import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

export const HeaderPageLink = ({ pageTitle, pageLink }) => (
  <div
    style={{
      margin: '1rem auto',
      maxWidth: 960,
      padding: 0,
    }}
  >
    <p style={{ margin: 0, textAlign: 'right' }}>
      <Link
        to={pageLink}
        style={{
          color: 'black',
          textDecoration: 'none',
        }}
      >
        {pageTitle}
      </Link>
    </p>
  </div>
);

HeaderPageLink.propTypes = {
  pageTitle: PropTypes.string,
  pageLink: PropTypes.string,
};

HeaderPageLink.defaultProps = {
  pageTitle: '',
  pageLink: '',
};

export const HeaderIconLink = ({ icon, link }) => <div>{(icon, link)}</div>;

HeaderIconLink.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
};

HeaderIconLink.defaultProps = {
  icon: '',
  link: '',
};
