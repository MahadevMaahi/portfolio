import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
import { FaInfo, FaBriefcase } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { VscGithubAlt } from 'react-icons/vsc';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { TiContacts } from 'react-icons/ti';

const NAV_ITEMS = [
  { to: '/home', icon: <BiHome />, label: 'Home' },
  { to: '/aboutMe', icon: <FaInfo />, label: 'About' },
  { to: '/experience', icon: <FaBriefcase />, label: 'Experience' },
  { to: '/skillSet', icon: <GiSkills />, label: 'Skills' },
  { to: '/projects', icon: <VscGithubAlt />, label: 'Projects' },
  { to: '/certifications', icon: <AiOutlineSafetyCertificate />, label: 'Certs' },
  { to: '/contactMe', icon: <TiContacts />, label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav>
        <NavLink to="/home" className="nav-brand" onClick={() => setMenuOpen(false)}>
          SM
        </NavLink>

        <ul className="nav-links">
          {NAV_ITEMS.map(({ to, icon, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''}>
                {icon} {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <ul className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map(({ to, icon, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {icon} {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
