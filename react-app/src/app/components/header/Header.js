import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="Header">
      <div className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <div className="nav-item">MyCompany</div>
          </div>
        </div>
      </div>

      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div className="nav-right nav-menu">

        <a href="/" className="nav-item r-item">Home</a>
        <a href="/faq" className="nav-item r-item">Features</a>
        <a href="/faq" className="nav-item r-item">bout</a>
        <a href="/faq" className="nav-item r-item">FAQ</a>

        <div className="nav-item">
          <p className="control">
            <a href="" className="button is-primary is-outlined">
              <FontAwesomeIcon icon={faDownload} />
              <span>Join Now</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
