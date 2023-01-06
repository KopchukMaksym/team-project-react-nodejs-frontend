import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getUserFetch } from '../../store/user/userSlice';

import CookiesPopup from '../CookiesPopup';
import Header from '../Header';

import style from './SharedLayout.module.scss';

const SharedLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isSeenCookieBar = document.cookie
    .split('; ')
    .includes('cookieBarSeen=true');

  return (
    <div className={style.layoutContainer}>
      <div className={style.headerContainer}>
        <Header />
      </div>

      <div className={style.outlets}>
        <Outlet />
      </div>

      {!isSeenCookieBar && <CookiesPopup />}
    </div>
  );
};

export default SharedLayout;
