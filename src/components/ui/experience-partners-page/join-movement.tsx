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
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-10 shadow-xl">
            <Globe className="w-12 h-12 mb-6 mx-auto" />
            <p className="text-lg md:text-xl font-semibold max-w-2xl mx-auto">
              Join us in creating a world where every traveler can connect with
              the best local stories, flavors, and experiences.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-linear-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-6">
              <BookOpen className="w-10 h-10 mb-3 mx-auto" />
              <p className="font-semibold">Local Stories</p>
            </div>
            <div className="bg-linear-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-6">
              <Utensils className="w-10 h-10 mb-3 mx-auto" />
              <p className="font-semibold">Authentic Flavors</p>
            </div>
            <div className="bg-linear-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-6">
              <Sparkles className="w-10 h-10 mb-3 mx-auto" />
              <p className="font-semibold">Unique Experiences</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-linear-to-br from-primary/30 to-accent/30 backdrop-blur border-2 border-primary/40 rounded-3xl p-10 md:p-12 space-y-8">
            <div className="space-y-4">
              <Rocket className="w-14 h-14 md:w-16 md:h-16 mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to share your world?
              </h3>
              <p className="text-lg text-foreground/90 max-w-2xl mx-auto font-semibold">
                Become a partner and help travelers discover what makes your
                community special.
              </p>
            </div>
            <Button
              size="lg"
              className="text-lg md:text-lg px-10 py-7 font-semibold shadow-xl hover:scale-105 transition-transform"
            >
              Become a Partner →
            </Button>
          </div>

          {/* Partner count */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Join our growing network of partners
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-sm">
                <Star className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-sm -ml-3">
                <Star className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-sm -ml-3">
                <Star className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-sm -ml-3">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
