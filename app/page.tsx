import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <CaseStudies />
      <Services />
      <HowItWorks />
      <FinalCTA />
    </main>
  );
}
