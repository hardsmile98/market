import { PreorderPage } from '#/src/screens';
import { CheckMe, GetSettings } from '#/src/services/api';
import { wrapper } from '#/src/store';
import { setRole } from '#/src/store/slices/auth';

function Page() {
  return (
    <PreorderPage />
  );
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
      dispatch(GetSettings.initiate(null)),
    ]);

    return {
      props: {
        referrer: req.headers.referer || null,
        baseUrl: `https://${req.headers.host}`,
      },
    };
  });
