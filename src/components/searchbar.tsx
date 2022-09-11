import React from 'react';
import { IconButton, InputBase, Paper } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

interface searchBarProps {
   searchFunc: React.MouseEventHandler<HTMLButtonElement>;
   paperProps?: any;
}

let typingTimer: number;
const doneTypingInterval = 400;

export default function SearchBar({
   searchFunc,
   paperProps,
}: searchBarProps): any {
   const countdownSearch: React.ChangeEventHandler<
      HTMLInputElement | HTMLTextAreaElement
   > = e => {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(searchFunc, doneTypingInterval);
   };

   return (
      <Paper
         component="div"
         sx={{
            m: 0,
            p: '2px 2px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'primary.dark',
            ...paperProps,
         }}
      >
         <InputBase
            id="search"
            sx={{
               ml: 1,
               flex: 1,
               width: 'auto',
               color: 'secondary.contrastText',
               fontFamily: ['Helvetica Neue', 'Poppins', 'Poppins'],
            }}
            placeholder="no lentils? 🥺"
            inputProps={{ 'aria-label': 'search recipes' }}
            onChange={countdownSearch}
         />
         <IconButton
            type="button"
            sx={{ p: '10px' }}
            aria-label="search"
            onClick={searchFunc}
         >
            <SearchIcon />
         </IconButton>
      </Paper>
   );
}
