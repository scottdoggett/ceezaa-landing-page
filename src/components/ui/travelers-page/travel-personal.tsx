export function TravelPersonal() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-linear-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                  For Travelers
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Travel That Feels{" "}
                <span className="text-primary">Personal</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold">
                Ceezaa helps you get more out of every stay.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground">
                It connects you to the people, moments, and experiences that make
                travel feel alive.
              </p>
            </div>

            {/* Right - Feature cards */}
            <div className="space-y-6">
              <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 shadow-xl">
                <div className="text-4xl mb-4">🚫</div>
                <p className="text-lg font-medium mb-2">No more guessing</p>
                <p className="text-muted-foreground">
                  No more guessing what is happening or trying to find things
                  through group chats.
                </p>
              </div>

              <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8">
                <div className="text-4xl mb-4">✨</div>
                <p className="text-lg font-semibold mb-3 text-foreground">
                  Everything in one place
                </p>
                <p className="text-muted-foreground mb-4">
                  With Ceezaa, you see everything your hostel has to offer in one
                  place.
                </p>
                <p className="font-medium text-foreground">
                  Events, dining, and local experiences are tailored to you and how
                  you like to explore.
                </p>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6">
                <p className="text-lg font-semibold text-foreground">
                  Every stay feels easier, more connected, and more meaningful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
