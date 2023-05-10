import { Box } from '@mui/material';
import Add from './Add';
import List from './List';

function AdminProdutctsPage() {
  return (
    <>
      <Box mb={3}>
        <Add />
      </Box>

      <Box mb={5}>
        <List />
      </Box>
    </>
  );
}

export default AdminProdutctsPage;
