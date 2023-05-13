import { Box } from '@mui/material';
import Link from 'next/link';
import Arrow from '@mui/icons-material/KeyboardArrowLeft';
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
        display: 'inline-flex',
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
