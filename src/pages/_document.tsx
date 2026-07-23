import * as React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): React.JSX.Element {
  return (
    <Html lang="en">
      <Head>
        {/* Pastikan baris ini ada dan arahkan ke favicon kamu */}
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
