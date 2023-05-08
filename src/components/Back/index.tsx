import { Box } from '@mui/material';
import Link from 'next/link';
import { KeyboardArrowLeft as Arrow } from '@mui/icons-material';
import React from 'react';

function Back() {
  return (
    <Box sx={{
      a: {
        color: 'text.secondary',
        textDecoration: 'none',
        display: 'flex',
        ':hover': {
          color: 'text.primary',
        },
      },
    }}
    >
      <Link href="/">
        <Arrow />
        Назад
      </Link>
    </Box>
  );
}

export default Back;
