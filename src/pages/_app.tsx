import Footer from '@/components/footer';
import TopHeader from '@/components/header';
import MainHeader from '@/components/header/MainHeader';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoggedIn = false;
  return (
    <>
      {router.pathname === '/' && !isLoggedIn ? <TopHeader /> : <MainHeader />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
