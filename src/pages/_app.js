import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import Head from "next/head";
import Userfront from "@userfront/react"

Userfront.init(process.env.NEXT_PUBLIC_USERFRONTID);

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>dit is een titel</title>
        <meta name="description" content="dit is de standaard beschrijving" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
