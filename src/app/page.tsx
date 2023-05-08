'use client';

import { Box } from '@mui/material';
import { Banner, Products } from '../components';

const styles = {
  root: {
  },
};

function Page() {
  return (
    <Box sx={styles.root}>
      <Box mb={3}>
        <Banner />
      </Box>

      <Box mb={5}>
        <Products />
      </Box>
    </Box>
  );
}

export default Page;
