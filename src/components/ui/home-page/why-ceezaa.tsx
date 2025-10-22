import { Handshake, HeartCrack, HelpCircle, Sparkles } from "lucide-react";

export function WhyCeezaa() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-linear-to-br from-primary/5 via-accent/5 to-primary/10 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="text-center space-y-6 p-8">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                      <Handshake className="w-20 h-20 mx-auto relative text-primary stroke-[1.5]" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-secondary-foreground/80">
                        Where Travelers Connect
                      </p>
                      <p className="text-sm text-secondary-foreground/60 max-w-xs mx-auto">
                        Experience authentic connections in every stay
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute bottom-8 left-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Content side */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                  Staying somewhere should feel like{" "}
                  <span className="text-primary inline-block">belonging.</span>
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>

              <div className="space-y-6">
                {/* Problem statements */}
                <div className="space-y-5">
                  <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-muted/20">
                    <div className="shrink-0 my-auto">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-secondary-foreground/15 transition-colors">
                        <HeartCrack className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <p className="text-base lg:text-lg text-secondary-foreground/90 leading-relaxed">
                      Hostels are built on connection, but most travelers still arrive as strangers.
                    </p>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-muted/20">
                    <div className="shrink-0 my-auto">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-secondary-foreground/15 transition-colors">
                        <HelpCircle className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <p className="text-base lg:text-lg text-secondary-foreground/90 leading-relaxed">
                      You never really know what is going on. You miss the dinners, the stories, the people who could have become part of your journey.
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="pt-2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-2xl blur-sm opacity-25 group-hover:opacity-40 transition-opacity" />
                    <div className="relative flex items-start gap-4 bg-linear-to-br from-primary/15 to-accent/10 rounded-xl p-6 border border-primary/20 shadow-lg">
                      <div className="shrink-0 my-auto">
                        <div className="p-2.5 rounded-lg bg-primary/20">
                          <Sparkles className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <p className="text-lg lg:text-xl font-semibold text-foreground-secondary leading-relaxed">
                        Ceezaa brings that sense of belonging back to hostels through tailored experiences and community.
                      </p>
                    </div>
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
