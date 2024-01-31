import { WidthFull } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {

  return (
    <footer style={{backgroundColor:'yellow',padding:'20px', width:"100%"}}>
      <Typography variant="h6" align="center" gutterBottom>
        My Website
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Made with love by me
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}
        <Link color="inherit" href="#">
          My Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  );
};

export default Footer;