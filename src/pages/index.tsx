import { Box } from '@mui/material';
import Products from '#/src/screens/Products';
import { Banner } from '../components';

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
