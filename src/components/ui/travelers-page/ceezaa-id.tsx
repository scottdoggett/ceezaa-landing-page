import { Ticket, Lock } from "lucide-react";

export function CeezaaId() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-br from-accent/10 via-background to-primary/10 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/3" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left - Mock ID Card */}
            <div className="lg:col-span-2">
              <div className="bg-card border-2 border-primary/30 rounded-3xl p-8 shadow-2xl sticky top-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/20 rounded-full p-4">
                      <Ticket className="w-10 h-10" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">
                        Your Travel Identity
                      </p>
                      <p className="text-xl font-bold text-primary">Ceezaa ID</p>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground uppercase">
                      What You Share
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <p className="text-sm">Dietary preferences</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <p className="text-sm">Interests & hobbies</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <p className="text-sm">Favorite activities</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <p className="text-sm">Connection style</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-linear-to-r from-primary/20 to-accent/20 rounded-xl p-4">
                    <p className="text-xs text-center font-medium flex items-center justify-center gap-2">
                      <Lock className="w-3 h-3" /> Your data transforms into personalized stays.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Your <span className="text-primary">Ceezaa ID</span>
                </h2>
                <p className="text-xl md:text-2xl font-semibold">
                  Your personal travel identity.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                  <p className="text-lg leading-relaxed">
                    It reflects who you are, what you love, and how you like to
                    experience the world.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                  <p className="text-lg leading-relaxed mb-4">
                    Every journey earns you points that grow with your travels. 
                    Redeem them for experiences that match what you love, from 
                    local adventures to curated moments that make each stay feel uniquely yours.
                  </p>
                  <p className="text-lg leading-relaxed font-medium text-primary">
                    These points turn how you travel into rewards that feel personal
                    and meaningful.
                  </p>
                </div>

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

                <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 space-y-4">
                  <p className="text-lg font-medium">
                    Ceezaa simply helps you express yourself wherever you go.
                  </p>
                  <p className="text-lg">
                    It is a dynamic profile that grows with you, a passport you
                    control.
                  </p>
                  <p className="text-xl font-semibold text-primary">
                    You define your story, and Ceezaa helps you live it your way.
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
