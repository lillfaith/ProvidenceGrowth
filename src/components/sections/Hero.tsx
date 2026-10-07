import { hero } from '@/content/site';
import { Container } from '@/components/ui/Container';
import { CtaButton } from '@/components/ui/CtaButton';
import { Reveal } from '@/components/ui/Reveal';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* One restrained wash of the accent, nothing more. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(60%_60%_at_85%_10%,rgb(201_221_209/0.55),transparent_70%)]"
      />
      <Container className="relative grid items-center gap-14 pb-20 pt-10 sm:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:pb-28 lg:pt-20">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1
              id="hero-title"
              className="mt-6 text-[2.5rem] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-6xl lg:text-[4.1rem] xl:text-[4.5rem]"
            >
              {hero.headline}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{hero.subheadline}</p>
          </Reveal>
          <Reveal delay={180}>
            <div id="hero-actions" className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton location="hero" />
              <CtaButton location="hero_secondary" href={hero.secondaryCta.href} variant="secondary" arrow={false}>
                {hero.secondaryCta.label}
              </CtaButton>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-muted" aria-label="What the system covers">
              {hero.valueLine.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  {index > 0 ? <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line-strong" /> : null}
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <HeroVisual />
        </Reveal>
      </Container>
    </section>
  );
}
