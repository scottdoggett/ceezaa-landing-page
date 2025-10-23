import { Button } from "@/components/ui/button";
import { Globe, BookOpen, Utensils, Sparkles, Rocket, Star } from "lucide-react";

export function JoinMovement() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-t from-primary/20 to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Join the <span className="text-primary">Movement</span>
            </h2>
            <p className="text-xl md:text-2xl font-semibold">
              Ceezaa celebrates the people who make travel meaningful.
            </p>
          </div>

          {/* Content card */}
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg">
            <div className="flex flex-col items-center gap-5 md:gap-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <p className="text-base md:text-lg lg:text-xl font-semibold max-w-2xl leading-relaxed">
                Join us in creating a world where every traveler can connect with
                the best local stories, flavors, and experiences.
              </p>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-5 lg:gap-6 max-w-2xl mx-auto">
            <div className="bg-card border-2 border-primary/20 rounded-xl p-4 md:p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <p className="font-semibold text-xs md:text-sm lg:text-base">Local Stories</p>
            </div>
            <div className="bg-card border-2 border-accent/20 rounded-xl p-4 md:p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-lg bg-accent/10 flex items-center justify-center">
                <Utensils className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <p className="font-semibold text-xs md:text-sm lg:text-base">Authentic Flavors</p>
            </div>
            <div className="bg-card border-2 border-primary/20 rounded-xl p-4 md:p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <p className="font-semibold text-xs md:text-sm lg:text-base">Unique Experiences</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/20 backdrop-blur border-2 border-primary/30 rounded-2xl p-6 md:p-8 lg:p-10 space-y-6 md:space-y-7">
            <div className="space-y-3 md:space-y-4">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-xl bg-primary/20 flex items-center justify-center">
                <Rocket className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                Ready to share your world?
              </h3>
              <p className="text-base md:text-lg text-foreground/90 max-w-2xl mx-auto font-semibold leading-relaxed">
                Become a partner and help travelers discover what makes your
                community special.
              </p>
            </div>
            <Button
              size="lg"
              className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7 font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Become a Partner →
            </Button>
          </div>

          {/* Partner count */}
          <div className="pt-6 md:pt-8">
            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-3 md:mb-4">
              Join our growing network of partners
            </p>
            <div className="flex justify-center items-center">
              <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm relative z-40">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm relative z-30 -ml-3">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm relative z-20 -ml-3">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold relative z-10 -ml-3">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
