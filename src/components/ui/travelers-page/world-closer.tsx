import { Button } from "@/components/ui/button";
import { Globe, Handshake, Sparkles, User } from "lucide-react";

export function WorldCloser() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-t from-secondary to-secondary/95 text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              A World That Feels <span className="text-primary">Closer</span>
            </h2>
            <p className="text-xl md:text-2xl font-semibold">
              Ceezaa connects travelers everywhere who believe in belonging and
              discovery.
            </p>
          </div>

          {/* Content cards */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-2xl p-8">
              <Globe className="w-10 h-10 mb-4" />
              <p className="text-lg">
                Whether you are staying for a night or a month, you can find your
                people and make each stay your own.
              </p>
            </div>

            <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-2xl p-8">
              <Handshake className="w-10 h-10 mb-4" />
              <p className="text-lg font-semibold mb-2">Travel is about connection.</p>
              <p className="text-lg">Ceezaa helps you feel part of it.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/20 backdrop-blur border-2 border-primary/30 rounded-3xl p-10 md:p-12 space-y-8">
            <div className="space-y-4">
              <Sparkles className="w-14 h-14 md:w-16 md:h-16 mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to travel differently?
              </h3>
              <p className="text-lg text-secondary-foreground/90 max-w-2xl mx-auto">
                Join travelers around the world who are experiencing hostels in a
                whole new way.
              </p>
            </div>
            <Button
              size="lg"
              className="text-base md:text-lg px-10 py-7 text-lg font-semibold shadow-xl hover:scale-105 transition-transform"
            >
              Join the Waitlist →
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-8">
            <p className="text-sm text-secondary-foreground/60 uppercase tracking-wider mb-4">
              Join thousands of travelers
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-sm">
                <User className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-sm -ml-3">
                <User className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-sm -ml-3">
                <User className="w-5 h-5" />
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
