import "src/styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>portfolio-nok</title>
        <meta
          name="description"
          content="ここはウェブエンジニアNaokiのポートフォリオサイトです。これまでに制作したWebサイトやAppを紹介していきます。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Website App React Next.js TypeScript Sass JavaScript"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
