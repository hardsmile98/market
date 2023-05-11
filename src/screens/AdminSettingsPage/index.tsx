import { Box } from '@mui/material';
import SettingsAccount from './SettingsAccount';
import SettingsShop from './SettingsShop';

function AdminSettingsPage() {
  return (
    <>
      <Box mb={3}>
        <SettingsShop />
      </Box>

      <Box mb={5}>
        <SettingsAccount />
      </Box>
    </>
  );
}

export default AdminSettingsPage;
