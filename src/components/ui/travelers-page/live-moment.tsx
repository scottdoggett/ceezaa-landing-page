export function LiveMoment() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Image placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-muted/10 border border-secondary-foreground/10 shadow-xl">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl">🌟</div>
                  <p className="text-secondary-foreground/70 font-medium">
                    Moment Image
                  </p>
                  <p className="text-sm text-secondary-foreground/60 max-w-xs">
                    People connecting and sharing experiences at a hostel
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Live the <span className="text-primary">Moment</span>
            </h2>

            <p className="text-xl font-semibold">
              Hostel life is about the people you meet and the memories you create.
            </p>

            <div className="space-y-6">
              <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6">
                <p className="text-lg">
                  Ceezaa helps you experience more of it.
                </p>
              </div>

              <div className="bg-primary/20 backdrop-blur border border-primary/30 rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl mt-1">✓</div>
                  <p className="text-lg">
                    You will never miss the events, meals, or experiences that make
                    a place special.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl mt-1">✓</div>
                  <p className="text-lg">
                    You will always feel part of what is going on.
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
