import { Fragment } from 'react';
import TopHeader from '@/components/header';
import Hero from '@/components/hero';
import Footer from '@/components/footer';
import HomeSection from '@/components/home';

export default function Home() {
  return (
    <Fragment>
      <TopHeader />
      <Hero />
      <HomeSection />
      <Footer />
    </Fragment>
  );
}
