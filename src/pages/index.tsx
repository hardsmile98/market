import { ProductsPage } from '#/src/screens';
import { GetProducts, GetSettings } from '../services/api';
import { wrapper } from '../store';

function Page() {
  return <ProductsPage />;
}

export default Page;
Page.Layout = 'Main';

export const getServerSideProps = wrapper
  .getServerSideProps(({ dispatch }) => async ({ req }) => {
    await Promise.all([
      dispatch(GetProducts.initiate(null)),
      dispatch(GetSettings.initiate(null)),
    ]);

    return {
      props: {
        referrer: req.headers.referer || null,
        baseUrl: `https://${req.headers.host}`,
      },
    };
  });
