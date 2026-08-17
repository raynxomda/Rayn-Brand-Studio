import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Magnetic } from './Magnetic';
import { MotionReveal } from './MotionReveal';

const email = 'collabrayn@proton.me';
const socials = [
  { label: 'YouTube', href: 'http://youtube.com/@raynxomda' },
  { label: 'Instagram', href: 'https://www.instagram.com/raynxomda?igsh=a21qOWgxZTNrZ3J2' },
  { label: 'TikTok', href: 'http://tiktok.com/@raynxomda' },
  { label: 'Community AI', href: 'http://t.me/rayncommunity' },
];

export function ContactBlock() {
  return (
    <section className="hex-texture px-5 pb-24 pt-10 md:px-10 md:pb-36 lg:px-[8vw]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 md:grid-cols-[1.2fr_.8fr] md:gap-[10vw]">
          <MotionReveal>
            <span className="eyebrow">Open channel</span>
            <h2 className="mt-8 max-w-[780px] font-display text-[clamp(4rem,9vw,9rem)] leading-[.76] tracking-[-.07em] text-[#F4F1EA]">
              Let’s build<br /><span className="text-[#E8862E]">something</span><br />intelligent.
            </h2>
          </MotionReveal>
          <MotionReveal className="flex flex-col justify-end" delay={0.1}>
            <p className="max-w-[310px] text-[.82rem] leading-[1.8] text-[#A5A09A]">Have a sharp problem, a half-formed idea or a project that needs a different point of view? Start here.</p>
            <div className="mt-10 flex flex-col gap-3">
              <Magnetic strength={0.1}>
                <a href="https://wa.me/213560843444" target="_blank" rel="noreferrer" data-testid="link-contact-whatsapp" className="group flex items-center justify-between border border-[#E8862E] px-5 py-4 text-[.66rem] font-semibold uppercase tracking-[.15em] text-[#F4F1EA] no-underline transition-colors hover:bg-[#E8862E] hover:text-[#0B0B0C]">
                  <span className="flex items-center gap-3"><MessageCircle className="size-4" strokeWidth={1.4} /> WhatsApp</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1.4} />
                </a>
              </Magnetic>
              <Magnetic strength={0.09}>
                <a
                  href={`mailto:${email}`}
                  aria-label="Send RAYN an email"
                  data-testid="link-contact-email"
                  className="group flex items-center justify-between border border-white/20 px-5 py-4 text-[.66rem] font-semibold uppercase tracking-[.13em] text-[#F4F1EA] no-underline transition-colors hover:border-[#E8862E] hover:text-[#E8862E]"
                >
                  <span className="flex items-center gap-3"><Mail className="size-4" strokeWidth={1.4} /> Email me</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1.4} />
                </a>
              </Magnetic>
            </div>
          </MotionReveal>
        </div>
        <MotionReveal className="mt-20 border-t border-white/10 pt-5 md:mt-32 md:flex md:items-center md:justify-between" delay={0.12}>
          <span className="text-[.6rem] uppercase tracking-[.18em] text-[#8A8A8A]">Find RAYN elsewhere</span>
          <div className="mt-5 flex flex-wrap gap-2 md:mt-0">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" data-testid={`link-contact-${social.label.toLowerCase()}`} className="border border-white/20 px-4 py-2.5 text-[.6rem] uppercase tracking-[.14em] text-[#A5A09A] no-underline transition-colors hover:border-[#E8862E] hover:text-[#E8862E]">{social.label}</a>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}