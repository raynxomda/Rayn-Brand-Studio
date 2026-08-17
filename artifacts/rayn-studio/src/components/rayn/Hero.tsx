import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import heroVideo from '@assets/موشن_202608170119_1786927569290.mp4';

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-end overflow-hidden bg-[#0B0B0C]">
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-65"
        src={heroVideo}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,12,.18)_0%,rgba(11,11,12,.12)_30%,rgba(11,11,12,.86)_78%,#0B0B0C_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,transparent_0%,rgba(11,11,12,.24)_62%)]" />

      <div className="relative z-10 w-full px-5 pb-11 pt-36 md:px-10 md:pb-14 lg:px-[8vw]">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal flex items-center gap-3 text-[.62rem] font-semibold uppercase tracking-[.2em] text-[#E8862E]">
            <span className="h-px w-9 bg-[#E8862E]" />
            RAYN / 001
          </div>
          <h1 className="reveal reveal-delay-1 mt-5 max-w-[1000px] font-display text-[clamp(5.7rem,18vw,16rem)] font-medium leading-[.7] tracking-[-.09em] text-[#F4F1EA]">
            RAYN<span className="text-[#E8862E]">.</span>
          </h1>
          <div className="reveal reveal-delay-2 mt-9 grid gap-8 md:grid-cols-[1fr_280px] md:items-end">
            <p className="max-w-[580px] font-display text-[clamp(1.65rem,3.3vw,3.15rem)] leading-[.95] tracking-[-.03em] text-[#F4F1EA]">
              Exploring the frontier of <em className="text-[#E8862E]">Artificial Intelligence</em>
            </p>
            <div className="flex flex-col items-start gap-5 md:items-end">
              <p className="max-w-[250px] text-left text-[.72rem] leading-[1.65] text-[#A5A09A] md:text-right">
                AI content, systems and visual stories for people building what comes next.
              </p>
              <Link href="/services" data-testid="link-hero-services" className="group inline-flex items-center gap-3 text-[.65rem] font-semibold uppercase tracking-[.16em] text-[#F4F1EA] no-underline">
                Discover the work <span className="flex size-8 items-center justify-center border border-white/35 transition-colors duration-300 group-hover:border-[#E8862E] group-hover:bg-[#E8862E] group-hover:text-[#0B0B0C]"><ArrowUpRight className="size-3.5" strokeWidth={1.5} /></span>
              </Link>
            </div>
          </div>
          <a href="#about" data-testid="link-hero-scroll" className="mt-16 flex w-fit items-center gap-3 text-[.59rem] uppercase tracking-[.18em] text-[#8A8A8A] no-underline transition-colors hover:text-[#F4F1EA]">
            Scroll to enter <ArrowDown className="size-3.5 animate-bounce" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}