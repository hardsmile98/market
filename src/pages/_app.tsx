/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import {
  ThemeProvider, CssBaseline,
} from '@mui/material';
import { Provider } from 'react-redux';
import moment from 'moment';
import getTheme from '../theme';
import { wrapper } from '../store';
import 'abort-controller/polyfill';
import 'moment/locale/ru';
import { MyAppProps } from '../types/common';
import { Layouts } from '../components/Layouts';
import { Settings } from '../types';

moment.locale('ru');

function App({ Component, pageProps, ...rest }: MyAppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);
  const Layout = Layouts[Component.Layout || 'Main'] ?? ((page) => page);

  const settings = store.getState().api.queries['GetSettings(null)']?.data as Settings;

  const theme = getTheme(settings);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />

        <Head>
          <title>
            NAME SHOP
          </title>

          <meta name="description" content="Shop name - best shop" />
          <meta name="keywords" content="shop, shop name" />
        </Head>

        <Layout>
          <Component {...rest} {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
