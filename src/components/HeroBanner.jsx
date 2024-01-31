import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import HeroImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column' }} position="relative" p="20px" >
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack> 
  </Box>
  );
};

export default HeroBanner;
