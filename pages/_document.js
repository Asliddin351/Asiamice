import Document, { Html, Head, Main, NextScript } from "next/document";
import { Children } from "react";
import { ServerStyleSheets } from "@material-ui/styles"; // works with @material-ui/core/styles, if you prefer to use it.
import {useRouter} from 'next/router'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    
    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, styles: [...Children.toArray(initialProps.styles), sheets.getStyleElement()],};
  }


  
  

  

  render() {

    
    return (
      <Html>
        <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZCT3T3BG8Z"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-ZCT3T3BG8Z', { page_path: window.location.pathname });
            `
            }}
          />
{/* <<<<<<< HEAD
          {/* <script type="text/javascript" src="../../metrika.js"></script> */}
          {/* <noscript><div><img src="https://mc.yandex.ru/watch/XXXXXX" style="position:absolute; left:-9999px;" alt="" /></div></noscript>  */}
{/* 
=======
>>>>>>> 117e26c427131c8ae269592f6064aaafda2ea978 */} 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
