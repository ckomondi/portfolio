

import { AppProps } from "next/app";
import "../scss/app/global.scss"


function Application({ Component, pageProps } : AppProps) {

    return (
        <Component {...pageProps} />
    ) 

}

export default Application; 



