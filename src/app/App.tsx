import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Stats } from './components/Stats';
import { Crisis } from './components/Crisis';
import { Testimonials } from './components/Testimonials';
import { ForWhom } from './components/ForWhom';
import { Differentiators } from './components/Differentiators';
import { CTA } from './components/CTA';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Crisis />
      <Testimonials />
      <ForWhom />
      <Differentiators />
      <CTA />
      <Footer />
    </div>
  );
}
