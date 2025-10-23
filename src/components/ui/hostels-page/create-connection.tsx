import { Heart, Globe, ArrowRight } from "lucide-react";

export function CreateConnection() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Create Connection That{" "}
                <span className="text-primary">Lasts</span>
              </h2>

              <div className="space-y-6 text-lg md:text-xl">
                <p className="font-semibold leading-relaxed">
                  Hostels are about more than beds and bookings.
                </p>

                <p className="text-2xl md:text-3xl font-bold leading-tight opacity-90">
                  They are communities filled with{" "}
                  <span className="text-primary">stories</span>,{" "}
                  <span className="text-primary">friendships</span>, and{" "}
                  <span className="text-primary">shared experiences</span>.
                </p>

                <div className="flex items-center gap-3 pt-4">
                  <ArrowRight className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-xl font-semibold">
                    Ceezaa helps you strengthen that community.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Benefits */}
            <div className="space-y-6">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 shrink-0 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Belonging Creates Loyalty
                    </h3>
                    <p className="text-lg opacity-80">
                      When guests feel like they belong, they come back and tell others.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="w-8 h-8 shrink-0 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Lasting Impact
                    </h3>
                    <p className="text-lg opacity-80">
                      Your hostel becomes a place people talk about long after they leave.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-r from-accent/20 to-primary/20 backdrop-blur border-l-4 border-accent rounded-r-xl p-6 mt-8">
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
