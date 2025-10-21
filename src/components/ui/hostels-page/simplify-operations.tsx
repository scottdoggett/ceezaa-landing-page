export function SimplifyOperations() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-br from-accent/10 via-background to-primary/10 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/3" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left - Image placeholder */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-muted/10 border-2 border-primary/20 shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="text-6xl">⚙️</div>
                    <p className="text-muted-foreground font-semibold">
                      Operations Dashboard
                    </p>
                    <p className="text-sm text-muted-foreground/60 max-w-xs">
                      Simplified hostel management interface
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-3 space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Simplify How You <span className="text-primary">Operate</span>
              </h2>

              <p className="text-xl font-semibold">
                Ceezaa helps you run your hostel more smoothly.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl mt-1">👁️</div>
                    <div>
                      <p className="font-semibold mb-2">Self-Service Guests</p>
                      <p className="text-sm text-muted-foreground">
                        Guests see what is happening without asking.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl mt-1">⚡</div>
                    <div>
                      <p className="font-semibold mb-2">Quick Updates</p>
                      <p className="text-sm text-muted-foreground">
                        Staff can manage updates in seconds.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl mt-1">💬</div>
                    <div>
                      <p className="font-semibold mb-2">Clear Communication</p>
                      <p className="text-sm text-muted-foreground">
                        Communication becomes clear, and the experience feels
                        effortless.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl mt-1">🎯</div>
                    <div>
                      <p className="font-semibold mb-2">Focus on People</p>
                      <p className="text-sm text-muted-foreground">
                        You can focus less on logistics and more on the people
                        in front of you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
