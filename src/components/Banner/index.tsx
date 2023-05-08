'use client';

import { Box } from '@mui/material';
import Image from 'next/image';

const styles = {
  root: {
    img: {
      width: '100%',
      height: '100%',
      borderRadius: 6,
    },
  },
};

function Banner() {
  return (
    <Box sx={styles.root}>
      <Image
        src="/images/banner.png"
        width={1000}
        height={300}
        alt="banner"
      />
    </Box>
  );
}

export default Banner;
