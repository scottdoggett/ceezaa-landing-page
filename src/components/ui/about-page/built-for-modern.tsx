export function BuiltForModern() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Built for the{" "}
              <span className="text-primary">modern hostel experience</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium">
              Ceezaa was created to make hostel travel personal.
            </p>
          </div>

          {/* Problem cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/50 border border-border rounded-2xl p-8 space-y-4">
              <div className="text-3xl">😕</div>
              <p className="text-lg">
                Every traveler is different, yet most hostel stays still feel the same.
              </p>
            </div>

            <div className="bg-muted/50 border border-border rounded-2xl p-8 space-y-4">
              <div className="text-3xl">🤷</div>
              <p className="text-lg">
                Guests arrive, check in, and try to figure things out on their own.
              </p>
            </div>

            <div className="bg-muted/50 border border-border rounded-2xl p-8 space-y-4 md:col-span-2">
              <div className="text-3xl">📋</div>
              <p className="text-lg">
                Staff work hard to organize everything through group chats and posters,
                but the experience often feels disconnected.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Ceezaa changes that.
            </h3>
            <div className="space-y-4 text-lg">
              <p>
                It learns what each traveler enjoys, what they care about, and how they like to spend their time.
              </p>
              <p>
                It brings every part of a stay together in one place. Room details, bookings, events, dining, and experiences are all personalized for each guest.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-8">
              <div className="text-4xl mb-4">🎒</div>
              <p className="text-xl font-semibold mb-2">For travelers</p>
              <p className="text-muted-foreground">
                Fewer decisions and more meaningful moments.
              </p>
            </div>

            <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-xl p-8">
              <div className="text-4xl mb-4">🏨</div>
              <p className="text-xl font-semibold mb-2">For hostels</p>
              <p className="text-muted-foreground">
                Smoother operations and guests who feel understood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
