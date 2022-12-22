import React from 'react';

import { Box, Typography } from '@mui/material';

type Props = {};

const MainTopBar = (props: Props) => {
  return (
    <div>
      <Typography>
        <Box
          sx={{
            color: '#092E69',
          }}
          fontWeight="fontWeightBold"
          fontSize="h3.fontSize"
        >
          Hello Abhisekh
        </Box>
      </Typography>
      <Typography>
        <Box fontSize="h6.fontSize">
          It seems like you have a lot of work for today. So let’s start
        </Box>
      </Typography>
    </div>
  );
};

export default MainTopBar;
