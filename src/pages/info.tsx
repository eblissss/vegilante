import { Box, Container, Typography } from '@mui/material';
import React from 'react';

function info(): any {
   return (
      <Box
         component="div"
         sx={{
            backgroundColor: 'primary.main',
         }}
      >
         <Container
            id="BACKGROUND"
            sx={{
               p: '30px',
               minHeight: 'calc(100vh - 59px)',
            }}
         >
            <Container
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <Typography
                  variant="h3"
                  component="h3"
                  className="BigTitle"
                  sx={{ margin: '10px' }}
               >
                  Resources to Explore
               </Typography>
               <Container sx={{}}>
                  <Typography>Videos to Watch</Typography>
                  <Box
                     sx={{
                        display: 'flex',
                        backgroundColor: 'primary.dark',
                        margin: '10px',
                        p: '15px',
                        borderRadius: '5px',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                  >
                     <iframe
                        width="500"
                        height="300"
                        src="https://www.youtube.com/embed/byTxzzztRBU"
                        title="Every Argument Against Veganism | Ed Winters | TEDxBathUniversity"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ flex: '1' }}
                     ></iframe>
                     <Typography
                        sx={{
                           pl: '10px',
                           color: 'primary.contrastText',
                           flex: 1,
                        }}
                     >
                        In this video, lorem ipsum dolor i dont know the rest
                        lalalala in a world where therea re opposites of
                        opposites
                     </Typography>
                  </Box>
                  <Box
                     sx={{
                        display: 'flex',
                        backgroundColor: 'primary.dark',
                        margin: '10px',
                        p: '15px',
                        borderRadius: '5px',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                  >
                     <Typography
                        sx={{
                           pr: '10px',
                           color: 'primary.contrastText',
                           flex: 1,
                        }}
                     >
                        In this video, lorem ipsum dolor i dont know the rest
                        lalalala in a world where therea re opposites of
                        opposites
                     </Typography>
                     <iframe
                        width="500"
                        height="300"
                        src="https://www.youtube.com/embed/ao2GL3NAWQU"
                        title="The Secret Reason We Eat Meat - Dr. Melanie Joy"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     ></iframe>
                  </Box>
                  <Box
                     sx={{
                        display: 'flex',
                        backgroundColor: 'primary.dark',
                        margin: '10px',
                        p: '15px',
                        borderRadius: '5px',
                        justifyContent: 'center',
                        alignItems: 'center',
                     }}
                  >
                     <iframe
                        width="500"
                        height="300"
                        src="https://www.youtube.com/embed/byTxzzztRBU"
                        title="Every Argument Against Veganism | Ed Winters | TEDxBathUniversity"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ flex: '1' }}
                     ></iframe>
                     <Typography
                        sx={{
                           pl: '10px',
                           color: 'primary.contrastText',
                           flex: 1,
                        }}
                     >
                        In this video, lorem ipsum dolor i dont know the rest
                        lalalala in a world where therea re opposites of
                        opposites
                     </Typography>
                  </Box>
               </Container>
            </Container>
         </Container>
      </Box>
   );
}

export default info;
