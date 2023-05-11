import { ProductsPage } from '#/src/screens';
import { CheckMe, GetProducts, GetSettings } from '../services/api';
import { wrapper } from '../store';
import { setRole } from '../store/slices/auth';

function Page() {
  return <ProductsPage />;
}

export default Page;
Page.Layout = 'Main';

export const getServerSideProps = wrapper
  .getServerSideProps(({ dispatch }) => async ({ req }) => {
    const { data, isSuccess } = await dispatch(CheckMe.initiate(null));

    if (isSuccess && data) {
      dispatch(setRole(data));
    }

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
