import Head from 'next/head';

import Footer from '../components/footer';

// Types
interface LayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./favicon-32x32.png" />
      </Head>
      {children}
      <Footer />
    </>
  );
}
