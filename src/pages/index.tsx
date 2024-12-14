import { Fragment } from 'react';
import Hero from '@/components/hero';
import HomeSection from '@/components/home';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <HomeSection />
    </Fragment>
  );
}
