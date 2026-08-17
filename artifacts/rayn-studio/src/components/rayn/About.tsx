import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import portrait from '@assets/IMG_20260816_195348_667_1786927569147.jpg';
import { Magnetic } from './Magnetic';
import { MotionReveal } from './MotionReveal';

export function About() {
  return (
    <section id="about" className="hex-texture border-t border-white/10 px-5 py-24 md:px-10 md:py-36 lg:px-[8vw]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 md:grid-cols-[.85fr_1.15fr] md:gap-[9vw]">
          <MotionReveal className="md:pt-16">
            <span className="eyebrow">A little context</span>
            <h2 className="mt-7 max-w-[420px] font-display text-[clamp(3.8rem,7.2vw,7.5rem)] leading-[.8] tracking-[-.065em] text-[#F4F1EA]">
              Human<br /><span className="text-[#8A8A8A]">signal.</span>
            </h2>
            <p className="mt-9 max-w-[300px] text-[.78rem] leading-[1.85] text-[#A5A09A]">
              RAYN is an AI content creator and consultant translating complex intelligence into clear, useful, unforgettable work.
            </p>
          </MotionReveal>
          <MotionReveal className="relative" delay={0.08}>
            <div className="relative ml-auto max-w-[500px] overflow-hidden">
              <img src={portrait} alt="RAYN recording in his studio" data-testid="img-about-portrait" className="aspect-[.78] w-full object-cover object-center grayscale-[.12] transition-transform duration-700 hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/40 to-transparent" />
              <span className="absolute bottom-4 left-4 text-[.56rem] uppercase tracking-[.18em] text-[#F4F1EA]/70">Studio / Algiers / 2026</span>
            </div>
            <MotionReveal className="mt-8 ml-auto max-w-[500px] border-l border-[#E8862E] pl-5 md:-ml-10 md:mt-[-2rem] md:relative md:z-10 md:max-w-[430px] md:bg-[#0B0B0C] md:py-5" delay={0.16}>
              <p className="font-display text-[clamp(1.8rem,3.2vw,3.1rem)] leading-[.95] tracking-[-.035em] text-[#F4F1EA]">
                “The best AI work doesn’t feel artificial. It feels <em className="relative text-[#E8862E]">inevitable.<motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute bottom-[-.08em] left-0 h-px w-full origin-left bg-[#E8862E]/75" /></em>”
              </p>
              <p className="mt-5 text-[.58rem] uppercase tracking-[.18em] text-[#8A8A8A]">— RAYN / Founder, independent practice</p>
            </MotionReveal>
          </MotionReveal>
        </div>

        <MotionReveal className="mt-24 grid border-t border-white/10 pt-7 md:mt-36 md:grid-cols-[1fr_1.7fr] md:gap-[9vw]" delay={0.05}>
          <span className="eyebrow">What I do</span>
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-[.85rem] leading-[1.8] text-[#A5A09A]">
              From automation that gives teams their time back to AI-native video that makes people stop scrolling, I build at the meeting point of technology and taste.
            </p>
            <div>
              <p className="text-[.85rem] leading-[1.8] text-[#A5A09A]">
                Years of creating, testing and explaining AI have shaped a practice rooted in one thing: making the new feel usable now.
              </p>
              <Magnetic strength={0.11}>
                <Link href="/contact" data-testid="link-about-contact" className="group mt-8 inline-flex items-center gap-3 border-b border-[#E8862E] pb-2 text-[.64rem] font-semibold uppercase tracking-[.16em] text-[#F4F1EA] no-underline">
                  Bring me a question <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
                </Link>
              </Magnetic>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}