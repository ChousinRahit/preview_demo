import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import React, { Fragment } from 'react';
import LOGO from '../assets/img/etihaWater.png';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
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
          justifyContent: 'space-around',
        }}
      >
        <img src={LOGO} alt="wertyuio" />
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
