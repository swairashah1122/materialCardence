import React from 'react';
import Box from '@material-ui/core/Box';
import Logo from '../bg/logo.png';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Container >
      <Box style={{marginTop:"30px"}}>
      <Box
        style={{
          backgroundColor: '#171218',
          padding: '33px',
          position: 'relative',
          textAlign: 'center',
          width: '85%', // Adjust the width for sm and xs screens
          height: 'auto', // Adjust height to auto for responsiveness
          borderRadius: '50px',
          margin: 'auto', // Center the mainBox horizontally
          
        }}
      >
        <Box
          style={{
            position: 'absolute',
            top: '33px', // Adjust the top position for logo
            left: '50%', // Center the logo horizontally
            transform: 'translateX(-50%)', // Center the logo horizontally
          }}
        >
          <img src={Logo} alt="" />
        </Box>
        <Box
          style={{
            width: '100%', // Adjust the width for sm and xs screens
            backgroundColor: 'black',
            // margin: '90px', // Adjust margin for vertical spacing
            padding: '10px',
            marginTop:"90px"
          }}
        >
          <Box
            style={{
              backgroundColor: '#151515',
              padding: '16px',
            }}
          >
            <Box
              style={{
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '10px',
              }}
            >
              <Box>
                <Box style={{  fontWeight: '400' }}>
                  Staked Amount
                </Box>
              </Box>
              <Box style={{ textAlign: 'right', width: '25%', padding: '16px' }}> {/* Adjust width for different screen sizes */}
                <Box style={{ fontWeight: '400' }}>
                  Withdrawal Time
                </Box>
              </Box>
              <Box style={{ width: '25%', padding: '16px' }}> {/* Adjust width for different screen sizes */}
                <Box style={{ textAlign: 'center',  fontWeight: '400' }}>
                  UnStake
                </Box>
              </Box>
              <Box style={{ width: '25%', padding: '16px' }}> {/* Adjust width for different screen sizes */}
                <Box style={{ textAlign: 'center', fontWeight: '400' }}>
                  Claim
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              backgroundColor: '#1C1C1C',
              padding: '16px',
            }}
          >
            <Box style={{ padding: '10px', color: 'white', fontSize: '20px' }}>
              You have no stake record yet.
            </Box>
          </Box>
        </Box>
      </Box>
      </Box>
    </Container>
  );
};

export default App;
