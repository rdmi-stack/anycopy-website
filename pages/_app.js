import { useEffect } from "react";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import PrelineScript from "../components/PrelineScript";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../utils/fontawesome";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Any additional logic you need to run on component mount
  }, []);

  return (
    <>
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+'GTM-MRK9QVWR'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MRK9QVWR');`,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRK9QVWR" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <NextUIProvider>
          <PrelineScript />
          <Component {...pageProps} />
        </NextUIProvider>
      </body>
    </>
  );
}

export default MyApp;
