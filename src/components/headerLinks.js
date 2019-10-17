import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const HeaderPageLink = ({ pageTitle, pageLink }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to={pageLink}
        style={{
          color: 'black',
          //   textDecoration: 'none',
        }}
      >
        {pageTitle}
      </Link>
    </h1>
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

const HeaderIconLink = ({ icon, link }) => <div>{(icon, link)}</div>;

HeaderIconLink.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
};

HeaderIconLink.defaultProps = {
  icon: '',
  link: '',
};

export default { HeaderPageLink, HeaderIconLink };
