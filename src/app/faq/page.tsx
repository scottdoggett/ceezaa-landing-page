import { FaqHero } from "@/components/ui/faqs-page/faq-hero";
import { FaqContent } from "@/components/ui/faqs-page/faq-content";
import { FaqFooter } from "@/components/ui/faqs-page/faq-footer";

export default function FAQ() {
  return (
    <main className="font-sans">
      <FaqHero />
      <FaqContent />
      <FaqFooter />
    </main>
  );
}
