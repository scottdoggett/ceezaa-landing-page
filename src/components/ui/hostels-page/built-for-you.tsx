export function BuiltForYou() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Built for <span className="text-primary">You</span>
            </h2>
            <p className="text-xl font-semibold max-w-2xl mx-auto">
              Ceezaa is simple to set up and easy to use.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">No Setup Costs</h3>
              <p className="text-lg text-muted-foreground font-semibold">
                There are no setup costs or complicated integrations.
              </p>
            </div>

            <div className="bg-card border-2 border-accent/20 rounded-2xl p-8 shadow-xl">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-3">Completely Free</h3>
              <p className="text-lg text-muted-foreground font-semibold">
                It is completely free to start.
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Quick Start</h3>
              <p className="text-lg text-muted-foreground font-semibold">
                You can add your property, upload your events and experiences,
                and begin connecting with guests right away.
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3">Instant Impact</h3>
              <p className="text-lg text-muted-foreground font-semibold">
                Ceezaa is designed to make your property feel more alive and
                your guests more connected from day one.
              </p>
            </div>
          </div>

          {/* Bottom CTA callout */}
          <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-2 border-primary/30 rounded-3xl p-10 md:p-12 text-center">
            <div className="text-5xl md:text-6xl mb-6">🎯</div>
            <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto">
              Simple setup. Zero complexity. Immediate results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
