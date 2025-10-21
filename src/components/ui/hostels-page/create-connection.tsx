import { Handshake, Heart, Globe } from "lucide-react";

export function CreateConnection() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Create Connection That{" "}
                <span className="text-primary">Lasts</span>
              </h2>

              <div className="space-y-6">
                <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6">
                  <p className="text-lg font-semibold">
                    Hostels are about more than beds and bookings.
                  </p>
                </div>

                <div className="bg-primary/20 backdrop-blur border border-primary/30 rounded-xl p-6">
                  <p className="text-lg font-semibold">
                    They are communities filled with stories, friendships, and
                    shared experiences.
                  </p>
                </div>

                <div className="bg-accent/20 backdrop-blur border border-accent/30 rounded-xl p-6">
                  <Handshake className="w-8 h-8 mb-3" />
                  <p className="text-lg font-semibold">
                    Ceezaa helps you strengthen that community.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Benefits */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                <Heart className="w-10 h-10 mb-4 text-foreground" />
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Belonging Creates Loyalty
                </h3>
                <p className="text-lg text-muted-foreground font-semibold">
                  When guests feel like they belong, they come back and tell
                  others.
                </p>
              </div>

              <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8">
                <Globe className="w-10 h-10 mb-4 text-secondary-foreground" />
                <h3 className="text-xl font-bold mb-3 text-secondary-foreground">
                  Lasting Impact
                </h3>
                <p className="text-lg text-secondary-foreground/70 font-semibold">
                  Your hostel becomes a place people talk about long after they
                  leave.
                </p>
              </div>

              <div className="bg-linear-to-r from-accent/20 to-primary/20 backdrop-blur border-l-4 border-accent rounded-r-xl p-6">
                <p className="text-xl font-semibold text-secondary-foreground">
                  Build a community that lasts beyond a single stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
