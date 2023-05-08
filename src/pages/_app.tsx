/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { AppProps } from 'next/app';
import {
  ThemeProvider, CssBaseline, Container, Box,
} from '@mui/material';
import { Provider } from 'react-redux';
import moment from 'moment';
import { Header } from '../components';
import theme from '../theme';
import { wrapper } from '../store';
import 'abort-controller/polyfill';
import 'moment/locale/ru';

moment.locale('ru');

function App({ Component, pageProps, ...rest }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />

        <Head>
          <title>
            NAME SHOP
          </title>
        </Head>

        <Container>
          <Box py={3}>
            <Header />
          </Box>

          <Box>
            <Component {...rest} {...pageProps} />
          </Box>
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
