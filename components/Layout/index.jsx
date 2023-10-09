import React from 'react'
import Head from "next/head";
import AppHeader from "../AppHeader";
import Footer from "../Footer";
import { LayoutContainer } from "./Layout.styled";

const Layout = (props) => {
  return (
    <LayoutContainer>
      <Head>
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1"
        />
        <link rel="shortcut icon" href="/assets/VinePNGLogo.png" />
      </Head>
      <AppHeader />

      {props.children}
      
      {/* <Footer /> */}
    </LayoutContainer>
  )
}

export default Layout