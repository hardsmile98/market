import { Box, Container } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import AdminHeader from '../../AdminHeader';

function AdminLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Box py={3}>
        <AdminHeader />
      </Box>

      <Box>
        {children}
      </Box>
    </Container>
  );
}
export default AdminLayout;
