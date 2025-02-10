import Layout from '@/components/Layouts';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout />

      <Component {...pageProps} />
    </>
  );
}
