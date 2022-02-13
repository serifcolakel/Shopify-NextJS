import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getProductsInCollection } from "../lib/shopify";
import Products from "../components/Products";
import HeroSection from './../components/HeroSection';

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Serif Colakel Shopify</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more." />
        <meta property="og:title" content="Serif Colakel Shopify" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://serifcolakel.vercel.app/" />
        <meta property="og:image" content="https://i.hizliresim.com/a27dhrh.jpg" />
        <meta property="og:description"
          content="Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Serif Colakel Shopify" />
        <link rel="icon" href="/a27dhrh.webp" />
      </Head>
      <main >
        <HeroSection />
        <Products products={products} />
      </main>

    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  return {
    props: { products },
  };
}
