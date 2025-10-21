import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Lightbulb, Plane, Home, Handshake, Utensils, CreditCard, LucideIcon } from "lucide-react";

interface FAQ {
  question: string;
  answer: string | string[];
}

interface FAQSection {
  title: string;
  icon: LucideIcon;
  faqs: FAQ[];
}

export function FaqContent() {
  const faqSections: FAQSection[] = [
    {
      title: "General",
      icon: Lightbulb,
      faqs: [
        {
          question: "What is Ceezaa?",
          answer: [
            "Ceezaa is a platform that connects travelers, hostels, and local experience providers.",
            "It brings everything that makes a stay meaningful into one simple place so guests can see what is happening, discover nearby experiences, and feel connected from the moment they arrive.",
          ],
        },
        {
          question: "Where is Ceezaa available?",
          answer:
            "Ceezaa is starting with select hostel and partner communities in North America before expanding globally.",
        },
        {
          question: "Is there a Ceezaa app?",
          answer: [
            "Yes. Ceezaa will be available on both iOS and Android.",
            "You can join the waitlist to be among the first to try it.",
          ],
        },
        {
          question: "Is Ceezaa free to use?",
          answer: [
            "Ceezaa is free for travelers and hostels.",
            "Experience partners and restaurants only pay a commission or service fee on completed bookings or promotional placements.",
          ],
        },
        {
          question: "How does Ceezaa protect my privacy?",
          answer: [
            "Ceezaa gives travelers full control over their data and preferences.",
            "You decide what to share and how you want to share it.",
            "Your information is used only to personalize your stay and is never sold to third parties.",
          ],
        },
        {
          question: "What if I need help?",
          answer:
            "You can reach our team anytime through our Contact page or by emailing hello@ceezaa.com.",
        },
      ],
    },
    {
      title: "For Travelers",
      icon: Plane,
      faqs: [
        {
          question: "How does Ceezaa improve my stay?",
          answer: [
            "Ceezaa helps you see everything happening in your hostel in one place.",
            "Events, dining, tours, and local experiences are personalized to your interests so you never miss the moments that make travel special.",
          ],
        },
        {
          question: "What is a Ceezaa ID?",
          answer: [
            "Your Ceezaa ID is your personal travel identity.",
            "It learns from your preferences and helps every new stay feel familiar.",
            "You decide what to share, from dietary needs to interests, and Ceezaa uses that to make each stay feel like it was meant for you.",
          ],
        },
        {
          question: "Can I use Ceezaa without staying at a hostel?",
          answer: [
            "Ceezaa is built around the hostel experience.",
            "The platform integrates directly with hostels to enhance how guests connect, discover, and engage.",
            "Most features are available only to guests staying at partnered hostels, though select experiences may be visible to nearby travelers as the network grows.",
          ],
        },
        {
          question: "Can I share experiences with friends?",
          answer:
            "Yes. You can share experiences and activities directly with friends once social features launch.",
        },
        {
          question: "Do I need to pay to use Ceezaa?",
          answer: "No. Ceezaa is free for travelers to use.",
        },
      ],
    },
    {
      title: "For Hostels",
      icon: Home,
      faqs: [
        {
          question: "How does Ceezaa help my hostel?",
          answer: [
            "Ceezaa brings your events, dining, and activities into one place that every guest can access.",
            "It helps travelers feel more connected to your property, which improves engagement and guest satisfaction.",
          ],
        },
        {
          question: "Does Ceezaa replace our booking system?",
          answer: [
            "No. Ceezaa works alongside your existing systems.",
            "It focuses on the in-stay experience and guest personalization, not room reservations.",
          ],
        },
        {
          question: "Is Ceezaa free for hostels?",
          answer: [
            "Yes. There are no setup fees or monthly charges.",
            "Hostels can join and use Ceezaa at no cost.",
          ],
        },
        {
          question: "How long does setup take?",
          answer:
            "Setup is quick. Once verified, your hostel can begin sharing events and experiences within a few days.",
        },
        {
          question: "What support do hostels receive?",
          answer:
            "Our team provides onboarding assistance, training resources, and ongoing support to help you get the most out of Ceezaa.",
        },
      ],
    },
    {
      title: "For Experience Partners",
      icon: Handshake,
      faqs: [
        {
          question: "Who can become a Ceezaa partner?",
          answer:
            "Ceezaa works with local creators, guides, and businesses that offer tours, workshops, tastings, classes, or cultural experiences that bring travelers together.",
        },
        {
          question: "How does the partnership work?",
          answer: [
            "After applying and being verified, your experiences appear within hostels and nearby areas where travelers stay.",
            "You can manage listings, bookings, and updates from your partner dashboard.",
          ],
        },
        {
          question: "Is there a cost to join?",
          answer: [
            "There are no setup or monthly fees.",
            "Ceezaa earns a commission on completed bookings, which varies by the type of experience.",
          ],
        },
        {
          question: "When are partners paid?",
          answer: [
            "Payments are sent automatically after each completed experience.",
            "You can track all earnings and payouts in your dashboard.",
          ],
        },
        {
          question: "How does verification work?",
          answer: [
            "Each partner is reviewed to ensure quality, safety, and authenticity.",
            "Our team looks for partners who align with Ceezaa's values of connection and community.",
          ],
        },
        {
          question: "Can I update my listings?",
          answer:
            "Yes. You can edit your experiences, availability, and pricing anytime through your dashboard.",
        },
      ],
    },
    {
      title: "For Restaurants",
      icon: Utensils,
      faqs: [
        {
          question: "How can restaurants join Ceezaa?",
          answer: [
            "Restaurants can partner with Ceezaa in two ways:",
            "• Experience Model: Offer prepaid dining experiences, tastings, or events bookable through Ceezaa.",
            "• Visibility Model: Feature your restaurant in discovery sections to reach travelers nearby.",
          ],
        },
        {
          question: "How are restaurants charged?",
          answer: [
            "Restaurants that host prepaid experiences pay a commission on completed bookings.",
            "Those using Ceezaa for visibility or promotions may pay a small service or advertising fee based on placement.",
          ],
        },
        {
          question: "Do restaurants need to integrate with any system?",
          answer: [
            "No. Ceezaa is designed to work smoothly with or without integrations.",
            "Restaurants can manage their presence and offers directly through the partner dashboard.",
          ],
        },
        {
          question: "Can restaurants choose their model?",
          answer:
            "Yes. Restaurants can select between experience-based or visibility-based partnerships during onboarding.",
        },
      ],
    },
    {
      title: "Payments and Policies",
      icon: CreditCard,
      faqs: [
        {
          question: "How are payments handled?",
          answer: [
            "Ceezaa processes payments securely and automatically.",
            "Partners receive payouts after experiences are completed.",
          ],
        },
        {
          question: "Can partners issue refunds?",
          answer:
            "Yes. Partners can manage cancellations or refunds directly through their dashboard when needed.",
        },
        {
          question: "What happens if an experience is canceled?",
          answer: [
            "If an experience is canceled before it begins, travelers receive a full refund.",
            "If it is interrupted due to weather or other circumstances, our team helps resolve it fairly for both sides.",
          ],
        },
      ],
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {faqSections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <div key={sectionIndex} className="space-y-4">
                {/* Section Header */}
                <div className="flex items-center gap-2">
                  <Icon className="h-8 w-8" />
                  <h2 className="text-xl md:text-2xl font-bold">
                    {section.title}
                  </h2>
                </div>

              {/* FAQs Accordion */}
              <div className="bg-card border border-border rounded-lg px-6">
                <Accordion type="single" collapsible className="w-full">
                  {section.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`item-${sectionIndex}-${faqIndex}`}
                    >
                      <AccordionTrigger className="text-sm md:text-base font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {Array.isArray(faq.answer) ? (
                          <div className="space-y-2">
                            {faq.answer.map((paragraph, i) => (
                              <p
                                key={i}
                                className="text-sm text-muted-foreground font-semibold"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground font-semibold">
                            {faq.answer}
                          </p>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
