import Image from "next/image";
import { Backpack, Hotel, Check } from "lucide-react";

export function WhatCeezaaIs() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Main content with image and text */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-start">
            {/* Left - Image */}
            <div className="w-[280px] shrink-0 mx-auto lg:mx-0 order-2 lg:order-1">
              <div className="relative h-full">
                <Image
                  src="https://bl974d7s47.ufs.sh/f/eiqM2oDvPqg1b2hYKeNks2weAdSjmptZznqFh1UJ6YlTgCQD"
                  alt="What Ceezaa Is - Everything in one place"
                  width={280}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 space-y-5 order-1 lg:order-2 w-full">
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

              {/* Benefits - Desktop only (inside content) */}
              <div className="hidden lg:grid md:grid-cols-2 gap-5 md:gap-6 pt-4">
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

            {/* Benefits - Mobile only (separate for ordering) */}
            <div className="order-3 w-full lg:hidden">
              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
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
        </div>
      </div>
    </section>
  );
}