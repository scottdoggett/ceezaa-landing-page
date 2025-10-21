export function Explore() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-t from-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Find your next moment{" "}
              <span className="text-primary">right where you are.</span>
            </h2>
            <p className="text-xl text-muted-foreground italic">
              A rooftop dinner. A morning surf. A hidden café only the locals know.
            </p>
            <p className="text-lg text-muted-foreground">
              Ceezaa helps travelers discover what is happening nearby, all
              curated to their interests and energy.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow space-y-4">
              <div className="bg-primary/10 rounded-xl p-4 w-fit">
                <div className="text-4xl">🗺️</div>
              </div>
              <h3 className="text-xl font-bold">Curated Experiences</h3>
              <p className="text-muted-foreground">
                See local tours, events, dining spots, and experiences picked
                just for you.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow space-y-4">
              <div className="bg-primary/10 rounded-xl p-4 w-fit">
                <div className="text-4xl">🎨</div>
              </div>
              <h3 className="text-xl font-bold">Hostel Activities</h3>
              <p className="text-muted-foreground">
                Join activities hosted by your hostel or trusted local partners.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow space-y-4">
              <div className="bg-primary/10 rounded-xl p-4 w-fit">
                <div className="text-4xl">🌟</div>
              </div>
              <h3 className="text-xl font-bold">Hidden Gems</h3>
              <p className="text-muted-foreground">
                Discover new places and people without ever feeling like a tourist.
              </p>
            </div>
          </div>

          {/* Bottom CTA section */}
          <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <p className="text-2xl md:text-3xl font-bold mb-2">
              The world outside your hostel is alive.
            </p>
            <p className="text-xl text-secondary-foreground/80">
              Ceezaa makes it easier to step into it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
