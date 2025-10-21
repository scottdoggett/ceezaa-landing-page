import { Button } from "@/components/ui/button";

export function ShareWorld() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-linear-to-br from-accent/10 via-background to-primary/10 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                For Experience Partners
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Share What Makes Your World{" "}
              <span className="text-primary">Special</span>
            </h1>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Button
              size="lg"
              className="text-base md:text-lg px-10 py-7 shadow-xl hover:scale-105 transition-transform"
            >
              Become a Partner →
            </Button>
            <p className="text-sm text-muted-foreground font-semibold">
              Join the network connecting travelers with unforgettable local
              experiences.
            </p>
          </div>

          {/* Content sections */}
          <div className="space-y-6 max-w-4xl mx-auto mt-16">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
              <div className="text-4xl mb-4">🎯</div>
              <p className="text-xl font-semibold leading-relaxed">
                Ceezaa helps you reach the right travelers at the right time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8">
                <div className="text-4xl mb-4">📍</div>
                <p className="text-lg font-semibold leading-relaxed">
                  Your experiences appear directly inside the places where
                  guests stay and explore.
                </p>
              </div>

              <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-8">
                <div className="text-4xl mb-4">🌊</div>
                <p className="text-lg font-semibold leading-relaxed">
                  From surf lessons and food tours to yoga sessions, café
                  tastings, and community events.
                </p>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6">
              <p className="text-lg font-semibold">
                Ceezaa makes it easy for travelers to discover what you create
                and join in.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-accent/20 backdrop-blur border-l-4 border-accent rounded-r-xl p-6">
                <p className="text-lg font-semibold">You focus on hosting.</p>
              </div>

              <div className="bg-primary/20 backdrop-blur border-l-4 border-primary rounded-r-xl p-6">
                <p className="text-lg font-semibold">
                  We help travelers find you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
