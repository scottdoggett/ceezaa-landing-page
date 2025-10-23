import Image from "next/image";
import { Sparkles } from "lucide-react";

export function LiveMoment() {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="hidden lg:block relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden border border-secondary-foreground/10 shadow-xl">
              <Image
                src="/LiveMoment.jpg"
                alt="Live the Moment - People on beach"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Live the <span className="text-primary">Moment</span>
              </h2>
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                Hostel life is about the people you meet and the memories you create.
              </p>
            </div>

            {/* Featured message */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg group-hover:blur-xl transition-all" />
              <div className="relative bg-linear-to-br from-primary/20 to-primary/5 rounded-xl p-6 border border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg font-semibold leading-relaxed">
                    Ceezaa helps you experience more of it.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              <div className="group">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="mt-1 w-6 h-6 rounded-md bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-base leading-relaxed">
                    You will never miss the events, meals, or experiences that make
                    a place special.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="mt-1 w-6 h-6 rounded-md bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-base leading-relaxed">
                    You will always feel part of what is going on.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="pt-6 border-t border-primary/20">
              <p className="text-base font-medium text-secondary-foreground/80 italic">
                Every moment becomes part of your story
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
