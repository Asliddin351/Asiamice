import "../styles/globals.css";
import "../styles/footer.css";
import "../components/tabs/tabs.css";
import "../components/blog/blog.css";
import "../components/about/about.css";
import "../components/slider/slider.css";
import "../components/mice/tabpanel.css";
import "../styles/hotel.css";

import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18n";

import { Provider, useSelector } from "react-redux";
import "@babel/polyfill";
import Head from "next/head";
import Router from "next/router";
import { useRouter } from "next/router";
import withYM from "next-ym";
import { useTranslation } from "react-i18next";

import { wrapper } from "../redux/store";
import { useEffect } from "react";

import { store } from "../redux/store";

import { useDispatch } from "react-redux";
import { getCountries } from "../redux/countries/action";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    // const country = async () => {
    //   await dispatch(getCountries());
    // };
    i18n.changeLanguage(router.locale);
    router.replace(router.asPath, router.asPath, { locale: router.locale });
    // country();
  }, [router.locale, dispatch]);

  // useEffect(() => {
  //   dispatch(getCountries());
  // }, []);

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css'
        />
        <script src='//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js'></script>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css'
          type='text/css'
          media='screen'
        />
        <link
          rel='stylesheet'
          href='//cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css'
          type='text/css'
          media='screen'
        />
        <link
          href='https://use.fontawesome.com/releases/v5.0.7/css/all.css'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
        />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-icon-180x180.png'
        />
        {/* <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/> */}
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-icon-180x180.png'
        />
        {/* <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/> */}
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff'></meta>

        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-icon-180x180.png'
        />
        {/* <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/> */}
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />

        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-ZCT3T3BG8Z'></script>

        <meta name='theme-color' content='#ffffff'></meta>
      </Head>

      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nextProvider>
      </Provider>
    </>
  );
}

export default withYM("84969397", Router)(wrapper.withRedux(MyApp));
