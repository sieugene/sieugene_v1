import { ThemeProvider } from "@app";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import { usePersistLocaleCookie } from "shared/hooks/usePersistLocaleCookie";
import { Layouts } from "shared/ui";
import "../styles/globals.css";
import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  usePersistLocaleCookie();

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
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
