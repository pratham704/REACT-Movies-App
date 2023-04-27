import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { useEffect } from 'react';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TheatersIcon from '@mui/icons-material/Theaters';
import SearchIcon from '@mui/icons-material/Search';

import "./Footer.css";
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {

  const [value, setValue] = React.useState(0);
  const Navigate= useNavigate();

  useEffect(() => {
    if (value === 0) {
      Navigate("/");
    } else if (value === 1) {
      Navigate("/work");
    } else if (value === 2) {
      Navigate("/series");
    } else if (value === 3) {
      Navigate("/search");
    }
  }, [value, Navigate]);
  

  return (


    <div className='Main'>
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
          <BottomNavigationAction label="Trending" icon  ={< WhatshotIcon/>} />
        <BottomNavigationAction label="Movies" icon={<MovieCreationIcon />} />
        <BottomNavigationAction label="Series" icon={< TheatersIcon/>} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      

      </BottomNavigation>
    </Box>
    </div>
  );
}