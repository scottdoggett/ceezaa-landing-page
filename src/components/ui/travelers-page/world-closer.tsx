import { Button } from "@/components/ui/button";
import { Globe, Handshake, Sparkles, Users } from "lucide-react";

export function WorldCloser() {
  return (
    <section className="w-full py-16 md:py-24 bg-linear-to-t from-secondary to-secondary/95 text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              A World That Feels <span className="text-primary">Closer</span>
            </h2>
            <p className="text-lg md:text-xl font-semibold text-secondary-foreground/90 max-w-2xl mx-auto">
              Ceezaa connects travelers everywhere who believe in belonging and
              discovery.
            </p>
          </div>

          {/* Key messages */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3 group">
              <div className="p-2.5 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/15 transition-colors">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                Whether you are staying for a night or a month, you can find your
                people and make each stay your own.
              </p>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="p-2.5 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/15 transition-colors">
                <Handshake className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm md:text-base font-semibold">Travel is about connection.</p>
                <p className="text-sm md:text-base leading-relaxed text-secondary-foreground/80">
                  Ceezaa helps you feel part of it.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <div className="text-center space-y-5">
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 mx-auto text-primary" />

              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold">
                  Ready to travel differently?
                </h3>
                <p className="text-sm md:text-base text-secondary-foreground/90">
                  Join travelers around the world who are experiencing hostels in a
                  whole new way.
                </p>
              </div>

              <div className="pt-1">
                <Button
                  size="lg"
                  className="text-sm md:text-base px-8 py-6 font-semibold shadow-xl hover:scale-105 transition-transform"
                >
                  Join the Waitlist →
                </Button>
              </div>
            </div>
          </div>

          {/* Social proof */}
          <div className="text-center">
            <p className="text-xs md:text-sm text-secondary-foreground/70 uppercase tracking-wider mb-3">
              Join thousands of travelers
            </p>
            <div className="flex justify-center">
              <div className="flex -space-x-2.5">
                <div className="w-10 h-10 rounded-full bg-primary/25 border-2 border-secondary flex items-center justify-center shadow-lg">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div className="w-10 h-10 rounded-full bg-accent/25 border-2 border-secondary flex items-center justify-center shadow-lg">
                  <Users className="w-4 h-4 text-accent" />
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/25 border-2 border-secondary flex items-center justify-center shadow-lg">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary-foreground/10 border-2 border-primary flex items-center justify-center text-xs font-bold shadow-lg">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
