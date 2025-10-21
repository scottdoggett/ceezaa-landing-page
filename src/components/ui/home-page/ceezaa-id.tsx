export function CeezaaId() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-br from-accent/10 via-background to-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left - Visual Card */}
            <div className="lg:col-span-2">
              <div className="bg-card border-2 border-primary/30 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/20 rounded-full p-4">
                      <div className="text-4xl">🎫</div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">Your Digital Passport</p>
                      <p className="text-xl font-bold text-primary">Ceezaa ID</p>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <p className="text-sm text-muted-foreground">12 cities visited</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <p className="text-sm text-muted-foreground">47 experiences joined</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <p className="text-sm text-muted-foreground">89 connections made</p>
                    </div>
                  </div>

                  <div className="bg-linear-to-r from-primary/20 to-accent/20 rounded-xl p-4">
                    <p className="text-xs text-center font-medium">
                      Your journey, your story, always with you
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Your story in one place,{" "}
                  <span className="text-primary">your passport to a personalized world.</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Every traveler carries moments that shape them. The places
                    they have stayed, the experiences that made them feel alive,
                    and the people who became part of their journey.
                  </p>

                  <div className="bg-card border-l-4 border-primary rounded-r-xl p-6 shadow-sm">
                    <p className="font-semibold text-foreground">
                      Your Ceezaa ID brings those memories together.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-xl p-5 space-y-2">
                    <div className="text-2xl">🧠</div>
                    <p className="font-medium text-foreground">Learns with you</p>
                    <p className="text-sm text-muted-foreground">
                      Understands what you love and seek
                    </p>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-5 space-y-2">
                    <div className="text-2xl">🌍</div>
                    <p className="font-medium text-foreground">Grows alongside you</p>
                    <p className="text-sm text-muted-foreground">
                      Each new place feels more familiar
                    </p>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-6">
                  <p className="font-medium text-foreground mb-2">
                    ✨ It is your passport to a personalized world.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    A quiet connection to the experiences, cities, and stories that
                    become part of who you are.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
