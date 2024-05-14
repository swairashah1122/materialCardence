import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Logo from '../bg/logo.png';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: '5%',
    // backgroundColor: 'black',
    color: 'white',
    width: '100%',
    height: '400px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row', // Adjust for row direction
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', // Change to column for small screens
    },
  },
  box: {
    marginTop: '4%',
    marginLeft: '45px',
    marginBottom: theme.spacing(2),
    flexDirection: 'row',
    alignItems: 'center',
    flex: '0', // Make each box take equal space
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', // Change to column for small screens
      flex: 'unset', // Reset flex to adjust according to content
      width: '100%', // Adjust width to fit content
      justifyContent: 'space-around', // Adjust spacing between boxes
    },
  },
  logo: {
    width: '200px',
    height: 50,
    marginBottom: theme.spacing(1),
  },
  icon: {
    color: 'white',
    marginRight: theme.spacing(2),
  },
  link: {
    color: 'white',
    fontWeight: '500',
    textDecoration: 'none',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

function Footer() {
  const classes = useStyles();
  const [direction, setDirection] = useState('row'); // State to track direction

  // Function to toggle direction
  const toggleDirection = () => {
    setDirection(direction === 'row' ? 'column' : 'row');
  };

  return (
    <footer
      className={classes.footer}
    >
      <div className={classes.container}>
        {/* First Box */}
        <Box
          className={classes.box}
          style={{
            flexGrow: '0',
            maxWidth: '25%',
            flexBasis: '25%',
          }}
        >
          <img src={Logo} alt="Logo" className={classes.logo} />
          {/* Social Media Icons */}
          <div className={classes.icons}>
            <a href="https://twitter.com/yourTwitterProfile" target="_blank" className={classes.icon}>
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/kaifsons09/" target="_blank" className={classes.icon}>
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100088663974521" target="_blank" className={classes.icon}>
              <FacebookIcon />
            </a>
          </div>
          <h4 className={classes.heading}>Copyright © 2021 | Cardence Limited</h4>
        </Box>

        {/* Second Box */}
        <Box className={classes.box}>
          {/* Heading */}
          <h2 className={classes.heading}>CRDN</h2>
          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <a href="https://bscscan.com/token/0xFa17b330bCC4e7F3E2456996d89A5a54AB044831" className={classes.link}>Token Contract</a>
            <a href="https://www.coingecko.com/en/coins/cardence" className={classes.link}>Coingecko</a>
            <a href="https://coinmarketcap.com/currencies/cardence-io/" className={classes.link}>CoinMarketCap</a>
            <a href="https://nomics.com/assets/crdn-cardence" className={classes.link}>Nomics</a>
            <a href="https://www.coinbase.com/price/cardence-io" className={classes.link}>Coinbase</a>
          </div>
        </Box>

        {/* Third Box */}
        <Box className={classes.box}>
          {/* Heading */}
          <h2 className={classes.heading}>Company</h2>
          {/* Links */}
          <div className={classes.linkBox} style={{ display: 'flex', flexDirection: 'column' }}>
            <a href="https://cardence-testing.netlify.app/disclamier" className={classes.link}>Disclaimer</a>
            <a href="https://cardence-testing.netlify.app/condition" className={classes.link}>Terms and Conditions</a>
            <a href="https://cardence-testing.netlify.app/privacy" className={classes.link}>Privacy Policy</a>
          </div>
        </Box>
        <Box className={classes.box}>
          {/* Heading */}
          <h2 className={classes.heading}>PLATFORM</h2>
          {/* Links */}
          <div className={classes.linkBox} style={{ display: 'flex', flexDirection: 'column' }}>
            <a href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/Cardence%20Full%20Smart%20Contract%20Security%20Audit.pdf" className={classes.link}>Audit Report</a>
            <a href="https://medium.com/cardence" className={classes.link}>Blog</a>
            <a href="https://docs.cardence.io/" className={classes.link}>Whitepaper</a>
          </div>
        </Box>
      </div>
    </footer>
  );
}

export default Footer;