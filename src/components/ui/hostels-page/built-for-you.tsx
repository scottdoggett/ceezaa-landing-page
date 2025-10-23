import { DollarSign, Rocket, Sparkles } from "lucide-react";

export function BuiltForYou() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Built for <span className="text-primary">You</span>
            </h2>
            <p className="text-xl font-semibold max-w-2xl mx-auto">
              Ceezaa is simple to set up and easy to use.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No Setup Costs</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                There are no setup costs or complicated integrations.
              </p>
            </div>

            <div className="group bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quick Start</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                You can add your property, upload your events and experiences,
                and begin connecting with guests right away.
              </p>
            </div>

            <div className="group bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instant Impact</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ceezaa is designed to make your property feel more alive and
                your guests more connected from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
