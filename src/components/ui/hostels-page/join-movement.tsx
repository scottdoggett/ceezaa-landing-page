import { Button } from "@/components/ui/button";
import { Star, Rocket } from "lucide-react";

export function JoinMovement() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-t from-secondary to-secondary/95 text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Join the <span className="text-primary">Movement</span>
            </h2>
            <div className="space-y-4">
              <p className="text-lg md:text-2xl font-semibold">
                Ceezaa helps you bring that spirit to life in a way that feels
                modern, organized, and human.
              </p>
            </div>
          </div>

          {/* Content with icons */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg font-semibold text-left">
                Join the hostels shaping the future of connection and belonging.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg font-semibold text-left">
                Be part of a community that believes hostels can be more than
                just a place to sleep.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/20 backdrop-blur border-2 border-primary/30 rounded-2xl p-8 md:p-10 space-y-6 max-w-3xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-bold">
                Ready to transform your hostel?
              </h3>
              <p className="text-base text-secondary-foreground/90 max-w-xl mx-auto">
                Join early hostels bringing Ceezaa to life at no cost to your
                property.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              <a
                href="https://tally.so/r/mRXK1j"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bring Ceezaa to Your Hostel →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
