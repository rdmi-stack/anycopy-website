import { useEffect } from "react";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import PrelineScript from "../components/PrelineScript";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../utils/fontawesome";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add Google Tag Manager script and noscript code here
    const script = document.createElement("script");
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+'GTM-MRK9QVWR'+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MRK9QVWR');`;
    document.body.appendChild(script);

    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRK9QVWR" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);

    // Any additional logic you need to run on component mount
  }, []);

  return (
    <>
      <Head>{/* Any other head elements you need */}</Head>
      <NextUIProvider>
        <PrelineScript />
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
