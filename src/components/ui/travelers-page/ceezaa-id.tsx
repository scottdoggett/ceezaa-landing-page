import { Ticket, Save, TrendingUp, Heart, Gem } from "lucide-react";

export function CeezaaId() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-br from-accent/10 via-background to-primary/10 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/3" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left - Visual Card */}
            <div className="lg:col-span-2">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-linear-to-br from-primary via-accent to-primary rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />

                {/* Card */}
                <div className="relative bg-linear-to-br from-card via-card to-muted/20 border-2 border-primary/30 rounded-3xl p-6 shadow-2xl overflow-hidden">
                  {/* Decorative background pattern */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-linear-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-accent/10 to-transparent rounded-full blur-2xl" />

                  <div className="relative space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-linear-to-br from-primary to-primary/80 rounded-full p-3 shadow-lg">
                          <Ticket className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Digital Passport</p>
                          <p className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Ceezaa ID</p>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

                    {/* Features List */}
                    <div className="space-y-4">
                      {/* Set Once, Remembered Forever */}
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 rounded-lg p-2 mt-1">
                          <Save className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground mb-1">Set Once, Remembered Forever</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Input your preferences once and never repeat them again.
                          </p>
                        </div>
                      </div>

                      {/* Evolves With Every Stay */}
                      <div className="flex items-start gap-3">
                        <div className="bg-accent/10 rounded-lg p-2 mt-1">
                          <TrendingUp className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground mb-1">Evolves With Every Stay</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Each journey builds on the last, enriching your preferences and adapting to you over time.
                          </p>
                        </div>
                      </div>

                      {/* Personalized Stays */}
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 rounded-lg p-2 mt-1">
                          <Heart className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground mb-1">Personalized Stays</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Every experience aligns with your rhythm, taste, and comfort.
                          </p>
                        </div>
                      </div>

                      {/* Earn and Redeem Points */}
                      <div className="flex items-start gap-3">
                        <div className="bg-accent/10 rounded-lg p-2 mt-1">
                          <Gem className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground mb-1">Earn and Redeem Points</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Turn your travels into rewards that reflect who you are.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Your <span className="text-primary">Ceezaa ID</span>
                </h2>
                <p className="text-xl md:text-2xl font-semibold">
                  Your personal travel identity.
                </p>
              </div>

              <div className="space-y-6">
                {/* Introduction */}
                <p className="text-lg leading-relaxed text-muted-foreground">
                  It reflects who you are, what you love, and how you like to
                  experience the world.
                </p>

                {/* Points section */}
                <div className="space-y-3">
                  <p className="text-lg leading-relaxed">
                    Every journey earns you points that grow with your travels.
                    Redeem them for experiences that match what you love, from
                    local adventures to curated moments that make each stay feel uniquely yours.
                  </p>
                  <div className="flex items-start gap-3 pl-4 border-l-4 border-primary/30">
                    <p className="text-lg font-medium text-primary leading-relaxed">
                      These points turn how you travel into rewards that feel personal
                      and meaningful.
                    </p>
                  </div>
                </div>

                {/* Privacy controls */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6">
                    <p className="font-semibold mb-2">You Choose</p>
                    <p className="text-sm text-muted-foreground">
                      You choose what to share and when to share it.
                    </p>
                  </div>
                  <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-xl p-6">
                    <p className="font-semibold mb-2">Your Control</p>
                    <p className="text-sm text-muted-foreground">
                      Your data stays yours.
                    </p>
                  </div>
                </div>

                {/* Closing message */}
                <div className="pt-4 space-y-3">
                  <p className="text-lg leading-relaxed">
                    Ceezaa simply helps you express yourself wherever you go.
                    It is a dynamic profile that grows with you, a passport you
                    control.
                  </p>
                  <div className="pt-2 border-t border-primary/20">
                    <p className="text-xl font-semibold text-primary">
                      You define your story, and Ceezaa helps you live it your way.
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
