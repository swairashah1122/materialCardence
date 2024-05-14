import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BSC from '../bg/bsc.png';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    '&:hover': {
      backgroundColor: 'inherit !important', // Set background to transparent to disable hover effect
    },
  },
}));

const HomeSection = () => {
  const classes = useStyles();


  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator-section');
    if (calculatorSection) {
      const topOffset = calculatorSection.getBoundingClientRect().top;
      window.scrollTo({ top: window.scrollY + topOffset, behavior: 'smooth' });
    }
  };
  

  return (
    <Box
      maxWidth={'1280px'}
      margin="auto"
      display="flex"
      alignItems={"center"}
      mt={"100px"}
      justifyContent="center"
      flexDirection={{ xs: 'column', sm: 'column', md: 'column', lg: "row" }}
    >
      {/* Left Box */}
      <Box
        mt={"60px"}
        flexGrow={1}
        ml={"5%"}
        maxWidth={'100%'}
        flexBasis={'100%'}
        marginBottom={{ xs: '24px', sm: '24px', md: '0' }}
      >
        <h3 style={{ color: "white", fontWeight: 700, zoom: "2" }}>Cardence Staking Dashboard</h3>
        <Button
      onClick={scrollToCalculator}
      sx={{ p: "10px 40px", color: "white", background: "#AB41BF", borderRadius: "24px",boxShadow: "0 0 15px rgba(227, 23, 211, 0.7)", '&:hover': { backgroundColor: "#AB41BF" } }}
    >
      Stack CRDN
    </Button>
        <h3 style={{ color: "white", display: "flex", alignItems: "center", marginLeft: "8px" }}>
          Powered By
          <img style={{ width: "40px", marginLeft: "10px", marginRight: "10px" }} src={BSC} alt="" width={"40px"} />
          BSC
        </h3>
      </Box>

      {/* Right Box */}
      <Box
        mt={{ xs: '24px', sm: '24px', md: '24px' }}
        style={{ position: "relative" }}
        flexGrow={0}
        marginLeft={"40px"}
        justifyContent={"center"}
        maxWidth={"90%"}
        flexBasis={"41.666667%"}
        backgroundColor={"#490D6C"}
        borderRadius={'24px'}
      >
        <Box
          id="calculator-section"
          style={{
            border: '2px solid rgba(128,0,211,1)',
            borderRadius: '24px',
            padding: '24px',
          }}
        >
          <Box
            style={{
              // border: '3px solid #8000D3',
              display: 'flex',
              padding: '80px 24px',
              alignItems: 'center',
              // justifyContent: "space-between"
            }}
          >
            <Box>
              <h3 style={{ color: "white", fontSize: "14px" }}>CRDN STAKED</h3>
              <h3 style={{ fontSize: "24px", color: "white" }}>8632076
                <span style={{ fontSize: "12px", fontWeight: "300" }}>CRDN</span>
              </h3>
              <h3 style={{ color: "white", fontSize: "14px" }}>CRDN STAKED BNB</h3>
              <h3 style={{ fontSize: "24px" }}>
                <span style={{ fontSize: "12px", fontWeight: "300", color: "white" }}>BNB</span>
              </h3>
            </Box>
            <Box >
              <h3 style={{ color: "white", fontSize: "14px" }}>HRDN STAKERS</h3>
              <h3 fontSize={'24px'} style={{ color: 'white' }}>2368</h3>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSection;

