import React from 'react';
import OcculusLogo from '../assets/oculus-vr-24.png';
import GithubLogo from '../assets/icons8-github-24.png';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About Us</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <img src={GithubLogo} />
          </a>
          <a>
            <img src={OcculusLogo} />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by Memory Lane</p>
      </div>
    </footer>
  );
};

export default Footer;
