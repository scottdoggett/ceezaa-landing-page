import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle2, Users } from "lucide-react";

export function BringToLife() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-24 bg-linear-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Hero Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                  For Hostels
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Bring Your Hostel to <span className="text-primary">Life</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                Create memorable experiences that keep guests engaged and connected.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ceezaa helps you build a thriving community where travelers feel at home and keep coming back.
              </p>
            </div>

            {/* Right - Benefits Section */}
            <div className="space-y-8">
              {/* Main value proposition */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-2 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Everything in one place</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Ceezaa brings your events, meals, and local experiences together in one place.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-2 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Simplify communication</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      No more bulletin boards, scattered group chats, or missed moments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-2 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Build lasting connections</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      When travelers feel connected, they stay longer, spend more, and share their stories with the world.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-primary/20 space-y-3">
                <Button
                  asChild
                  size="lg"
                  className="text-base md:text-lg px-10 py-7 shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"
                >
                  <a
                    href="https://hostelinterestform.ceezaa.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bring Ceezaa to Your Hostel →
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground font-medium">
                  Join early hostels bringing connection to life at no cost to your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
