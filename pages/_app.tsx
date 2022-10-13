

import { AppProps } from "next/app";
import Head from "next/head";
import "../scss/app/global.scss"


function Application({ Component, pageProps } : AppProps) {

    return (
        <main>
            <Head>
                <title>This is the application title</title>
            </Head>
            <Component {...pageProps} />
        </main>
    ) 

}

export default Application; 



