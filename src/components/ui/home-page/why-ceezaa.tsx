export function WhyCeezaa() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-muted/10 border border-secondary-foreground/10 shadow-xl">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl">🤝</div>
                  <p className="text-secondary-foreground/70 font-medium">Connection Image</p>
                  <p className="text-sm text-secondary-foreground/60 max-w-xs">
                    Travelers connecting and sharing stories in a hostel
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Staying somewhere should feel like{" "}
              <span className="text-primary">belonging.</span>
            </h2>

            <div className="space-y-6">
              {/* Problem cards */}
              <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6 space-y-3">
                <div className="text-2xl">😔</div>
                <p className="text-lg">
                  Hostels are built on connection, but most travelers still arrive
                  as strangers.
                </p>
              </div>

              <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6 space-y-3">
                <div className="text-2xl">❓</div>
                <p className="text-lg">
                  You never really know what is going on. You miss the dinners, the
                  stories, the people who could have become part of your journey.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-primary/20 backdrop-blur border border-primary/30 rounded-xl p-6 mt-8">
                <p className="text-xl font-semibold text-foreground">
                  ✨ Ceezaa brings that sense of belonging back to every stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
