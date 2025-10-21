export function YourStay() {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content side */}
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                  Your Experience
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Live your stay,{" "}
                <span className="text-primary">not just your check-in.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                A hostel is more than a place to sleep. It is a living space
                filled with stories, people, and small moments that make a trip
                unforgettable.
              </p>

              <div className="bg-card border-l-4 border-primary rounded-r-xl p-6 shadow-sm">
                <p className="font-semibold text-foreground text-xl">
                  Ceezaa brings those moments closer.
                </p>
              </div>

              <div className="grid gap-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 text-2xl">👀</div>
                  <div>
                    <p className="font-medium text-foreground">See what&apos;s happening</p>
                    <p className="text-sm">Stay in the loop with live updates</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 text-2xl">🎯</div>
                  <div>
                    <p className="font-medium text-foreground">Join experiences that match your mood</p>
                    <p className="text-sm">Activities tailored to your vibe</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 text-2xl">🍽️</div>
                  <div>
                    <p className="font-medium text-foreground">Discover dining and activities</p>
                    <p className="text-sm">Curated recommendations just for you</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mt-8">
                <p className="text-lg font-medium text-foreground">
                  Every stay feels natural, warm, and alive.{" "}
                  <span className="text-primary">Travel should feel like living, not logistics.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden bg-card border border-border shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-bl from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="text-6xl">✨</div>
                <p className="text-muted-foreground font-medium">Stay Experience</p>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Image showing travelers enjoying hostel activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
