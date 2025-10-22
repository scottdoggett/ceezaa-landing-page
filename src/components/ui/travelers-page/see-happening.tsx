import { Target, Calendar, Utensils, Building, Palette, Map } from "lucide-react";

export function SeeHappening() {
  return (
    <section className="w-full py-20 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[20px_20px] z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                See What Is <span className="text-secondary">Happening</span>
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-white/90">
                From dinners to city tours, everything happening in your hostel and
                nearby is right in front of you.
              </p>

              {/* Key benefits */}
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 rounded-lg shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">Match Your Energy</h3>
                    <p className="text-base text-secondary leading-relaxed">
                      Join the activities that match your energy. Discover local spots
                      chosen just for you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 rounded-lg shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">Your Rhythm, Your Way</h3>
                    <p className="text-base text-secondary leading-relaxed">
                      You can plan as much or as little as you want. Ceezaa helps you
                      find your rhythm wherever you are.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Visual "App Feed" Preview */}
            <div className="relative">
              {/* Mockup container with subtle glow */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl">
                <div className="space-y-4">
                  {/* Feed item 1 */}
                  <div className="bg-background text-foreground rounded-2xl p-5 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Utensils className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-lg">Dinners</p>
                        <p className="text-sm text-muted-foreground">Tonight at 7:00 PM</p>
                      </div>
                    </div>
                  </div>

                  {/* Feed item 2 */}
                  <div className="bg-background text-foreground rounded-2xl p-5 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-xl">
                        <Building className="w-7 h-7 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-lg">City Tours</p>
                        <p className="text-sm text-muted-foreground">Starting at 10:00 AM</p>
                      </div>
                    </div>
                  </div>

                  {/* Feed item 3 */}
                  <div className="bg-background text-foreground rounded-2xl p-5 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-xl">
                        <Palette className="w-7 h-7 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-lg">Local Events</p>
                        <p className="text-sm text-muted-foreground">This weekend</p>
                      </div>
                    </div>
                  </div>

                  {/* Feed item 4 */}
                  <div className="bg-background text-foreground rounded-2xl p-5 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Map className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-lg">Experiences</p>
                        <p className="text-sm text-muted-foreground">Curated for you</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle indicator that this is a preview */}
                <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-xs font-semibold shadow-lg">
                  Live Feed
                </div>
              </div>

              {/* Decorative glow effect */}
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
