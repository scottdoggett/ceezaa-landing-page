export function SaveTime() {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Save Time for What Matters{" "}
              <span className="text-primary">Most</span>
            </h2>
            <p className="text-xl font-semibold">
              Your time should go toward the moments that make your hostel
              unique.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="text-4xl mt-1">⏰</div>
                <div className="space-y-3">
                  <p className="text-lg font-semibold">
                    Ceezaa cuts down the small, repetitive tasks that take
                    energy away from your guests.
                  </p>
                  <p className="text-muted-foreground font-semibold">
                    Schedules, updates, announcements, and event details all
                    live in one place.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">📅</div>
                <p className="font-semibold">Schedules</p>
              </div>
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">📣</div>
                <p className="font-semibold">Announcements</p>
              </div>
              <div className="bg-secondary/20 border border-secondary/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🎉</div>
                <p className="font-semibold">Events</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/30 rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4">✨</div>
              <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto">
                Everything runs more smoothly, giving you and your team time to
                focus on hospitality, connection, and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
