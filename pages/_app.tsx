import { ThemeProvider } from "@app";
import type { AppProps } from "next/app";
import { Layouts } from "shared/ui";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </ThemeProvider>
  );
}

export default MyApp;
