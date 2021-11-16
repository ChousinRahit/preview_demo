import { Typography, Grid, Paper, Button } from '@material-ui/core';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import EventCard from './components/EventCard';
import { Link as RouterLink } from 'react-router-dom';

function App() {
  const headersData = [
    {
      label: 'Consultant',
      href: '/',
    },
    {
      label: 'Most-Used',
      href: '/',
    },
  ];

  const headersDataM = [
    {
      label: 'Events',
      href: '/',
    },

    {
      label: 'Photos',
      href: '/',
    },

    {
      label: 'Videos',
      href: '/',
    },
  ];

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

  const getMenuButtonsM = () => {
    return headersDataM.map(({ label, href }) => {
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
    <div className="App">
      <Header />
      <Hero />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',

          marginTop: 85,
          marginBottom: 35,
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          color="#3cabff"
          component="h3"
          style={{ fontSize: '2.6em' }}
        >
          Services We Offer
        </Typography>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // marginTop: 25,
          gap: 15,
          marginBottom: 25,
        }}
      >
        <Button
          {...{
            key: 'cc',
            color: 'inherit',
            to: '/',
            component: RouterLink,
          }}
          variant="contained"
          style={{ color: 'black', backgroundColor: '#3cabff', color: 'white' }}
        >
          Customer
        </Button>
        {getMenuButtons()}
      </div>

      <div style={{ width: '85%', margin: 'auto' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <ServiceCard title="Change Rate Category" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <ServiceCard title="No Liability Certification" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <ServiceCard title="Transferring Amount" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <ServiceCard title="Payment Service" />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#aaaaff',
                marginTop: 55,
                marginBottom: 55,
              }}
            >
              View All
            </Button>
          </Grid>
        </Grid>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',

          marginTop: 85,
          marginBottom: 35,
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          color="#3cabff"
          component="h3"
          style={{ fontSize: '2.6em' }}
        >
          Media Highlights
        </Typography>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // marginTop: 25,
          gap: 15,
          marginBottom: 25,
        }}
      >
        <Button
          {...{
            key: 'cc',
            color: 'inherit',
            to: '/',
            component: RouterLink,
          }}
          variant="contained"
          style={{ color: 'black', backgroundColor: '#3cabff', color: 'white' }}
        >
          News
        </Button>
        {getMenuButtonsM()}
      </div>

      <div style={{ width: '85%', margin: 'auto' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <EventCard title="Change Rate Category" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <EventCard title="No Liability Certification" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <EventCard title="Transferring Amount" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <EventCard title="Payment Service" />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#aaaaff',
                marginTop: 55,
                marginBottom: 55,
              }}
            >
              View All
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default App;
