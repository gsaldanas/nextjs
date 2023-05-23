import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import Head from "next/head";

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
