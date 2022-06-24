/* eslint-disable react/no-danger-with-children */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { getLanguageLocalstorage } from "../utils/language";
import i18n from "../utils/i18n";
import { connect, useSelector } from "react-redux";

import { Link } from "next/link";

// import i18n from '../utils/i18n'
// import i18next from 'i18next'

import { useRouter } from "next/router";

const Layout = ({ title, children, metaKeyWord, metaDiscription }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='keywords'
          content={`туристическая фирма, турагентсво, путишествие, ${metaKeyWord}`}
        />
        <meta
          name='discription'
          content={`туристическая фирма, турагентсво, путишествие, ${metaDiscription}`}
        />
        <meta charSet='utf-8' />

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
          crossOrigin='true'
        />
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x'
          crossOrigin='true'></link>
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
        <meta
          property='og:audio'
          content='https://example.com/bond/theme.mp3'
        />
        <meta property='og:determiner' content='the' />
        <meta property='og:locale' content='en_GB' />
        <meta property='og:locale:alternate' content='ru_RU' />
        <meta property='og:locale:alternate' content='es_ES' />
        <meta property='og:site_name' content='IMDb' />

        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />

        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />

        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap'
          rel='stylesheet'></link>
        <meta
          property='og:video'
          content='https://example.com/bond/trailer.swf'
        />
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4'
          crossOrigin='true'></script>

        <script src='//code-eu1.jivosite.com/widget/h09XyXvajI' async></script>
        <script
          charSet='UTF-8'
          src='//web.webpushs.com/js/push/30edebb679a4c0248286739f5a19b668_1.js'
          async></script>
      </Head>

      <Header />

      <a
        className='covid'
        rel={"noreferrer"}
        target='_blank'
        href={`https://uzbekistan.travel/${router.locale}/o/covid-19-v-uzbekistane/`}>
        <img className='covid-icon' src='/covid-icon.svg' />
      </a>

      <main>{children}</main>

      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  ln: state.navbar.ln,
});

export default connect(mapStateToProps)(Layout);
