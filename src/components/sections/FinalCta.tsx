import { finalCta } from '@/content/site';
import { Container } from '@/components/ui/Container';
import { CtaButton } from '@/components/ui/CtaButton';
import { Reveal } from '@/components/ui/Reveal';

export function FinalCta() {
  return (
    <section id="final-cta" aria-labelledby="final-cta-title" className="bg-canvas py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-accent-strong px-6 py-16 text-center text-canvas sm:px-12 sm:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_0%,rgb(94_154_130/0.4),transparent_70%)]"
            />
            <h2
              id="final-cta-title"
              className="relative mx-auto max-w-4xl text-[2.25rem] leading-[1.05] font-semibold tracking-[-0.035em] sm:text-6xl"
            >
              {finalCta.headline}
              <span className="mt-2 block text-accent-tint">{finalCta.subheadline}</span>
            </h2>
            <div className="relative mt-10 flex justify-center">
              <CtaButton location="final_cta" variant="light">
                {finalCta.button}
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
