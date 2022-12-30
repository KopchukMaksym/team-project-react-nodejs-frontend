import React, { useState } from 'react';

import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

import AuthGroup from './AuthGroup';
import { NavLink } from 'react-router-dom';

import style from './Header.module.scss';

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const onOpenMobileMenu = () => setOpenMobileMenu(!openMobileMenu);

  if (openMobileMenu) {
    console.log('in mobile menu');
  }

  return (
    <section className={style.section}>
      <NavLink to="/home">
        <span className={style.logo}>
          pe<span className={style.logo_accent}>t</span>ly
        </span>
      </NavLink>

      <div className={style.navGroup}>
        <Navigation />
        <MobileNavigation onOpenMobileMenu={onOpenMobileMenu} />
      </div>

      <div className={style.authGroup}>{!openMobileMenu && <AuthGroup />}</div>
    </section>
  );
};

export default Header;
