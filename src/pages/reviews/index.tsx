import { ReviewsPage } from '#/src/screens';
import {
  CheckMe,
  GetProducts,
  GetReviews,
  GetSettings,
} from '#/src/services/api';
import { wrapper } from '#/src/store';
import { setRole } from '#/src/store/slices/auth';

function Page() {
  return <ReviewsPage />;
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
      dispatch(GetReviews.initiate({})),
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
