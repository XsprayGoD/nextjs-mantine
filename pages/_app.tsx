import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import Head from "next/head";
import { Center, Loader, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "../theme";
import classes from "./Loader.module.css";
import Header from "../components/Header";
//import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import "./index.css";
import { ToTop } from "@utils/Affix";

const web = {
  name: "gautham",
  title: "gautham-dev",
};

export default function App({ Component, pageProps }: any) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(loadingTimeout);
  }, []);
  return (
    <MantineProvider
      theme={theme}
      
      defaultColorScheme={"dark"}>
        
      <Head>
        <title>{web.title}</title>
        <link
          rel='icon'
          type='image/png'
          href='/favicon/favicon-96x96.png'
          sizes='96x96'></link>
        <link
          rel='icon'
          type='image/png'
          href='/favicon/favicon-32x32.png'
          sizes='32x32'></link>
        <link
          rel='icon'
          type='image/png'
          href='/favicon/favicon-16x16.png'
          sizes='16x16'></link>
        <link
          rel='icon'
          type='image/png'
          href='/favicon/favicon-128x128.png'
          sizes='128x128'></link>
        <link
          rel='icon'
          type='image/png'
          href='/favicon/favicon-196x196.png'
          sizes='196x196'></link>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
        <meta
          name='og:image:width'
          content='1280'
        />
        <meta
          name='og:image:height'
          content='640'
        />
        <meta
          name='og:type'
          content='website'
        />
        {/* <meta
          name='og:image'
          content='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png'
        /> */}
      </Head>

      {isLoading ? (
        <div className={classes.loaderContainer}>
          <Loader
            color='rgba(140, 43, 43, 1)'
            size='xl'
            type='bars'
          />
        </div>
      ) : (
        <>
          <Notifications position='top-right' />
          <Background></Background>
          <Header></Header>
          <ToTop></ToTop>
          <Component {...pageProps} />
          {/* <Footer></Footer> */}
        </>
      )}
    </MantineProvider>
  );
}

export function Background() {
  return (
    <div className='background'>
      <img
        src='/gradient/blue-purple.svg'
        alt=''
      />
    </div>
  );
}
