import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Button, CardMedia, IconButton, Typography } from '@mui/material';
import logo from '../cow.svg';

interface tabProps {
   tab: string;
   selectedTab?: string;
}

function OneTab({ tab, selectedTab }: tabProps): any {
   return (
      <IconButton
         component={RouterLink}
         to={`/${tab === 'home' ? '' : tab}`}
         disableRipple
         className={selectedTab === tab ? '' : 'Translucent'}
         sx={{
            display: 'inline-block',
            width: '200px',
            height: '100%',
            textAlign: 'center',
            '&.Translucent': {
               '& svg': {
                  opacity: '60%',
               },
               '&:hover svg': {
                  opacity: '70%',
               },
            },
         }}
      >
         <Typography
            sx={{
               position: 'relative',
               top: '10%',
               color: 'primary.lightContrastText',
               fontSize: '1.4rem',
            }}
         >
            {tab}
         </Typography>
      </IconButton>
   );
}

export function TabBar(props: tabProps): any {
   return (
      <Box
         component="div"
         sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'left',
            top: '0px',
            width: '100%',
            height: '59px',
            backgroundColor: 'secondary.moss',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
         }}
      >
         <Button
            component={RouterLink}
            to="/"
            sx={{
               maxHeight: '59px',
               width: '100px',
            }}
         >
            <CardMedia
               image={logo}
               sx={{ height: '40px', width: '40px', mt: '10px' }}
            />
         </Button>
         <OneTab tab="home" selectedTab={props.tab} />
         <OneTab tab="swap" selectedTab={props.tab} />
         <OneTab tab="argue" selectedTab={props.tab} />
         <OneTab tab="info" selectedTab={props.tab} />
      </Box>
   );
}
