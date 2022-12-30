import React, { useState } from 'react';
import NavigationLinks from './NavigationLinks';

import sprite from '../../images/sprite.svg';
import style from './Header.module.scss';
import PhoneAuthGroup from './PhoneAuthGroup';

const MobileNavigation = ({ onOpenMobileMenu }) => {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={style.MobileNavigation}>
      <button
        type="button"
        className={style.burger}
        onClick={() => {
          setOpen(!open);
          onOpenMobileMenu();
        }}
      >
        {open ? (
          <svg className={style.burgerIcon} width="40" height="40">
            <use href={sprite + '#crossIconCloseHomeModal'} />
          </svg>
        ) : (
          <svg className={style.burgerIcon} width="40" height="40">
            <use href={sprite + '#burgerMenuIcon'} />
          </svg>
        )}
      </button>

      {open && (
        <>
          <PhoneAuthGroup />
          <NavigationLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
        </>
      )}
    </nav>
  );
};

export default MobileNavigation;
