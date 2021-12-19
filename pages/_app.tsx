import { ThemeProvider } from "@app";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import { Layouts } from "shared/ui";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <ThemeProvider>
        <Layouts withLayout={!Component.getLayout}>
          {getLayout(<Component {...pageProps} />)}
        </Layouts>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
