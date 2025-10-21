export function SimplifyOperations() {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Simplify How You <span className="text-primary">Operate</span>
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="text-4xl mt-1">📝</div>
                <div className="space-y-3">
                  <p className="text-xl font-semibold">
                    You can post your experiences, manage bookings, and share
                    updates in one simple place.
                  </p>
                  <p className="text-lg text-muted-foreground font-semibold">
                    Ceezaa keeps everything clear so you can spend less time on
                    logistics and more time creating.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-3">📢</div>
                <h3 className="font-bold mb-2">Announcements</h3>
                <p className="text-sm text-muted-foreground font-semibold">
                  Share updates with your community
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-3">🎟️</div>
                <h3 className="font-bold mb-2">Event Details</h3>
                <p className="text-sm text-muted-foreground font-semibold">
                  Manage all your experience information
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-bold mb-2">Guest Communication</h3>
                <p className="text-sm text-muted-foreground font-semibold">
                  Keep everyone informed and connected
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/10 border-l-4 border-primary rounded-r-xl p-6">
                <p className="text-lg font-semibold">
                  Your team saves time, and your guests stay informed.
                </p>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6">
                <p className="text-lg font-semibold">
                  Everything stays organized in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
