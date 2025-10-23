export function BuiltGrowth() {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-10">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Built for <span className="text-primary">Growth</span>
            </h2>
            <p className="text-xl font-semibold">
              Ceezaa is easy to join and simple to use.
            </p>
          </div>

          {/* Growth Chart */}
          <div className="relative">
            {/* Mobile: Vertical Layout */}
            <div className="flex flex-col gap-8 md:hidden">
              {/* Point 1 */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary border-4 border-primary/30 flex items-center justify-center font-bold text-white">
                  1
                </div>
                <div className="flex-1 bg-card border-2 border-primary/20 rounded-xl p-5 shadow-lg">
                  <p className="text-sm md:text-base font-semibold text-foreground leading-relaxed">
                    There are no setup costs or complicated requirements.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary border-4 border-primary/30 flex items-center justify-center font-bold text-white">
                  2
                </div>
                <div className="flex-1 bg-card border-2 border-primary/20 rounded-xl p-5 shadow-lg">
                  <p className="text-sm md:text-base font-semibold text-foreground leading-relaxed">
                    Once verified, you can create your profile, list your experiences, and start reaching travelers instantly.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary border-4 border-primary/30 flex items-center justify-center font-bold text-white">
                  3
                </div>
                <div className="flex-1 bg-card border-2 border-primary/20 rounded-xl p-5 shadow-lg">
                  <p className="text-sm md:text-base font-semibold text-foreground leading-relaxed">
                    It is built to help your business grow through visibility, connection, and community.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop: Horizontal Growth Chart */}
            <div className="hidden md:block">
              <div className="space-y-6 max-w-4xl mx-auto">
                {/* Point 1 */}
                <div className="flex items-center gap-4" style={{ marginLeft: '0' }}>
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary border-4 border-primary/30 flex items-center justify-center font-bold text-white text-lg shadow-lg">
                    1
                  </div>
                  <div className="h-1 bg-primary shrink-0" style={{ width: '100px' }}></div>
                  <div className="bg-card border-2 border-primary/20 rounded-xl p-5 shadow-lg" style={{ width: '500px' }}>
                    <p className="text-sm md:text-base font-semibold text-foreground leading-relaxed">
                      There are no setup costs or complicated requirements.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex items-center justify-center gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary border-4 border-primary/30 flex items-center justify-center font-bold text-white text-lg shadow-lg">
                    2
                  </div>
                  <div className="h-1 bg-primary shrink-0" style={{ width: '100px' }}></div>
                  <div className="bg-card border-2 border-primary/20 rounded-xl p-5 shadow-lg" style={{ width: '500px' }}>
                    <p className="text-sm md:text-base font-semibold text-foreground leading-relaxed">
                      Once verified, you can create your profile, list your experiences, and start reaching travelers instantly.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex items-center justify-end gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary border-4 border-primary/30 flex items-center justify-center font-bold text-white text-lg shadow-lg">
                    3
                  </div>
                  <div className="h-1 bg-primary shrink-0" style={{ width: '100px' }}></div>
                  <div className="bg-card border-2 border-primary/20 rounded-xl p-5 shadow-lg" style={{ width: '500px' }}>
                    <p className="text-sm md:text-base font-semibold text-foreground leading-relaxed">
                      It is built to help your business grow through visibility, connection, and community.
                    </p>
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
