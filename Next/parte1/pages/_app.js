import Head from "next/head";
import GlobalStyle from "../src/theme/GlobalStyle";
import Document from "./_document";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
    )
}