export function PartnerPurpose() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Content */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Partner With <span className="text-primary">Purpose</span>
              </h2>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                  <p className="text-lg font-semibold">
                    Ceezaa works with verified local creators, guides, and
                    businesses that make travel meaningful.
                  </p>
                </div>

                <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6">
                  <div className="text-3xl mb-3">✓</div>
                  <p className="text-lg font-semibold">
                    Every partner is reviewed to ensure guests have trusted,
                    high-quality experiences.
                  </p>
                </div>

                <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-6">
                  <p className="text-lg font-semibold">
                    Joining Ceezaa means becoming part of a curated network that
                    values authenticity, safety, and connection.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Values */}
            <div className="space-y-6">
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3">Your Passion & Craft</h3>
                <p className="text-lg text-muted-foreground font-semibold">
                  You bring your passion and craft, and we help travelers
                  discover it.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">🔒</div>
                  <p className="font-semibold">Safety</p>
                </div>
                <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">✨</div>
                  <p className="font-semibold">Authenticity</p>
                </div>
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">🤝</div>
                  <p className="font-semibold">Connection</p>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">⭐</div>
                  <p className="font-semibold">Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
