export function BuiltGrowth() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Built for <span className="text-primary">Growth</span>
            </h2>
            <p className="text-xl font-semibold">
              Ceezaa is easy to join and simple to use.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  No Setup Costs
                </h3>
                <p className="text-lg text-muted-foreground font-semibold">
                  There are no setup costs or complicated requirements.
                </p>
              </div>

              <div className="bg-card border-2 border-accent/20 rounded-2xl p-8 shadow-xl">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Quick Verification
                </h3>
                <p className="text-lg text-muted-foreground font-semibold">
                  Once verified, you can create your profile, list your
                  experiences, and start reaching travelers instantly.
                </p>
              </div>
            </div>

            <div className="bg-primary/20 backdrop-blur border-2 border-primary/30 rounded-2xl p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="text-5xl">🚀</div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-secondary-foreground">
                    Grow Through Connection
                  </h3>
                  <p className="text-lg font-semibold text-secondary-foreground/90">
                    It is built to help your business grow through visibility,
                    connection, and community.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">👁️</div>
                <p className="font-semibold">Visibility</p>
              </div>
              <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">🤝</div>
                <p className="font-semibold">Connection</p>
              </div>
              <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">🌍</div>
                <p className="font-semibold">Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
