export function SeeHappening() {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              See What Is <span className="text-primary">Happening</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              From dinners to city tours, everything happening in your hostel and
              nearby is right in front of you.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primary/10 rounded-xl p-4 w-fit">
                <div className="text-4xl">🎯</div>
              </div>
              <h3 className="text-2xl font-bold">Match Your Energy</h3>
              <p className="text-lg text-muted-foreground">
                Join the activities that match your energy. Discover local spots
                chosen just for you.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 space-y-4 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-accent/10 rounded-xl p-4 w-fit">
                <div className="text-4xl">📅</div>
              </div>
              <h3 className="text-2xl font-bold">Your Rhythm, Your Way</h3>
              <p className="text-lg text-muted-foreground">
                You can plan as much or as little as you want. Ceezaa helps you
                find your rhythm wherever you are.
              </p>
            </div>
          </div>

          {/* Visual examples */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">🍽️</div>
              <p className="font-semibold">Dinners</p>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">🏙️</div>
              <p className="font-semibold">City Tours</p>
            </div>
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">🎨</div>
              <p className="font-semibold">Local Events</p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">🗺️</div>
              <p className="font-semibold">Experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
