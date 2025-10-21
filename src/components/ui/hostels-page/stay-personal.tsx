import { Megaphone, Zap } from "lucide-react";

export function StayPersonal() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Content */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Make Every Stay Feel{" "}
                <span className="text-primary">Personal</span>
              </h2>

              <p className="text-xl font-semibold">Every traveler is different.</p>

              <div className="space-y-6">
                <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6">
                  <p className="text-lg font-semibold">
                    Ceezaa helps you understand what each guest cares about and
                    how they like to experience your space.
                  </p>
                </div>

                <div className="bg-primary/20 backdrop-blur border border-primary/30 rounded-xl p-6">
                  <p className="text-lg font-semibold">
                    From dining and tours to small details like check-in
                    preferences or dietary needs, Ceezaa makes it easy to
                    personalize each stay without adding extra work for your
                    staff.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Features */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <Megaphone className="w-10 h-10 mb-4 text-foreground" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Direct Communication</h3>
                <p className="text-lg text-muted-foreground font-semibold">
                  You can post updates, share events, and highlight offers
                  directly to your guests.
                </p>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8">
                <Zap className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-3">Simple & Organized</h3>
                <p className="text-lg text-muted-foreground font-semibold">
                  Everything is simple, organized, and made to fit the rhythm of
                  your hostel.
                </p>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary rounded-r-xl p-6">
                <p className="font-semibold text-lg">
                  No extra work. Just better experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
