import { Fragment } from "react";
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Component {...pageProps} />
        </Fragment>
    );
}