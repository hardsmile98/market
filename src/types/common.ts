/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextComponentType, NextPage, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { LayoutKeys } from '../components/Layouts';

type MyPage<P = object, IP = P> = NextPage<P, IP> & {
  Layout?: LayoutKeys;
};
type MyAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    Layout: LayoutKeys;
  };
};

export type {
  MyAppProps,
  MyPage,
};
