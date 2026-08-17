import { ArrowRight, Plus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';

type ServiceRowProps = {
  number: string;
  title: string;
  description: string;
  detail: string;
};

export function ServiceRow({ number, title, description, detail }: ServiceRowProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`group border-t border-white/15 py-7 transition-colors duration-500 md:py-9 ${expanded ? 'border-[#E8862E]/70' : 'hover:border-[#E8862E]/70'}`} data-testid={`service-row-${number}`}>
      <button type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} data-testid={`button-service-${number}`} className="grid w-full gap-6 text-left md:grid-cols-[76px_1.1fr_1fr_auto] md:items-start">
        <span className="pt-1 font-mono text-[.65rem] tracking-[.18em] text-[#E8862E]">{number}</span>
        <span className="font-display text-[clamp(2.8rem,5.3vw,5.5rem)] leading-[.82] tracking-[-.06em] text-[#F4F1EA] transition-transform duration-500 group-hover:translate-x-2">{title}</span>
        <span className="max-w-[360px] text-[.74rem] leading-[1.75] text-[#8A8A8A] md:pt-2">{description}</span>
        <span className={`flex size-9 shrink-0 items-center justify-center border border-white/20 text-[#F4F1EA] transition-all duration-500 group-hover:border-[#E8862E] group-hover:text-[#E8862E] ${expanded ? 'rotate-45 border-[#E8862E] text-[#E8862E]' : ''}`}><Plus className="size-4" strokeWidth={1.25} /></span>
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-500 ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="grid gap-6 pb-2 pt-7 md:ml-[calc(76px+8.33%)] md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-[500px] text-[.82rem] leading-[1.8] text-[#B8B2A9]">{detail}</p>
            <Link href="/contact" data-testid={`link-service-learn-${number}`} className="group flex items-center gap-2 text-[.62rem] font-semibold uppercase tracking-[.15em] text-[#E8862E] no-underline">Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} /></Link>
          </div>
        </div>
      </div>
    </article>
  );
}