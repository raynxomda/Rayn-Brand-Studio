import { type ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function SiteShell({ children, footer = true }: { children: ReactNode; footer?: boolean }) {
  return (
    <div className="site-shell">
      <Navbar />
      <main>{children}</main>
      {footer && <Footer />}
    </div>
  );
}