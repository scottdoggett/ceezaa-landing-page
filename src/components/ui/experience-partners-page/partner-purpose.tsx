import { Check, Palette, Lock, Sparkles, Handshake, Star } from "lucide-react";

export function PartnerPurpose() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Content */}
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Partner With <span className="text-primary">Purpose</span>
              </h2>

              <div className="space-y-5 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold mt-1">
                    1
                  </div>
                  <p className="text-base md:text-lg font-semibold pt-1">
                    Ceezaa works with verified local creators, guides, and
                    businesses that make travel meaningful.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-base md:text-lg font-semibold pt-1">
                    Every partner is reviewed to ensure guests have trusted,
                    high-quality experiences.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold mt-1">
                    3
                  </div>
                  <p className="text-base md:text-lg font-semibold pt-1">
                    Joining Ceezaa means becoming part of a curated network that
                    values authenticity, safety, and connection.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Values */}
            <div className="space-y-5 md:space-y-6">
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold pt-2">Your Passion & Craft</h3>
                </div>
                <p className="text-base md:text-lg text-muted-foreground font-semibold">
                  You bring your passion and craft, and we help travelers
                  discover it.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-card border-2 border-primary/20 rounded-xl p-4 md:p-5 text-center hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-sm md:text-base">Safety</p>
                </div>
                <div className="bg-card border-2 border-accent/20 rounded-xl p-4 md:p-5 text-center hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <p className="font-semibold text-sm md:text-base">Authenticity</p>
                </div>
                <div className="bg-card border-2 border-primary/20 rounded-xl p-4 md:p-5 text-center hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Handshake className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-sm md:text-base">Connection</p>
                </div>
                <div className="bg-card border-2 border-primary/20 rounded-xl p-4 md:p-5 text-center hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-sm md:text-base">Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
