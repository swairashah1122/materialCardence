import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
   
  const handleTwitterClick = () => {
    window.location.href = 'https://twitter.com/yourTwitterProfile';
  };
  const handleGitHubClick = () => {
    window.location.href = 'https://github.com/swairashah1122';
  };
  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/kaifsons09/';
  };
  const handleYouTubeClick = () => {
    window.location.href = 'https://www.youtube.com/channel/UCQajTDFOjWlJm8T77awaAxg';
  };



  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#03207E", color: "white", p: 3, }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon onClick={handleInstagramClick}/>
          <TwitterIcon onClick={handleTwitterClick} />
          <GitHubIcon onClick={handleGitHubClick} />
          <YouTubeIcon onClick={handleYouTubeClick}/>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Swaira Jameel
        </Typography>
      </Box>
    </>
  );
};

export default Footer;