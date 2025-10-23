import { Button } from "@/components/ui/button";
import {
  Globe,
  BookOpen,
  Utensils,
  Sparkles,
  Rocket,
  Star,
} from "lucide-react";

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
            <p className="text-sm md:text-base lg:text-lg font-semibold">
              Join us in creating a world where every traveler can connect with
              the best local stories, flavors, and experiences.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/20 backdrop-blur border-2 border-primary/30 rounded-2xl p-6 md:p-8 lg:p-10 space-y-6 md:space-y-7">
            <div className="space-y-3 md:space-y-4">
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
        </div>
      </div>
    </section>
  );
}
