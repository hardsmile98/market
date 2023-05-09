import { Box, Container } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Header from '../../Header';

function MainLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Box py={3}>
        <Header />
      </Box>

      <Box>
        {children}
      </Box>
    </Container>
  );
}
export default MainLayout;
