'use client';

import { ReactNode } from 'react';

interface IRootLayout {
  children:
  | ReactNode
  | ReactNode[]
}

function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />

        <title>
          NAME SHOP
        </title>

        <meta
          name="description"
          content="NAME SHOP"
          key="desc"
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
