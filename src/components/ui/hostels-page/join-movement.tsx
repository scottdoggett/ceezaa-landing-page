import { Button } from "@/components/ui/button";

export function JoinMovement() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-t from-secondary to-secondary/95 text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Join the <span className="text-primary">Movement</span>
            </h2>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-semibold">
                Hostels are the heart of global travel.
              </p>
              <p className="text-lg md:text-xl font-semibold">
                Ceezaa helps you bring that spirit to life in a way that feels
                modern, organized, and human.
              </p>
            </div>
          </div>

          {/* Content cards */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-2xl p-8">
              <div className="text-4xl mb-4">🌟</div>
              <p className="text-lg font-semibold">
                Join the hostels shaping the future of connection and belonging.
              </p>
            </div>

            <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-2xl p-8">
              <div className="text-4xl mb-4">🚀</div>
              <p className="text-lg font-semibold">
                Be part of a community that believes hostels can be more than
                just a place to sleep.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/20 backdrop-blur border-2 border-primary/30 rounded-3xl p-10 md:p-12 space-y-8">
            <div className="space-y-4">
              <div className="text-5xl md:text-6xl">✨</div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to transform your hostel?
              </h3>
              <p className="text-lg text-secondary-foreground/90 max-w-2xl mx-auto">
                Join early hostels bringing Ceezaa to life at no cost to your
                property.
              </p>
            </div>
            <Button
              size="lg"
              className="text-base md:text-lg px-10 py-7 text-lg font-semibold shadow-xl hover:scale-105 transition-transform"
            >
              Bring Ceezaa to Your Hostel →
            </Button>
          </div>

          {/* Partner logos / social proof */}
          <div className="pt-8">
            <p className="text-sm text-secondary-foreground/60 uppercase tracking-wider mb-4">
              Trusted by hostels worldwide
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-sm">
                🏠
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-sm -ml-3">
                🏠
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-sm -ml-3">
                🏠
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-sm -ml-3">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
