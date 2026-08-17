import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { About } from '@/components/rayn/About';
import { Footer } from '@/components/rayn/Footer';
import { Hero } from '@/components/rayn/Hero';
import { MotionReveal } from '@/components/rayn/MotionReveal';
import { Navbar } from '@/components/rayn/Navbar';

export default function HomePage() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <section className="border-t border-white/10 px-5 py-24 md:px-10 md:py-36 lg:px-[8vw]">
          <MotionReveal className="mx-auto max-w-[1400px] md:flex md:items-end md:justify-between">
            <div>
              <span className="eyebrow">A practice in motion</span>
              <h2 className="mt-7 max-w-[700px] font-display text-[clamp(3.8rem,8vw,8rem)] leading-[.78] tracking-[-.065em] text-[#F4F1EA]">Ideas in.<br /><span className="text-[#8A8A8A]">Momentum out.</span></h2>
            </div>
            <Link href="/services" data-testid="link-home-services" className="group mt-10 flex items-center gap-3 text-[.64rem] font-semibold uppercase tracking-[.16em] text-[#E8862E] no-underline md:mb-1 md:mt-0">See the services <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" strokeWidth={1.4} /></Link>
          </MotionReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}