import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Haicel Ramadhansyah&apos;s Portfolio Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Haicel Ramadhansyah, Frontend Website and Mobile Developer"
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Haicel Ramadhansyah. Berfokus pada pengembangan di bidang Cyber Security dan Software Engineering"
      />
      <meta
        name="author"
        content="Haicel Ramadhansyah"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}
