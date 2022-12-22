import { Box } from '@mui/material';
import React from 'react';

type Props = {
  date: string;
};

const DateCard = ({ date }: Props) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        borderRadius: '8px',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #0A68FF',
        padding: '5px',
        background: 'rgba(10, 104, 255, 0.1)',
      }}
    >
      {date}
    </Box>
  );
};

export default DateCard;
