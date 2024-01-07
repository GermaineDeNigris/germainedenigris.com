import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    const scrollToSection = () => {
      // Determine if the device is mobile
      const isMobile = window.innerWidth <= 768;

      // If mobile and the clicked section is 'projects', change to 'mobile-projects'
      if (isMobile && sectionId === 'projects') {
        sectionId = 'mobile-projects';
      }

      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = isMobile ? 100 : 60;
        let sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;

        if (window.location.pathname.includes('product')) {
          sectionPosition = 0;
        } else {
          sectionPosition -= headerOffset;
        }

        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth',
        });
      }
    };

    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToSection, 0); // Timeout to allow the page to load
    } else {
      scrollToSection();
    }
  };


  return (
    <header className="header">
      <div className="header__content">
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper tan" onClick={() => handleNavigation('top')}>
              <span className="header__link">Home</span>
            </li>
            <li className="header__link-wrapper orange" onClick={() => handleNavigation('projects')}>
              <span className="header__link">Projects</span>
            </li>
            <li className="header__link-wrapper brick" onClick={() => handleNavigation('about')}>
              <span className="header__link">About</span>
            </li>
            <li className="header__link-wrapper eggplant" onClick={() => handleNavigation('contact')}>
              <span className="header__link">Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;