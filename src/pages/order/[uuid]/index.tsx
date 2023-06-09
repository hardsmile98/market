import { OrderPage } from '#/src/screens';
import {
  CheckMe,
  GetOrder,
  GetProducts,
  GetSettings,
} from '#/src/services/api';
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

    const { uuid } = query;

    await Promise.all([
      dispatch(GetOrder.initiate({ uuid: String(uuid) })),
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
