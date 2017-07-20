import React from 'react';
import GithubLogo from '../styles/Github.png';

const Footer = () => (
  <div className='footer'>
    <a href='https://github.com/axelfeldmann' className='github-logo'>
      <img src={ GithubLogo } alt='github'/>
    </a>
  </div>
);

export default Footer;