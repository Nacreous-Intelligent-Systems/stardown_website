import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>StarDown</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.png" />
        <meta name="description" content="StarDown is a website for the StarDown project." />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
