import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:"10%",
    paddingBottom:"10%",
    // backgroundColor: "black",
    height: '90%', // Adjust the height as needed
  },
  mainBox: {
    backgroundColor: '#19141B',
    borderRadius: "60px",
    width: '70%', // Adjust the width as needed
    height: "530px",
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row', // Initial flex direction is column
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column', // Change flex direction to row for small screens
    },
  },
  subBox: {
    width: '46%', // Adjust the width as needed
    backgroundColor: 'black',
    borderRadius: "40px",
    // height: "100%",
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '90%', // Adjust width to 100% for row layout
      height: '90%', // Set height to auto to fit content for row layout
    },
  },
  innerBox: {
    backgroundColor: '#19141B',
    borderRadius: "30px",
    width: "100%",
    height: '50%', // Adjust the height as needed
    margin: "10px 0"
  },
}));

const MyComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box className={classes.mainBox}>
        <Box className={classes.subBox}>
          <Box className={classes.innerBox}>
            <h2 style={{ color: "white", textAlign: "center" }}>CRDN Earned</h2>
            <span style={{ fontSize: "30px", fontWeight: "700", color: "purple", marginLeft: "41%" }} >0.00</span>
          </Box>
          <Box className={classes.innerBox} display={"inline-block"}>
            <h2 style={{ color: "white", textAlign: "center" }}>Claimed Reward</h2>
            <span style={{ fontSize: "30px", fontWeight: "700", color: "purple", marginLeft: "50%" }} >0</span>
          </Box>
        </Box>
        <Box className={classes.subBox}>
          <Box className={classes.innerBox}>
            <h2 style={{ color: "white", textAlign: "center" }}>Your CRDN Wallet Balance</h2>
            <span style={{ fontSize: "30px", fontWeight: "700", color: "purple", marginLeft: "47%" }} >0</span>
          </Box>
          <Box className={classes.innerBox}>
            <h2 style={{ color: "white", textAlign: "center" }}>Total Staked</h2>
            <span style={{ fontSize: "30px", fontWeight: "700", color: "purple", marginLeft: "47%" }} >0</span>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MyComponent;
