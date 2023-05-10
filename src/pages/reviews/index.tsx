import { ReviewsPage } from '#/src/screens';
import { GetReviews, GetSettings } from '#/src/services/api';
import { wrapper } from '#/src/store';

function Page() {
  return <ReviewsPage />;
}

export default Page;
Page.Layout = 'Main';

export const getServerSideProps = wrapper
  .getServerSideProps(({ dispatch }) => async ({ req }) => {
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
