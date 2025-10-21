import { ContactHero } from "@/components/ui/contact-page/contact-hero";
import { ContactSections } from "@/components/ui/contact-page/contact-sections";
import { ContactForm } from "@/components/ui/contact-page/contact-form";
import { ContactFooter } from "@/components/ui/contact-page/contact-footer";

export default function Contact() {
  return (
    <main className="font-sans">
      <ContactHero />
      <ContactSections />
      <ContactForm />
      <ContactFooter />
    </main>
  );
}
