import { Rocket, Sparkles } from "lucide-react";

export function FutureOfHostels() {
  return (
    <section className="w-full py-16 md:py-24 bg-linear-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
      {/* Decorative linear blobs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/3 opacity-70" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 opacity-70" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left - Visual element */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-br from-primary to-accent rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-card border-2 border-primary/30 rounded-3xl p-8 shadow-xl space-y-6">

                  {/* Header */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 mb-4">
                      <Rocket className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                      The Platform
                    </p>
                    <p className="text-2xl font-bold text-primary mt-2">
                      How It Works
                    </p>
                  </div>

                  <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />

                  {/* What the digital layer does */}
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0 group-hover/item:scale-150 transition-transform" />
                        <div className="space-y-1">
                          <p className="font-semibold text-base">Learns Your Preferences</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            The platform adapts to your travel style, interests, and pace from the moment you check in.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0 group-hover/item:scale-150 transition-transform" />
                        <div className="space-y-1">
                          <p className="font-semibold text-base">Connects You Instantly</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            See everything happening at your hostel and nearby in real-time—events, activities, and local experiences.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3 group/item">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0 group-hover/item:scale-150 transition-transform" />
                        <div className="space-y-1">
                          <p className="font-semibold text-base">Simplifies Everything</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            Book activities, manage your stay, and discover hidden gems—all in one place, without the hassle.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-3 space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  The Future of{" "}
                  <span className="text-primary">Hostels</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Hostels are evolving, and so is how travelers experience them.
                </p>
              </div>

              <div className="space-y-5">
                <div className="group bg-card border-l-4 border-primary hover:border-primary/70 rounded-r-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <p className="text-base md:text-lg leading-relaxed">
                    Ceezaa is building the digital layer that powers that change.
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-linear-to-r from-primary to-accent rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity" />
                  <div className="relative bg-linear-to-br from-primary/10 to-accent/5 border border-primary/30 rounded-xl p-6 md:p-8">
                    <div className="flex items-start gap-3 mb-4">
                      <Sparkles className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <p className="text-base md:text-lg leading-relaxed">
                        A world where every traveler can walk into a hostel and instantly feel part of something.
                      </p>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed font-medium pl-8">
                      Where connection, discovery, and belonging come naturally.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="inline-block">
                    <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      That is the world we are building.
                    </p>
                    <div className="h-1 w-full bg-linear-to-r from-primary to-accent rounded-full" />
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