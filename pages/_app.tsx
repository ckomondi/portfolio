

import { AppProps } from "next/app";
import Head from "next/head";
import "../scss/app/global.scss"


function Application({ Component, pageProps } : AppProps) {

    return (
        <>
            <Head>
                <title>CKO • Web Developer</title>
            </Head>

            

            <Component {...pageProps} />
        </>
    ) 

}

export default Application; 



