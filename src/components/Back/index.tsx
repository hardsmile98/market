import { Box } from '@mui/material';
import Link from 'next/link';
import { KeyboardArrowLeft as Arrow } from '@mui/icons-material';
import React from 'react';

interface IProps {
  href?: string
  text?: string
}

function Back({ text, href }: IProps) {
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
      <Link href={href || '/'}>
        <Arrow />
        {text || 'Назад'}
      </Link>
    </Box>
  );
}

export default Back;
