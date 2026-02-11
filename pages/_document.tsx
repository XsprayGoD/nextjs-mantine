import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript } from "@mantine/core";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <ColorSchemeScript />
      </Head>
      <body
        style={{ backgroundColor: "black", fontFamily: "'Inter', sans-serif" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
