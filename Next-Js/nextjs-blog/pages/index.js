import Head from 'next/head';
import Layout, { siteTitle } from './components/layout';
import utilStyles from './styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Patrick Passarella]</p>
        <p>
          (Hi, I 'm Patrick. I'm a software engenier and translator Portuguese/English{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}