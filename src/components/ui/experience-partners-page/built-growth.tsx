import { DollarSign, CheckCircle, Rocket, Eye, Handshake, Globe } from "lucide-react";

export function BuiltGrowth() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Built for <span className="text-primary">Growth</span>
            </h2>
            <p className="text-xl font-semibold">
              Ceezaa is easy to join and simple to use.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 md:space-y-10">
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-row lg:flex-col gap-4 lg:gap-0">
                  <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary/10 flex items-center justify-center lg:mb-5">
                    <DollarSign className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">
                      No Setup Costs
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground font-semibold">
                      There are no setup costs or complicated requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-2 border-accent/20 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-row lg:flex-col gap-4 lg:gap-0">
                  <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-accent/10 flex items-center justify-center lg:mb-5">
                    <CheckCircle className="w-6 h-6 lg:w-7 lg:h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">
                      Quick Verification
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground font-semibold">
                      Once verified, you can create your profile, list your
                      experiences, and start reaching travelers instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/20 backdrop-blur border-2 border-primary/30 rounded-2xl p-6 md:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row items-start gap-5 md:gap-6">
                <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Rocket className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-secondary-foreground">
                    Grow Through Connection
                  </h3>
                  <p className="text-base md:text-lg font-semibold text-secondary-foreground/90 leading-relaxed">
                    It is built to help your business grow through visibility,
                    connection, and community.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-2xl mx-auto">
              <div className="bg-card/5 backdrop-blur border-2 border-secondary-foreground/10 rounded-xl p-4 md:p-6 text-center hover:bg-card/10 transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <p className="font-semibold text-sm md:text-base">Visibility</p>
              </div>
              <div className="bg-card/5 backdrop-blur border-2 border-secondary-foreground/10 rounded-xl p-4 md:p-6 text-center hover:bg-card/10 transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Handshake className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <p className="font-semibold text-sm md:text-base">Connection</p>
              </div>
              <div className="bg-card/5 backdrop-blur border-2 border-secondary-foreground/10 rounded-xl p-4 md:p-6 text-center hover:bg-card/10 transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <p className="font-semibold text-sm md:text-base">Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
