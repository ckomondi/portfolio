

import { AppProps } from "next/app";
import Head from "next/head";
import "../scss/app/global.scss"


function Application({ Component, pageProps } : AppProps) {

    return (
        <>
            <Head>
                <title>CKO • Web Developer</title>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </Head>

            

            <Component {...pageProps} />
        </>
    ) 

}

export default Application; 



