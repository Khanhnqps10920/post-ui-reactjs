import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Header extends PureComponent {
  render() {
    return (
      <header>

        <nav className="top-nav shadow-sm py-3">
          <div className="container">
            <ul className="nav justify-content-between align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="">
                  <img src="/images/logo.svg" alt="Logo Nordic Coder" />
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="add-edit-post.html"><i className="fas fa-plus-circle mr-1"></i>Add new post</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;