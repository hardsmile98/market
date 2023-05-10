import { AdminProdutctsPage } from '#/src/screens';
import { GetProducts, GetSettings } from '#/src/services/api';
import { wrapper } from '#/src/store';

function Page() {
  return <AdminProdutctsPage />;
}

export default Page;
Page.Layout = 'Admin';

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
