import { Box } from '@mui/material';
import { Banner, Products } from '../components';

function Page() {
  return (
    <>
      <Box mb={3}>
        <Banner />
      </Box>

      <Box mb={5}>
        <Products />
      </Box>
    </>
  );
}

export default Page;
