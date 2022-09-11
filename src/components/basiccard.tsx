import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

// const bull = (
//    <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//    >
//       •
//    </Box>
// );

interface cardProps {
   title: string;
   desc: string;
   to: string;
   onClick: Function;
   image?: string;
}

export function ArgumentsCard({
   title,
   desc,
   to,
   onClick,
   image,
}: cardProps): any {
   let thisImage: string;
   if (image !== undefined) {
      thisImage = `url("${image}")`;
   } else {
      thisImage =
         'linear-gradient(25deg, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)';
   }
   console.log(thisImage);

   return (
      <CardContent sx={{ display: 'flex', flex: 1, flexGrow: 2 }}>
         <Button
            component={RouterLink}
            to={`/` + to}
            onClick={() => {
               onClick();
            }}
            sx={{
               flex: 1,
               height: '200px',
               minWidth: 180,
               transition: '0.5s ease-out',
               color: '#eafaf8',
               backgroundImage: thisImage,
               '&:hover': {
                  boxShadow: '0 4px 10px rgba(100,100,100,0.2)',
                  transform: 'translate3d(0,-3px,0)',
                  backgroundImage:
                     'linear-gradient(20deg, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)',
               },
            }}
         >
            <CardActions
               sx={{
                  display: 'flex',
                  alignSelf: 'center',
                  flexDirection: 'column',
               }}
            >
               <Typography variant="h4" component="div">
                  {title}
               </Typography>
               {desc}
            </CardActions>
         </Button>
      </CardContent>
   );
}
