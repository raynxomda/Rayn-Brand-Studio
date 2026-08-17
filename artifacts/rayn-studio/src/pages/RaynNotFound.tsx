import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { SiteShell } from '@/components/rayn/SiteShell';

export default function RaynNotFound() {
  return (
    <SiteShell>
      <section className="flex min-h-[80dvh] items-end px-5 pb-20 pt-40 md:px-10 md:pb-28 lg:px-[8vw]">
        <div>
          <span className="eyebrow">Signal lost / 404</span>
          <h1 className="mt-7 font-display text-[clamp(6rem,18vw,16rem)] leading-[.7] tracking-[-.1em] text-[#F4F1EA]">Not<br /><span className="text-[#E8862E]">here.</span></h1>
          <Link href="/" data-testid="link-notfound-home" className="group mt-12 inline-flex items-center gap-3 border-b border-white/25 pb-3 text-[.65rem] font-semibold uppercase tracking-[.16em] text-[#F4F1EA] no-underline transition-colors hover:border-[#E8862E] hover:text-[#E8862E]"><ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" strokeWidth={1.4} /> Return home</Link>
        </div>
      </section>
    </SiteShell>
  );
}