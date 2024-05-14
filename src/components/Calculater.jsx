import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Container, Snackbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CRDNCalculator = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleButtonClick = (duration) => {
    setSelectedButton(duration);
  };

  const handleConnectWallet = () => {
    setErrorOpen(true);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorOpen(false);
  };

  return (
    <Box 
    id="calculator-section"
    display={"flex"}
    alignItems={"center"}
     justifyContent={"center"}
    >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor={"#161117"}
      marginTop={"20%"}
      justifyContent="center"
      width={{sx:"100%",xs:'100%',md:"100%",lg:"40%"}}
      borderRadius={'50px'}
      color="white"
      paddingX={{ xs: 2, sm: 2, md: 6 }} // Responsive horizontal padding
      paddingTop={10} // Static padding for top
      paddingBottom={5}
    >
      <Typography variant="h4" gutterBottom>
        <strong>$CRDN Calculator</strong>
      </Typography>
      <Typography variant="body1" gutterBottom 
       textAlign={'center'}
       width={{xs:"100%",md:"60%"}}
      >
        Calculate your $CRDN depending on the amount of staked tokens and your lock time.
      </Typography>

      {/* Main Box */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'column', md: 'column' }} // Adjust flex direction based on screen size
        alignItems="center"
        justifyContent="center"
        width={{xs:"80%",md:"50%",lg:"40%"}}
        bgcolor="#101010"
        marginTop={4}
        padding={2}
      >
        {/* Left Side */}
        <Box
          width={{ xs: '100%', md: '50%' }} // Adjust width based on screen size
          height="15%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
        >
          <Typography variant="h6">CRDN</Typography>
        </Box>

        {/* Right Side */}
        <Box
          width={{ xs: '100%', md: '50%' }} // Adjust width based on screen size
          height="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
            flexDirection={{xs:'column',sm:"column",lg:"column"}}
          >
          <input
            type="number"
            placeholder="5000"
            style={{
              width: '80%',
              height: '50%',
              padding: '15px',
              fontSize: '16px',
              textAlign: 'center',
              color: '#67472F',
              backgroundColor: '#211A22',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </Box>
      </Box>

      {/* Lock Tokens Box */}
   <Box
      width={{ xs: '90%', md: '70%', lg: "50%" }} // Adjust width based on screen size
      bgcolor="#101010"
      marginTop={2}
      padding={3}
      display="flex"
      flexDirection={{ xs: "column", sm: "column", lg: "column" }}
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h6" gutterBottom>
        Lock Tokens For
      </Typography>
      <Box
        display="flex"
        justifyContent="space-around"
        width="100%"
        marginBottom={2}
        flexWrap={{ xs: "nowrap", md: "wrap" }} // Wrap buttons on smaller screens
      >
        <Button
          variant={selectedButton === '30 Days' ? "contained" : "outlined"}
          size="small"
          onClick={() => handleButtonClick('30 Days')}
          sx={{ backgroundColor: selectedButton === '30 Days' ? '#AB41BF' : 'transparent', color: 'white' }}
        >
          30 Days
        </Button> 
        <Button
          variant={selectedButton === '60 Days' ? "contained" : "outlined"}
          size="small"
          onClick={() => handleButtonClick('60 Days')}
          sx={{ backgroundColor: selectedButton === '60 Days' ? '#AB41BF' : 'transparent', color: 'white' }}
        >
          60 Days
        </Button> 
        
        <Button
          variant={selectedButton === '90 Days' ? "contained" : "outlined"}
          size="small"
          onClick={() => handleButtonClick('90 Days')}
          sx={{ backgroundColor: selectedButton === '90 Days' ? '#AB41BF' : 'transparent', color: 'white' }}
        >
          90 Days
        </Button>
        {/* Add similar buttons for other durations */}
      </Box>
      <Button
        variant={selectedButton === '180 Days' ? "contained" : "outlined"}
        size="small"
        onClick={() => handleButtonClick('180 Days')}
        sx={{ backgroundColor: selectedButton === '180 Days' ? '#AB41BF' : 'transparent', color: 'white' }}
      >
        180 Days
      </Button>
    </Box>

      <ArrowDownwardIcon />
      <Typography variant="body1" align="center" marginTop={3} marginBottom={2}>
        0 $CRDN
      </Typography>
      <Typography variant="body1" align="center" marginBottom={2}>
        Locked Until 06/06/2024 10:37am
      </Typography>

      {/* Connect Wallet Button */}
      <Box
        display="flex"
        justifyContent="center"
        width={{ xs: '100%', md: '50%' }} // Adjust width based on screen size
        marginTop={2}
      >
        <Button
          variant="contained"
          size="small"
          onClick={handleConnectWallet}
          sx={{ width: '100%', backgroundColor: '#C179E7', color: 'black', fontSize: '20px', fontWeight: '600' }}
        >
          Connect Wallet
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={errorOpen}
          autoHideDuration={6000}
          onClose={handleCloseError}
          message="Error! Please connect your wallet"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseError}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </Box>
    </Box>
     </Box>
  );
};

export default CRDNCalculator;
