import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid  item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h5" gutterBottom>
          Company
        </Typography>
        <Typography variant="body2" className='pb-5'component="p" gutterBottom>
          About
        </Typography>
        <Typography variant="body2" className='pb-5'component="p" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body2" className='pb-5'component="p" gutterBottom>
          Jobs
        </Typography>
        <Typography variant="body2" className='pb-5'component="p" gutterBottom>
          Press
        </Typography>
        <Typography variant="body2" className='pb-5'component="p" gutterBottom>
          Partners
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h5" gutterBottom>
          Solutions
        </Typography>
        <Typography className='pb-5'variant="body2" component="p" gutterBottom>
          Marketing
        </Typography>
        <Typography className='pb-5'variant="body2" component="p" gutterBottom>
          Analytics
        </Typography>
        <Typography className='pb-5' variant="body2" component="p" gutterBottom>
          Commerce
        </Typography>
        <Typography className='pb-5'variant="body2" component="p" gutterBottom>
          Insights
        </Typography>
        <Typography className='pb-5'variant="body2" component="p" gutterBottom>
          Support
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h5" gutterBottom>
          Documentation
        </Typography>
        <Typography className='pb-5'variant="body2" component="p" gutterBottom>
          Guides
        </Typography>
        <Typography className='pb-5'variant="body2" component="p" gutterBottom>
          API Status
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h5" gutterBottom>
          Legal
        </Typography>
        <Typography className='pb-5'variant="body2" component="p" gutterBottom>
          Claim
        </Typography>
        <Typography className='pb-5'variant="body2" component="p" gutterBottom>
          Privacy
        </Typography>
        <Typography className='pb-5'variant="body2" component="p" gutterBottom>
          Terms
        </Typography>
      </Grid>
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2023 BOSS DESIGNER HUB. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          made by{' '}
          <Link href="https://d-achuth.web.app/" color="inherit" underline="always">
            BOSS Social Media 
          </Link>{' '}
          from{' '}
          <Link href="http://boss-ongole.web.app/" color="inherit" underline="always">
            BOSS DESIGNER HUB - ONGOLE
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
