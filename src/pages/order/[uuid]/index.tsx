import { OrderPage } from '#/src/screens';
import { CheckMe, GetProducts, GetSettings } from '#/src/services/api';
import { wrapper } from '#/src/store';
import { setRole } from '#/src/store/slices/auth';
import React from 'react';

function Page() {
  return (
    <OrderPage />
  );
}

export default Page;
Page.Layout = 'Main';

export const getServerSideProps = wrapper
  .getServerSideProps(({ dispatch }) => async ({ req, query }) => {
    const { data, isSuccess } = await dispatch(CheckMe.initiate(null));

    if (isSuccess && data) {
      dispatch(setRole(data));
    }

    const { id } = query;

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
