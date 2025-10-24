import Image from "next/image";
import { Eye, Target, Utensils } from "lucide-react";

export function YourStay() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Content side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                    Your Experience
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                  Live your stay,{" "}
                  <span className="text-primary">not just your check-in.</span>
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>

              <div className="space-y-6">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  A hostel is more than a place to sleep. It is a living space
                  filled with stories, people, and small moments that make a trip
                  unforgettable.
                </p>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-2xl blur-sm opacity-25 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-linear-to-br from-primary/75 to-accent/65 rounded-lg p-4 border border-primary/20 shadow-md">
                    <p className="text-lg lg:text-xl font-semibold text-secondary-foreground leading-relaxed">
                      Ceezaa brings those moments closer.
                    </p>
                  </div>
                </div>

                <div className="space-y-5 pt-2">
                  <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-background/50">
                    <div className="shrink-0 mt-1">
                      <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                        <Eye className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-foreground text-base lg:text-lg">See what&apos;s happening</p>
                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">Stay in the loop with live updates</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-background/50">
                    <div className="shrink-0 mt-1">
                      <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-foreground text-base lg:text-lg">Join experiences that match your mood</p>
                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">Activities tailored to your vibe</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-background/50">
                    <div className="shrink-0 mt-1">
                      <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                        <Utensils className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-foreground text-base lg:text-lg">Discover dining and activities</p>
                      <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">Curated recommendations just for you</p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-base lg:text-lg font-medium text-foreground leading-relaxed">
                    Every stay feels natural, warm, and alive.{" "}
                    <span className="text-primary">Travel should feel like living, not logistics.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Image side */}
            <div className="relative">
              <div className="hidden lg:block sticky top-[calc(50vh-200px)] lg:top-[calc(50vh-250px)] h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://bl974d7s47.ufs.sh/f/eiqM2oDvPqg17ZPp2RfWoZnQIry8B5JMPtvdHjGmAlKuDg9h"
                  alt="Your Stay Experience - Travelers enjoying hostel activities and connections"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
