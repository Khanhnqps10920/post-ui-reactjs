import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="text-center text-muted py-3">
        <small>Created by Khánk with <i className="fas fa-heart"></i></small>
      </footer>
    );
  }
}

Footer.propTypes = {

};

export default Footer;