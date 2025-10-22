import { Map, Palette, Star } from "lucide-react";

export function Explore() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-linear-to-br from-primary to-primary/95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Find your next moment{" "}
              <span className="text-secondary">right where you are.</span>
            </h2>
            <p className="text-lg lg:text-xl text-white font-semibold italic">
              A rooftop dinner. A morning surf. A hidden café only the locals know.
            </p>
            <p className="text-base lg:text-lg text-white font-semibold leading-relaxed">
              Ceezaa helps travelers discover what is happening nearby, all
              curated to their interests and energy.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="bg-accent-foreground/12 backdrop-blur-sm border border-white/15 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:bg-accent-foreground/30 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/30 rounded-lg p-2.5 shrink-0">
                  <Map className="w-6 h-6 text-secondary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white">Curated Experiences</h3>
                  <p className="text-md text-white/80 leading-relaxed">
                    See local tours, events, dining spots, and experiences picked
                    just for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent-foreground/12 backdrop-blur-sm border border-white/15 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:bg-accent-foreground/30 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/30 rounded-lg p-2.5 shrink-0">
                  <Palette className="w-6 h-6 text-secondary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white">Hostel Activities</h3>
                  <p className="text-md text-white/80 leading-relaxed">
                    Join activities hosted by your hostel or trusted local partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent-foreground/12 backdrop-blur-sm border border-white/15 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:bg-accent-foreground/30 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/30 rounded-lg p-2.5 shrink-0">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white">Hidden Gems</h3>
                  <p className="text-md text-white/80 leading-relaxed">
                    Discover new places and people without ever feeling like a tourist.
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
