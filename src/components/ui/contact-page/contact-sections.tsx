import { MessageCircle, Home, Handshake, Plane, Newspaper } from "lucide-react";
// import Image from "next/image";

export function ContactSections() {
  const contactSections = [
    {
      title: "General Inquiries",
      description:
        "Have a question, idea, or something that doesn't fit anywhere else? Reach out. We love hearing from people who care about travel, connection, or what we are building.",
      subdescription:
        "Whether it is feedback, partnership ideas, or simple curiosity about Ceezaa, this inbox is always open.",
      email: "hello@ceezaa.com",
      icon: "MessageCircle",
    },
    {
      title: "For Hostels",
      description:
        "Interested in bringing Ceezaa to your property? Our team can help you get started and answer any questions about setup, onboarding, or next steps.",
      email: "hostels@ceezaa.com",
      icon: "Home",
    },
    {
      title: "For Partners",
      description:
        "If you would like to explore partnering with Ceezaa, whether as a creator, influencer, brand, or experience partner, our team would love to connect.",
      subdescription:
        "We work with partners who share our mission of bringing travelers closer to authentic and meaningful experiences around the world.",
      email: "partnerships@ceezaa.com",
      icon: "Handshake",
    },
    {
      title: "For Travelers",
      description:
        "Have feedback, ideas, or stories from your stay? We would love to hear about your experiences and how Ceezaa made your journey more meaningful.",
      email: "travelers@ceezaa.com",
      icon: "Plane",
    },
    {
      title: "Media and Press",
      description:
        "For interviews, speaking opportunities, or press inquiries, please reach out to our communications team.",
      email: "press@ceezaa.com",
      icon: "Newspaper",
    },
  ];

  const iconMap = {
    MessageCircle: MessageCircle,
    Home: Home,
    Handshake: Handshake,
    Plane: Plane,
    Newspaper: Newspaper,
  };

  // const socialLinks = [
  //   {
  //     name: "Instagram",
  //     href: "#",
  //     icon: "/social-icons/instagram.svg",
  //     iconDark: "/social-icons/instagram-dark.svg",
  //   },
  //   {
  //     name: "X",
  //     href: "#",
  //     icon: "/social-icons/x.svg",
  //     iconDark: "/social-icons/x-dark.svg",
  //   },
  //   {
  //     name: "YouTube",
  //     href: "#",
  //     icon: "/social-icons/youtube.svg",
  //     iconDark: "/social-icons/youtube-dark.svg",
  //   },
  //   {
  //     name: "TikTok",
  //     href: "#",
  //     icon: "/social-icons/tiktok.svg",
  //     iconDark: "/social-icons/tiktok-dark.svg",
  //   },
  //   {
  //     name: "LinkedIn",
  //     href: "#",
  //     icon: "/social-icons/linkedin.svg",
  //     iconDark: "/social-icons/linkedin-dark.svg",
  //   },
  // ];

  return (
    <section className="w-full py-12 md:py-16 bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Contact sections grid */}
          <div className="grid md:grid-cols-2 gap-4 animate-fade-in-up animate-delay-300">
            {contactSections.map((section, index) => {
              const IconComponent = iconMap[section.icon as keyof typeof iconMap];
              const isLastItem = index === contactSections.length - 1;
              return (
              <div
                key={index}
                className={`bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow ${
                  isLastItem ? "md:col-span-2 md:max-w-[calc(50%-0.5rem)] md:mx-auto" : ""
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <IconComponent className="w-7 h-7 shrink-0" />
                  <h3 className="text-lg font-bold">{section.title}</h3>
                </div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  {section.description}
                </p>
                {section.subdescription && (
                  <p className="text-sm text-muted-foreground mb-3">
                    {section.subdescription}
                  </p>
                )}
                <a
                  href={`mailto:${section.email}`}
                  className="inline-block text-sm font-semibold text-primary hover:underline"
                >
                  {section.email}
                </a>
              </div>
              );
            })}
          </div>

          {/* Stay Connected */}
          {/* <div className="bg-linear-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-bold mb-3 text-center">
              Stay Connected
            </h3>
            <p className="text-sm font-semibold text-center mb-4">
              Follow our journey as we shape the future of travel and connection.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-card border border-border rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-semibold hover:bg-primary/10 transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="dark:hidden"
                  />
                  <Image
                    src={social.iconDark}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="hidden dark:block"
                  />
                  {social.name}
                </a>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
