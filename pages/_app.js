import PreLoader from "../src/layout/PreLoader"
import "../styles/globals.css"
import Head from "next/head"
import Script from "next/script"
import { Fragment, useEffect, useState } from "react"
import "@fontsource-variable/montserrat"

export default function App({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1500)
  }, [])

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Title */}
        <title>Nicolas Chiong - Portfolio and Project Showcase</title>
        {/* Favicon Icon */}
        <link
          rel="shortcut icon"
          href="../assets/images/profile-pic-nicolas-chiong.jpeg"
          type="image/x-icon"
        />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Flaticon */}
        <link rel="stylesheet" href="../assets/css/flaticon.min.css" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="../assets/css/fontawesome-5.14.0.min.css" />
        {/* Bootstrap */}
        <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />
        {/* Magnific Popup */}
        <link rel="stylesheet" href="../assets/css/magnific-popup.min.css" />
        {/* Nice Select */}
        <link rel="stylesheet" href="../assets/css/nice-select.min.css" />
        {/* Animate */}
        <link rel="stylesheet" href="../assets/css/animate.min.css" />
        {/* Slick */}
        <link rel="stylesheet" href="../assets/css/slick.min.css" />
        {/* Main Style */}
        <link rel="stylesheet" href="../assets/css/style.css" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-P5N3PGD66Y" />
      <Script id="google-f">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-P5N3PGD66Y');
          `}
      </Script>
      {!loaded && <PreLoader />}
      {loaded && <Component {...pageProps} />}
    </Fragment>
  )
}
