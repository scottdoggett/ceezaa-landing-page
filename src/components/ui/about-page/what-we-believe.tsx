export function WhatWeBelieve() {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What We <span className="text-primary">Believe</span>
            </h2>
          </div>

          {/* Beliefs grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Connection */}
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 space-y-4 hover:shadow-xl transition-shadow">
              <div className="bg-primary/10 rounded-xl p-4 w-fit">
                <div className="text-4xl">🤝</div>
              </div>
              <h3 className="text-2xl font-bold">Connection</h3>
              <p className="text-lg text-muted-foreground">
                Travel is better when people share it.
              </p>
            </div>

            {/* Belonging */}
            <div className="bg-card border-2 border-accent/30 rounded-2xl p-8 space-y-4 hover:shadow-xl transition-shadow">
              <div className="bg-accent/10 rounded-xl p-4 w-fit">
                <div className="text-4xl">🏠</div>
              </div>
              <h3 className="text-2xl font-bold">Belonging</h3>
              <p className="text-lg text-muted-foreground">
                Every traveler should feel seen and welcome wherever they go.
              </p>
            </div>

            {/* Discovery */}
            <div className="bg-card border-2 border-secondary/30 rounded-2xl p-8 space-y-4 hover:shadow-xl transition-shadow">
              <div className="bg-secondary/10 rounded-xl p-4 w-fit">
                <div className="text-4xl">🗺️</div>
              </div>
              <h3 className="text-2xl font-bold">Discovery</h3>
              <p className="text-lg text-muted-foreground">
                Every city has hidden moments waiting to be found.
              </p>
            </div>

            {/* Simplicity */}
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 space-y-4 hover:shadow-xl transition-shadow">
              <div className="bg-primary/10 rounded-xl p-4 w-fit">
                <div className="text-4xl">✨</div>
              </div>
              <h3 className="text-2xl font-bold">Simplicity</h3>
              <p className="text-lg text-muted-foreground">
                The best travel experiences should feel effortless.
              </p>
            </div>

            {/* Community - full width */}
            <div className="md:col-span-2 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/40 rounded-2xl p-10 text-center hover:shadow-xl transition-shadow">
              <div className="bg-primary/20 rounded-full p-4 w-fit mx-auto mb-6">
                <div className="text-5xl">🌍</div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Community</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Hostels are more than places to stay. They are places to connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
