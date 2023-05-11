import { AdminReviewsPage } from '#/src/screens';
import { CheckMe, GetReviews, GetSettings } from '#/src/services/api';
import { wrapper } from '#/src/store';

function Page() {
  return <AdminReviewsPage />;
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
      dispatch(GetReviews.initiate({})),
      dispatch(GetSettings.initiate(null)),
    ]);

    return {
      props: {
        referrer: req.headers.referer || null,
        baseUrl: `https://${req.headers.host}`,
      },
    };
  });
