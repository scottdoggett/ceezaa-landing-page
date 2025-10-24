import { CheckCircle2, MapPin, Calendar, Users } from "lucide-react";

export function TravelPersonal() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-24 bg-linear-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - Hero Content */}
            <div className="space-y-8">
              <div className="inline-block animate-fade-in-up">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                  For Travelers
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight animate-fade-in-up">
                Travel That Feels{" "}
                <span className="text-primary">Personal</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold leading-relaxed animate-fade-in-up animate-delay-100">
                Ceezaa helps you get more out of every stay.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up animate-delay-200">
                It connects you to the people, moments, and experiences that make
                travel feel alive.
              </p>
            </div>

            {/* Right - Benefits Section */}
            <div className="space-y-8">
              {/* Main value proposition */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 group animate-fade-in-left">
                  <div className="mt-1 p-2 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">No more guessing</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      See what&apos;s happening without digging through group chats or asking around.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group animate-fade-in-left animate-delay-100">
                  <div className="mt-1 p-2 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Everything in one place</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Events, dining, and local experiences—all tailored to how you like to explore.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group animate-fade-in-left animate-delay-200">
                  <div className="mt-1 p-2 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Connect naturally</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Find your people and build meaningful connections at every stay.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group animate-fade-in-left animate-delay-300">
                  <div className="mt-1 p-2 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Make it your own</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Whether staying a night or a month, each experience is uniquely yours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom highlight */}
              <div className="pt-6 border-t border-primary/20 animate-fade-in-up animate-delay-200">
                <p className="text-lg font-medium text-foreground/90">
                  Every stay feels easier, more connected, and more meaningful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
