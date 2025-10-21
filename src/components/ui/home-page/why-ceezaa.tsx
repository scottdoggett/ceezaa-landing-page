import { Handshake, Frown, HelpCircle, Sparkles } from "lucide-react";

export function WhyCeezaa() {
  return (
    <section className="w-full py-12 md:py-16 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image side */}
            <div className="order-2 lg:order-1">
              <div className="relative h-[300px] lg:h-[380px] rounded-xl overflow-hidden bg-muted/10">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center space-y-3 p-6">
                    <Handshake className="w-16 h-16 mx-auto" />
                    <p className="text-sm text-secondary-foreground/70 font-semibold">Connection Image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Staying somewhere should feel like{" "}
                <span className="text-primary">belonging.</span>
              </h2>

              <div className="space-y-4">
                {/* Problem statements */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Frown className="w-6 h-6 mt-0.5 shrink-0 text-secondary-foreground/80" />
                    <p className="text-base font-semibold">
                      Hostels are built on connection, but most travelers still arrive as strangers.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 mt-0.5 shrink-0 text-secondary-foreground/80" />
                    <p className="text-base font-semibold">
                      You never really know what is going on. You miss the dinners, the stories, the people who could have become part of your journey.
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="pt-4">
                  <div className="flex items-start gap-3 bg-primary/10 rounded-lg p-4">
                    <Sparkles className="w-6 h-6 mt-0.5 shrink-0 text-primary" />
                    <p className="text-lg font-bold text-foreground">
                      Ceezaa brings that sense of belonging back to every stay.
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
