import { ServiceRow } from '@/components/rayn/ServiceRow';
import { MotionReveal } from '@/components/rayn/MotionReveal';
import { SiteShell } from '@/components/rayn/SiteShell';

const services = [
  {
    number: '01',
    title: 'AI Automation',
    description: 'Thoughtful systems that remove repetition and return attention to the work that matters.',
    detail: 'I map the friction in your workflow, then design practical AI automations around the way your team already thinks. The goal is not more tools — it is more room to think.',
  },
  {
    number: '02',
    title: 'AI Video Ad Production',
    description: 'Visual stories with a point of view — built for the pace and possibility of generative media.',
    detail: 'From first frame to final cut, I develop concepts, prompts and edits that turn an idea into a piece of video with a pulse. Fast experimentation, intentional direction.',
  },
  {
    number: '03',
    title: 'Website & Landing Page Design',
    description: 'Digital spaces that make a clear impression before they make a clear argument.',
    detail: 'I shape the narrative, interaction and visual language of a site so your audience knows exactly why to stay. Distinctive, responsive and ready to move.',
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="page-intro hex-texture">
        <MotionReveal className="mx-auto max-w-[1400px]">
          <span className="eyebrow">Capabilities / 03</span>
          <h1>Useful<br /><span className="text-[#E8862E]">intelligence.</span></h1>
          <p>Three ways to turn the strange, fast-moving world of AI into an advantage people can actually feel.</p>
        </MotionReveal>
      </section>
      <section className="px-5 pb-24 md:px-10 md:pb-40 lg:px-[8vw]">
        <div className="mx-auto max-w-[1400px]">
          {services.map((service) => <ServiceRow key={service.number} {...service} />)}
          <MotionReveal className="mt-8 text-right text-[.59rem] uppercase tracking-[.15em] text-[#606060]" delay={0.1}>Select a service to unfold</MotionReveal>
        </div>
      </section>
    </SiteShell>
  );
}