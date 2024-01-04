import React from 'react';
import LinkedInIcon from '../assets/icons/linkedin-ico.png';
import InstagramIcon from '../assets/icons/insta-ico.png';
import GithubIcon from '../assets/icons/github-ico.png';


function Footer() {
    return (
<footer className="main-footer">
<div className="main-container">
  <div className="main-footer__upper">
    <div className="main-footer__row main-footer__row-1">
      <h2 className="heading heading-sm main-footer__heading-sm">
        <span>Social</span>
      </h2>
      <div className="main-footer__social-cont">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/germaine-denigris/">
          <img
            className="main-footer__icon"
            src={LinkedInIcon}
            alt="linkedin icon"
          />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/GermaineDeNigris">
          <img
            className="main-footer__icon"
            src={GithubIcon}
            alt="github icon"
          />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/arkins/">
          <img
            className="main-footer__icon main-footer__icon--mr-none"
            src={InstagramIcon}
            alt="instagram icon"
          />
        </a>
      </div>
    </div>
    <div className="main-footer__row main-footer__row-2">
      <h4 className="heading heading-sm text-lt">Germaine DeNigris</h4>
      <p className="main-footer__short-desc">
        Email: germainedenigris@gmail.com
        <br />
        Phone: +33 07 49 21 33 45
      </p>
    </div>
  </div>
</div>
</footer> 
  );
}

export default Footer;