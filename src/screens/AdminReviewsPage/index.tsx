import { Box } from '@mui/material';
import List from './List';
import Add from './Add';

function AdminReviewsPage() {
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

export default AdminReviewsPage;
