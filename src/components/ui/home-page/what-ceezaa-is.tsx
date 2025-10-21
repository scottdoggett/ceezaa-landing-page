export function WhatCeezaaIs() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              One home for{" "}
              <span className="text-primary">everything that makes a stay come alive.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ceezaa brings the heart of hostel life into one simple place.
            </p>
          </div>

          {/* Feature highlight */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-xl md:text-2xl mb-8">
              From{" "}
              <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded">
                check-in
              </span>{" "}
              to{" "}
              <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded">
                check-out,
              </span>{" "}
              everything about your stay lives inside Ceezaa.
            </p>
            <p className="text-lg text-muted-foreground">
              Events, dining, tours, and local recommendations are personalized
              so every guest feels part of the story unfolding around them.
            </p>
          </div>

          {/* Benefits cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-8 space-y-4">
              <div className="text-4xl">🎒</div>
              <h3 className="text-2xl font-bold">For travelers</h3>
              <p className="text-lg text-muted-foreground">
                More connection and discovery. Every moment personalized to your journey.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Curated experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Connect with fellow travelers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Discover hidden gems</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-8 space-y-4">
              <div className="text-4xl">🏨</div>
              <h3 className="text-2xl font-bold">For hostels</h3>
              <p className="text-lg text-muted-foreground">
                Guests who are engaged, informed, and feel at home from day one.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Streamlined communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Increase engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Build community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
