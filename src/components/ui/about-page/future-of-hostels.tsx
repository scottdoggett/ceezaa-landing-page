import { Rocket } from "lucide-react";

export function FutureOfHostels() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-br from-accent/10 via-background to-primary/10 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/3" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left - Visual element */}
            <div className="lg:col-span-2">
              <div className="bg-card border-2 border-primary/30 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <Rocket className="w-16 h-16 mb-4 mx-auto" />
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      Building Tomorrow
                    </p>
                    <p className="text-2xl font-bold text-primary mt-2">
                      The Digital Layer
                    </p>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <p className="text-sm">Instant belonging</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <p className="text-sm">Natural connection</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <p className="text-sm">Seamless discovery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  The Future of{" "}
                  <span className="text-primary">Hostels</span>
                </h2>
                <p className="text-xl font-semibold mb-4">
                  Hostels are evolving, and so is how travelers experience them.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-card border-l-4 border-primary rounded-r-xl p-6 shadow-sm">
                  <p className="text-lg">
                    Ceezaa is building the digital layer that powers that change.
                  </p>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-8">
                  <p className="text-lg mb-4">
                    A world where every traveler can walk into a hostel and instantly feel part of something.
                  </p>
                  <p className="text-lg font-medium">
                    Where connection, discovery, and belonging come naturally.
                  </p>
                </div>

                <div className="text-center md:text-left pt-4">
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    That is the world we are building.
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
