import { Backpack, Hotel, Check } from "lucide-react";

export function WhatCeezaaIs() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Main content with image and text */}
          <div className="grid lg:grid-cols-5 gap-8 md:gap-10 items-center">
            {/* Left - Image placeholder */}
            <div className="lg:col-span-2">
              <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden bg-muted/10 shadow-sm">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center space-y-3 p-6">
                    <Check className="w-12 h-12 mx-auto text-primary" />
                    <p className="text-sm text-muted-foreground font-semibold">
                      Everything in one place
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-3 space-y-5">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-[1.15]">
                  One home for{" "}
                  <span className="text-primary">everything that makes a stay come alive.</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  Ceezaa brings the heart of hostel life into one simple place.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-lg md:text-xl leading-relaxed">
                  From <span className="text-primary font-semibold">check-in</span> to{" "}
                  <span className="text-primary font-semibold">check-out,</span> everything about your stay lives inside Ceezaa.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Events, dining, tours, and local recommendations are personalized so every guest feels part of the story unfolding around them.
                </p>
              </div>
            </div>
        </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 pt-4">
            <div className="space-y-3 bg-secondary/5 rounded-xl p-6 border border-accent/10 hover:border-accent/20 transition-colors">
              <div className="flex items-center gap-3">
                <Backpack className="w-7 h-7 text-primary shrink-0" />
                <h3 className="text-xl font-bold">For travelers</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                More connection and discovery. Every moment personalized to your journey.
              </p>
              <ul className="space-y-2 text-md text-muted-foreground pt-1">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Curated experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Connect with fellow travelers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Discover hidden gems</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 bg-secondary/5 rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-3">
                <Hotel className="w-7 h-7 text-primary shrink-0" />
                <h3 className="text-xl font-bold">For hostels</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Guests who are engaged, informed, and feel at home from day one.
              </p>
              <ul className="space-y-2 text-md text-muted-foreground pt-1">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Streamlined communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Increase engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Build community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}