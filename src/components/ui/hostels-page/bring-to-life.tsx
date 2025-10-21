import { Button } from "@/components/ui/button";

export function BringToLife() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-linear-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                For Hostels
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Bring Your Hostel to <span className="text-primary">Life</span>
            </h1>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Button
              size="lg"
              className="text-base md:text-lg px-10 py-7 shadow-xl hover:scale-105 transition-transform"
            >
              Bring Ceezaa to Your Hostel →
            </Button>
            <p className="text-sm text-muted-foreground font-semibold">
              Join early hostels bringing connection to life at no cost to your
              property.
            </p>
          </div>

          {/* Content sections */}
          <div className="grid md:grid-cols-2 gap-6 text-left mt-16">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
              <div className="text-4xl mb-4">✨</div>
              <p className="text-lg font-semibold leading-relaxed">
                Ceezaa helps you create the kind of experience travelers
                remember.
              </p>
            </div>

            <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-lg font-semibold leading-relaxed">
                It brings your events, meals, and local experiences together in
                one place where every guest can see them.
              </p>
            </div>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6">
              <p className="text-lg font-semibold">
                No more bulletin boards, scattered group chats, or missed
                moments.
              </p>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6">
              <p className="text-lg font-semibold">
                Ceezaa helps your guests feel part of what makes your space
                special.
              </p>
            </div>

            <div className="bg-primary/20 backdrop-blur border border-primary/30 rounded-xl p-8">
              <div className="text-4xl mb-4 text-center">🌟</div>
              <p className="text-xl font-semibold text-center">
                When travelers feel connected, they stay longer, spend more, and
                share their stories with the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
