export function ContactSections() {
  const contactSections = [
    {
      title: "General Inquiries",
      description:
        "Have a question, idea, or something that doesn't fit anywhere else? Reach out. We love hearing from people who care about travel, connection, or what we are building.",
      subdescription:
        "Whether it is feedback, partnership ideas, or simple curiosity about Ceezaa, this inbox is always open.",
      email: "hello@ceezaa.com",
      icon: "💬",
    },
    {
      title: "For Hostels",
      description:
        "Interested in bringing Ceezaa to your property? Our team can help you get started and answer any questions about setup, onboarding, or next steps.",
      email: "hostels@ceezaa.com",
      icon: "🏠",
    },
    {
      title: "For Experience Partners",
      description:
        "If you would like to apply to join Ceezaa or have questions about becoming a verified partner, contact our partnerships team.",
      subdescription:
        "We work closely with local creators, guides, and hosts who bring authentic experiences to travelers around the world.",
      email: "partnerships@ceezaa.com",
      icon: "🤝",
    },
    {
      title: "For Travelers",
      description:
        "Have feedback, ideas, or stories from your stay? We would love to hear about your experiences and how Ceezaa made your journey more meaningful.",
      email: "travelers@ceezaa.com",
      icon: "✈️",
    },
    {
      title: "Media and Press",
      description:
        "For interviews, speaking opportunities, or press inquiries, please reach out to our communications team.",
      email: "press@ceezaa.com",
      icon: "📰",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Contact sections grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {contactSections.map((section, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">{section.icon}</div>
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
            ))}
          </div>

          {/* Stay Connected */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-bold mb-3 text-center">
              Stay Connected
            </h3>
            <p className="text-sm font-semibold text-center mb-4">
              Follow our journey as we shape the future of travel and connection.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#"
                className="bg-card border border-border rounded-lg px-4 py-2 text-sm font-semibold hover:bg-primary/10 transition-colors"
              >
                📷 Instagram
              </a>
              <a
                href="#"
                className="bg-card border border-border rounded-lg px-4 py-2 text-sm font-semibold hover:bg-primary/10 transition-colors"
              >
                𝕏 X
              </a>
              <a
                href="#"
                className="bg-card border border-border rounded-lg px-4 py-2 text-sm font-semibold hover:bg-primary/10 transition-colors"
              >
                ▶️ YouTube
              </a>
              <a
                href="#"
                className="bg-card border border-border rounded-lg px-4 py-2 text-sm font-semibold hover:bg-primary/10 transition-colors"
              >
                🎵 TikTok
              </a>
              <a
                href="#"
                className="bg-card border border-border rounded-lg px-4 py-2 text-sm font-semibold hover:bg-primary/10 transition-colors"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
