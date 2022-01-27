import Head from 'next/head'
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
        <title>AluraCord</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500&display=swap" rel="stylesheet" />
        <GlobalStyle />
        <Component {...pageProps} />
        </>
        );
  }

  export default MyApp


//   font-family: 'Mulish', sans-serif;