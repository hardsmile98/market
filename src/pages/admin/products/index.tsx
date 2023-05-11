import { AdminProdutctsPage } from '#/src/screens';
import { CheckMe, GetProducts, GetSettings } from '#/src/services/api';
import { wrapper } from '#/src/store';

function Page() {
  return <AdminProdutctsPage />;
}

export default Page;
Page.Layout = 'Admin';

export const getServerSideProps = wrapper
  .getServerSideProps(({ dispatch }) => async ({ req }) => {
    const { data, isError } = await dispatch(CheckMe.initiate(null));

    const isNotFound = isError || (data && data.role !== 'ADMIN');

    if (isNotFound) {
      return {
        notFound: true,
      };
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
