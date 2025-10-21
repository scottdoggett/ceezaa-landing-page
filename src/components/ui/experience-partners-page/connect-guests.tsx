export function ConnectGuests() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image placeholder */}
            <div className="order-2 lg:order-1">
              <div className="relative h-[450px] rounded-2xl overflow-hidden bg-muted/10 border border-secondary-foreground/10 shadow-xl">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="text-6xl">🤝</div>
                    <p className="text-secondary-foreground/70 font-semibold">
                      Connecting Image
                    </p>
                    <p className="text-sm text-secondary-foreground/60 max-w-xs">
                      Partners connecting with engaged travelers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Connect With Guests Who{" "}
                <span className="text-primary">Care</span>
              </h2>

              <div className="space-y-6">
                <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6">
                  <p className="text-lg font-semibold">
                    Ceezaa matches travelers with experiences that fit their
                    interests, energy, and style.
                  </p>
                </div>

                <div className="bg-primary/20 backdrop-blur border border-primary/30 rounded-xl p-6">
                  <p className="text-lg font-semibold">
                    Every recommendation feels personal, helping your events
                    attract people who truly want to be there.
                  </p>
                </div>

                <div className="bg-accent/20 backdrop-blur border border-accent/30 rounded-xl p-6">
                  <div className="text-3xl mb-3">✨</div>
                  <p className="text-lg font-semibold">
                    Your tours, classes, and gatherings become part of the
                    memories that define someone&apos;s trip.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur border-2 border-primary/30 rounded-xl p-8">
                  <p className="text-xl font-semibold">
                    Ceezaa helps you turn every experience into a story
                    travelers remember and share.
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
