import React, { useMemo } from 'react';
import logo from './cow.svg';
import './App.css';
import { ArgumentsCard } from './components/basiccard'; // , ResourcesCard
import { TabBar } from './components/tabbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Argue from './pages/argue';
import Swap from './pages/swap';
import Info from './pages/info';
import getTheme from './theme';
import { Box, Container, ThemeProvider, Typography } from '@mui/material';

function App(): any {
   //  const [mode, setMode] = useState<PaletteMode>('light');
   //  const colorMode = useMemo(
   //     () => ({
   //        toggleColorMode: () => {
   //           setMode((prevMode: PaletteMode) =>
   //              prevMode === 'light' ? 'dark' : 'light'
   //           );
   //        },
   //     }),
   //     []
   //  );

   const theme: any = useMemo(() => getTheme('light'), ['light']);

   return (
      <ThemeProvider theme={theme}>
         <div className="App">
            <BrowserRouter>
               <TabBar tab="home" />
               <Routes>
                  <Route
                     path="/home"
                     element={<header className="App-header" />}
                  />
                  <Route path="/swap" element={<Swap />} />
                  <Route path="/argue" element={<Argue />} />
                  <Route path="/info" element={<Info />} />
                  <Route
                     path="/"
                     element={
                        <Container
                           disableGutters
                           sx={{
                              backgroundColor: 'primary.dark',
                              height: 'calc(100vh - 59px)',
                              width: '100vw',
                              margin: 0,
                              padding: '10px 0px',
                           }}
                        >
                           <img
                              src={logo}
                              style={{ height: 50, margin: '20px' }}
                              className="App-logo"
                              alt="logo"
                           />
                           <Typography
                              sx={{
                                 fontSize: '2rem',
                                 color: 'primary.contrastText',
                              }}
                           >
                              Hello earthling! Welcome.
                           </Typography>
                           <Box
                              sx={{
                                 display: 'flex',
                                 placeContent: 'space-around center',
                                 flexWrap: 'wrap',
                                 backgroundColor: 'primary.dark',
                                 margin: 2,
                              }}
                           >
                              <ArgumentsCard
                                 title={'Debate'}
                                 desc={'respond to anti-vegan arguments.'}
                                 to={'argue'}
                                 onClick={() => {}}
                              ></ArgumentsCard>
                              <ArgumentsCard
                                 title={'Learn'}
                                 desc={'Videos and information.'}
                                 to={'info'}
                                 onClick={() => {}}
                              ></ArgumentsCard>
                              <ArgumentsCard
                                 title={'Swap'}
                                 desc={'Use vegan options'}
                                 to={'swap'}
                                 onClick={() => {}}
                              ></ArgumentsCard>
                           </Box>
                        </Container>
                     }
                  />
               </Routes>
            </BrowserRouter>
         </div>
      </ThemeProvider>
   );
}

export default App;
