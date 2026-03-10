import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Stats } from '../components/Stats';
import { Crisis } from '../components/Crisis';
import { Testimonials } from '../components/Testimonials';
import { ForWhom } from '../components/ForWhom';
import { Differentiators } from '../components/Differentiators';
import { CTA } from '../components/CTA';
import { QnA } from '../components/QnA';

import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Crisis />
      <Testimonials />
      <ForWhom />
      <Differentiators />
      <QnA />
      <CTA />
    </>
  );
}
