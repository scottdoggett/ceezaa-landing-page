import {
  Frown,
  UserX,
  Clipboard,
  Backpack,
  Hotel,
  Sparkles,
} from "lucide-react";

export function BuiltForModern() {
  return (
    <section className="w-full py-16 md:py-24 bg-linear-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Built for the{" "}
              <span className="text-primary">modern hostel experience</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ceezaa was created to make hostel travel personal.
            </p>
          </div>

          {/* Two Column Layout: Problems & Solution */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start lg:items-stretch">
            {/* Left: Problem cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4 text-muted-foreground">
                The Challenge
              </h3>

              <div className="group bg-card border border-border rounded-xl p-6 hover:border-red-200 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4">
                  <div className="shrink-0 my-auto">
                    <div className="p-2 rounded-lg bg-muted">
                      <Frown className="w-6 h-6 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">
                    Every traveler is different, yet most hostel stays still
                    feel the same.
                  </p>
                </div>
              </div>

              <div className="group bg-card border border-border rounded-xl p-6 hover:border-red-200 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4">
                  <div className="shrink-0 my-auto">
                    <div className="p-2 rounded-lg bg-muted">
                      <UserX className="w-6 h-6 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">
                    Guests arrive, check in, and try to figure things out on
                    their own.
                  </p>
                </div>
              </div>

              <div className="group bg-card border border-border rounded-xl p-6 hover:border-red-200 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4">
                  <div className="shrink-0 my-auto">
                    <div className="p-2 rounded-lg bg-muted">
                      <Clipboard className="w-6 h-6 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">
                    Staff work hard to organize everything through group chats
                    and posters, but the experience often feels disconnected.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Solution */}
            {/* Right: Solution */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold text-primary">The Solution</h3>

              <div className="relative group flex-1">
                <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-linear-to-br from-primary/10 to-accent/5 border-2 border-primary/20 rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold">Ceezaa changes that.</h4>
                  </div>

                  <p className="text-base leading-relaxed mb-2">
                    It learns what each traveler enjoys, what they care about,
                    and how they like to spend their time.
                  </p>

                  <p className="text-base leading-relaxed mb-2">
                    It brings every part of a stay together in one place. Room
                    details, bookings, events, dining, and experiences are all
                    personalized for each guest.
                  </p>
                  <p className="text-base leading-relaxed">
                   No more guessing, no more missing out. Just a seamless, 
                   connected experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits - Horizontal Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-linear-to-br from-accent/10 to-accent/5 border-l-4 border-accent rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <Backpack className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2">For travelers</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fewer decisions and more meaningful moments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-secondary/10 to-secondary/5 border-l-4 border-secondary rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="p-2 rounded-lg bg-secondary/20">
                    <Hotel className="w-7 h-7 text-secondary" />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2">For hostels</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Smoother operations and guests who feel understood.
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
