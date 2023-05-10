import { DetailPage } from '#/src/screens';
import { GetProduct, GetProducts, GetSettings } from '#/src/services/api';
import { wrapper } from '#/src/store';

function Page() {
  return <DetailPage />;
}

export default Page;
Page.Layout = 'Main';

export const getServerSideProps = wrapper
  .getServerSideProps(({ dispatch }) => async ({ req, query }) => {
    const { id } = query;

    await Promise.all([
      dispatch(GetProducts.initiate(null)),
      dispatch(GetProduct.initiate({ id: String(id) })),
      dispatch(GetSettings.initiate(null)),
    ]);

    return {
      props: {
        referrer: req.headers.referer || null,
        baseUrl: `https://${req.headers.host}`,
      },
    };
  });
