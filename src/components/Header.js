import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import React, { Fragment, useState } from 'react';
import LOGO from '../assets/img/etihaWater.png';
import { Link as RouterLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

export default function Header() {
  const matches = useMediaQuery('(max-width:600px)');

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(prev => !prev);
  };
  const headersData = [
    {
      label: 'About Us',
      href: '/about_us',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'E-Participation',
      href: '/',
    },
    {
      label: 'Media Center',
      href: '/',
    },

    {
      label: 'Procurement',
      href: '/',
    },
    {
      label: 'Open Data',
      href: '/',
    },

    {
      label: 'Contact Us',
      href: '/',
    },
  ];

  const displayDesktop = () => {
    return (
      <Toolbar
        style={{
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: matches ? 'space-between' : 'space-around',
        }}
      >
        <img
          src={LOGO}
          alt="wertyuio"
          style={{ width: matches ? 180 : 'auto' }}
        />

        <HamburgerMenu
          isOpen={menuOpen}
          menuClicked={() => handleMenuClick()}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        />
        {!matches && (
          <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <Fragment>
              {getMenuButtons()}
              <Button
                {...{
                  key: 'search',
                  color: 'inherit',
                  to: '/',
                  component: RouterLink,
                }}
                style={{ color: 'black' }}
              >
                <SearchRounded />
              </Button>
            </Fragment>
          </div>
        )}
      </Toolbar>
    );
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: 'inherit',
            to: href,
            component: RouterLink,
          }}
          style={{ color: 'black' }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header style={{ width: '85%' }}>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
