import { Link } from 'wouter';

const socials = [
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
  { label: 'X', href: 'https://x.com' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-9 md:px-10 md:py-12">
      <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-[1fr_auto_1fr] md:items-end">
        <Link href="/" data-testid="link-footer-logo" className="font-display text-4xl tracking-[-.08em] text-[#F4F1EA] no-underline">RAYN</Link>
        <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-center">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" data-testid={`link-footer-${social.label.toLowerCase()}`} className="text-[.62rem] uppercase tracking-[.15em] text-[#8A8A8A] transition-colors hover:text-[#E8862E]">{social.label}</a>
          ))}
        </div>
        <div className="md:text-right">
          <a href="mailto:collabrayn@proton.me" data-testid="link-footer-email" className="text-[.68rem] text-[#F4F1EA] no-underline transition-colors hover:text-[#E8862E]">collabrayn@proton.me</a>
          <p className="mt-2 text-[.58rem] uppercase tracking-[.14em] text-[#606060]">© 2026 RAYN Studio</p>
        </div>
      </div>
    </footer>
  );
}