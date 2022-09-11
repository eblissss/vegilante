import { Box, Container, LinearProgress, Typography } from '@mui/material';
import React, { useState } from 'react';
import SearchBar from '../components/searchbar';

const respondToArgument = (argument: string): string => {
   console.log(argument);

   if (argument.includes('taste')) {
      return "Animal products can be tasty. But knowing where they come from, it's easy to see that looking for alternatives or ordering a veggie burger instead is absolutely preferable to the abuse that would have happened otherwise.";
   } else if (argument.includes('natural')) {
      return "You are reading this on an electronic device, which definitely isn't natural either. And just because something is natural doesn't mean it is good, like violence between people.";
   } else if (argument.includes('b12')) {
      return 'Most people in the US are low on B12, not just vegans. This is because B12 comes from bacteria found in dirt, and most food these days is much cleaner than it was in the past. B12 can be found in nutritional yeast, fortified plant milk, and other sources.';
   } else if (argument.includes('love')) {
      return 'If someone loves animals, they would stop paying for their slaughter. Animals too are capable of feeling joy and pain, love and suffering, and we should be considerate to that.';
   } else if (argument.includes('tradition') || argument.includes('culture')) {
      return 'Someone could use the argument of tradition to justify any immoral practice, like dogfighting or animal sacrifices.';
   } else if (argument.includes('ancestors') || argument.includes('past')) {
      return "Just because our ancestors did something doesn't give us justification to do it ourselves. Do you still have to eat animals in order to survive?";
   } else if (argument.includes('overpopulate')) {
      return 'We breed animals into existence for the purpose of slaughtering them. Not everyone will go vegan at the same time, but farmers will reduce the number of animals they buy over time.';
   } else if (argument.includes('more important')) {
      return "Although many people may value animals less than humans, in this case, it just isn't a choice between one or the other. Going vegan has a positive impact on both human and animal rights.";
   } else if (argument.includes('plants feel')) {
      return "Plants lack a central nervous system, which is critical for the sensation of pain. Even if they could, almost 80% of the world's soybean crop is fed to livestock, according to WWF. So if you really want to stop plant suffering, you should go vegan.";
   } else if (argument.includes('food chain')) {
      return "Just because you can choose to exploit someone doesn'nt mean that you should. The argument of the food chain stems from might-makes-right, which is an attitude that was used to justify many other atrocities throughout history.";
   }

   return "Just try anyway o' buddy o' pal";
};

function argue(): any {
   const [loading, setLoading] = useState(false);
   const [response, setResponse] = useState('');

   function search(): any {
      setLoading(true);
      const searchVal = (document.getElementById('search') as HTMLInputElement)
         .value;
      const res = respondToArgument(searchVal.toLowerCase());
      setResponse(res);
      setLoading(false);
   }

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
               <Typography variant="h3" component="h3" className="BigTitle">
                  {"Why aren't you vegan yet?"}
               </Typography>
               <SearchBar
                  searchFunc={search}
                  paperProps={{
                     mt: '18px',
                     width: '100%',
                  }}
               />
               {loading ? (
                  <LinearProgress />
               ) : (
                  <Typography variant="h3" component="h3" className="Title">
                     {response}
                  </Typography>
               )}
            </Container>
         </Container>
      </Box>
   );
}

export default argue;
