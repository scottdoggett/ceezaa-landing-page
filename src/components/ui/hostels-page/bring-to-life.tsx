import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function BringToLife() {
  return (
    <section className="w-full py-16 md:py-24 bg-linear-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-block">
              <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                For Hostels
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Bring Your Hostel to <span className="text-primary">Life</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Create memorable experiences that keep guests engaged and connected.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-primary/5 rounded-xl blur-lg" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-lg shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-base md:text-lg leading-relaxed">
                      Ceezaa brings your events, meals, and local experiences together in one place—no more bulletin boards, scattered group chats, or missed moments.
                    </p>
                    <p className="text-base md:text-lg font-medium leading-relaxed">
                      When travelers feel connected, they stay longer, spend more, and share their stories with the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-3 pt-4">
            <Button
              size="lg"
              className="text-base md:text-lg px-10 py-7 shadow-xl hover:scale-105 transition-transform"
            >
              Bring Ceezaa to Your Hostel →
            </Button>
            <p className="text-sm text-muted-foreground font-medium">
              Join early hostels bringing connection to life at no cost to your property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
