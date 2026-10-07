import { MobileCtaBar } from '@/components/layout/MobileCtaBar';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { StructuredData } from '@/components/layout/StructuredData';
import { AuditSection } from '@/components/sections/AuditSection';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { CaseStudy } from '@/components/sections/CaseStudy';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';
import { GrowthSystem } from '@/components/sections/GrowthSystem';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Industries } from '@/components/sections/Industries';
import { Positioning } from '@/components/sections/Positioning';
import { Problem } from '@/components/sections/Problem';

/**
 * Journey: understand the problem → see the offer → see proof → understand the
 * process → request the audit. Reorder sections here.
 */
export default function HomePage() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Problem />
        <GrowthSystem />
        <BeforeAfter />
        <CaseStudy />
        <Positioning />
        <HowItWorks />
        <Industries />
        <AuditSection />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  );
}
