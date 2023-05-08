import { Box } from '@mui/material';
import List from './List';
import Banner from './Banner';

function ProductsPage() {
  return (
    <>
      <Box mb={3}>
        <Banner />
      </Box>

      <Box mb={5}>
        <List />
      </Box>
    </>
  );
}

export default ProductsPage;
