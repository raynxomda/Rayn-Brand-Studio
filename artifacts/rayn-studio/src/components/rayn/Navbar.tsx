import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'wouter';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 py-5 md:px-10 md:py-7">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between border-b border-white/15 pb-4" aria-label="Main navigation">
        <Link href="/" onClick={() => setOpen(false)} className="group flex items-baseline gap-2 text-[#F4F1EA] no-underline" data-testid="link-logo">
          <span className="font-display text-[2rem] leading-none tracking-[-.08em]">RAYN</span>
          <span className="hidden text-[.55rem] uppercase tracking-[.18em] text-[#8A8A8A] sm:inline">AI / creator</span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
              className={`relative text-[.66rem] font-semibold uppercase tracking-[.17em] no-underline transition-colors duration-300 ${
                location === link.href ? 'text-[#F4F1EA]' : 'text-[#8A8A8A] hover:text-[#F4F1EA]'
              }`}
            >
              {link.label}
              {location === link.href && <span className="absolute -bottom-2 left-0 h-px w-4 bg-[#E8862E]" />}
            </Link>
          ))}
          <a
            href="https://wa.me/213560843444"
            target="_blank"
            rel="noreferrer"
            data-testid="link-nav-whatsapp"
            className="group flex items-center gap-2 border border-[#E8862E]/70 px-4 py-2.5 text-[.62rem] font-semibold uppercase tracking-[.14em] text-[#F4F1EA] no-underline transition-colors duration-300 hover:bg-[#E8862E] hover:text-[#0B0B0C]"
          >
            Start a conversation <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          data-testid="button-mobile-menu"
          className="flex size-10 items-center justify-center border border-white/20 text-[#F4F1EA] md:hidden"
        >
          {open ? <X className="size-4" strokeWidth={1.5} /> : <Menu className="size-4" strokeWidth={1.5} />}
        </button>
      </nav>

      <div className={`mx-auto max-w-[1400px] overflow-hidden bg-[#141414] transition-[max-height,opacity] duration-500 md:hidden ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-1 px-5 py-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              data-testid={`link-mobile-${link.label.toLowerCase()}`}
              className={`border-b border-white/10 py-3 font-display text-3xl no-underline ${location === link.href ? 'text-[#E8862E]' : 'text-[#F4F1EA]'}`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://wa.me/213560843444" target="_blank" rel="noreferrer" onClick={() => setOpen(false)} data-testid="link-mobile-whatsapp" className="pt-4 text-[.65rem] font-semibold uppercase tracking-[.17em] text-[#E8862E] no-underline">
            WhatsApp / Begin a project
          </a>
        </div>
      </div>
    </header>
  );
}