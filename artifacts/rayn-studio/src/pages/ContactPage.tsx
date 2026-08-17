import { ContactBlock } from '@/components/rayn/ContactBlock';
import { SiteShell } from '@/components/rayn/SiteShell';

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="pt-20 md:pt-24">
        <ContactBlock />
      </div>
    </SiteShell>
  );
}