import { Button } from "@/components/ui/button";
import { Globe, Handshake, Sparkles, User } from "lucide-react";

export function WorldCloser() {
  return (
    <section className="w-full py-12 md:py-20 bg-linear-to-t from-secondary to-secondary/95 text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              A World That Feels <span className="text-primary">Closer</span>
            </h2>
            <p className="text-base md:text-lg font-semibold text-secondary-foreground/90">
              Ceezaa connects travelers everywhere who believe in belonging and
              discovery.
            </p>
          </div>

          {/* Content cards */}
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6">
              <Globe className="w-8 h-8 mb-3" />
              <p className="text-sm md:text-base leading-relaxed">
                Whether you are staying for a night or a month, you can find your
                people and make each stay your own.
              </p>
            </div>

            <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6">
              <Handshake className="w-8 h-8 mb-3" />
              <p className="text-sm md:text-base font-semibold mb-1.5">Travel is about connection.</p>
              <p className="text-sm md:text-base leading-relaxed">Ceezaa helps you feel part of it.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/20 backdrop-blur border-2 border-primary/30 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="space-y-3">
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold">
                Ready to travel differently?
              </h3>
              <p className="text-sm md:text-base text-secondary-foreground/90 max-w-xl mx-auto">
                Join travelers around the world who are experiencing hostels in a
                whole new way.
              </p>
            </div>
            <Button
              size="lg"
              className="text-sm md:text-base px-8 py-6 font-semibold shadow-xl hover:scale-105 transition-transform"
            >
              Join the Waitlist →
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-4">
            <p className="text-xs md:text-sm text-secondary-foreground/60 uppercase tracking-wider mb-3">
              Join thousands of travelers
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-9 h-9 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div className="w-9 h-9 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center -ml-2">
                <User className="w-4 h-4" />
              </div>
              <div className="w-9 h-9 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center -ml-2">
                <User className="w-4 h-4" />
              </div>
              <div className="w-9 h-9 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-xs font-semibold -ml-2">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
