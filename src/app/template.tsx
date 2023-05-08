'use client';

import { ReactNode } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import createCache from '@emotion/cache';
import {
  ThemeProvider,
} from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { wrapper } from '#/src/store';
import appTheme from '#/src/theme';
import { Provider } from 'react-redux';
import { ErrorBoundary, Header } from '#/src/components';
import 'moment/locale/ru';
import moment from 'moment';

moment.locale('ru');

const createEmotionCache = () => createCache({ key: 'css', prepend: true });

function Template({ children, ...props }: { children: ReactNode }) {
  const { store } = wrapper.useWrappedStore(props);

  return (
    <CacheProvider value={createEmotionCache()}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />

        <Provider store={store}>
          <ErrorBoundary>
            <Container>
              <Box py={3}>
                <Header />
              </Box>

              <Box>
                {children}
              </Box>
            </Container>
          </ErrorBoundary>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default Template;
