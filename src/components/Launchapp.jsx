import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const CountdownTimer = () => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const countdownDate = new Date('2022-09-30T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days < 10 ? `0${days}` : days);
      setHours(hours < 10 ? `0${hours}` : hours);
      setMinutes(minutes < 10 ? `0${minutes}` : minutes);
      setSeconds(seconds < 10 ? `0${seconds}` : seconds);
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box display="flex" justifyContent="center" mt={40}>
      <Box bgcolor={'black'} color={'blue'} border="3px solid purple" p={2} >
        <Typography variant="h6" gutterBottom>
          Hey! This is Cardence decentralized launchpad.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I am going live on BSC mainnet on 30th September.
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <CountdownBox label="Days" value={days} />
          <CountdownBox label="Hours" value={hours} />
          <CountdownBox label="Minutes" value={minutes} />
          <CountdownBox label="Seconds" value={seconds} />
        </Box>
      </Box>
    </Box>
  );
};

const CountdownBox = ({ label, value }) => (
  <Box width={'200px'} border="1px solid black" p={1} borderRadius={5} textAlign="center">
    <Typography variant="contained" gutterBottom>
      {label}
    </Typography>
    <Typography variant="h6" gutterBottom>
      {value}
    </Typography>
  </Box>
);

const LaunchPad = () => {
  return (
    <div>
      <CountdownTimer />
    </div>
  );
};

export default LaunchPad;
