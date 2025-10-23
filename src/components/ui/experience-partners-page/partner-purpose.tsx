import { Palette } from "lucide-react";

export function PartnerPurpose() {
  return (
    <section className="w-full py-20 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Your Passion & Craft */}
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Partner With <span className="text-secondary">Purpose</span>
              </h2>

              <div className="bg-white/10 backdrop-blur border-2 border-secondary/30 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Palette className="w-7 h-7 md:w-8 md:h-8 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold text-white">Your Passion & Craft</h3>
                    <p className="text-sm md:text-base text-white/80 font-semibold leading-relaxed">
                      You bring your passion and craft, and we help travelers
                      discover it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Numbered List */}
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-secondary/70 flex items-center justify-center text-sm font-bold my-auto text-white">
                  1
                </div>
                <p className="text-base md:text-lg font-semibold pt-1 text-white">
                  Ceezaa works with verified local creators, guides, and
                  businesses that make travel meaningful.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-secondary/70 flex items-center justify-center text-sm font-bold my-auto text-white">
                  2
                </div>
                <p className="text-base md:text-lg font-semibold pt-1 text-white">
                  Every partner is reviewed to ensure guests have trusted,
                  high-quality experiences.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-secondary/70 flex items-center justify-center text-sm font-bold my-auto text-white">
                  3
                </div>
                <p className="text-base md:text-lg font-semibold pt-1 text-white">
                  Joining Ceezaa means becoming part of a curated network that
                  values authenticity, safety, and connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
