import { HostelDashboard } from "@/components/ui/hostel-dashboard";

export function StayPersonal() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Content */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Make Every Stay Feel{" "}
                <span className="text-primary">Personal</span>
              </h2>

              <p className="text-xl font-semibold">Every traveler is different.</p>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Ceezaa helps you understand what each guest cares about and
                  how they like to experience your space.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <p className="text-base leading-relaxed">
                      From dining and tours to small details like check-in
                      preferences or dietary needs, Ceezaa makes it easy to
                      personalize each stay.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <p className="text-base leading-relaxed">
                      Post updates, share events, and highlight offers
                      directly to your guests in real-time.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <p className="text-base leading-relaxed">
                      Everything is simple, organized, and made to fit the rhythm of
                      your hostel—without adding extra work for your staff.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-secondary-foreground/10">
                  <p className="font-semibold text-lg text-primary">
                    No extra work. Just better experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-2xl shadow-2xl border-4 border-primary/20 overflow-hidden">
                <div className="w-full h-[600px] overflow-hidden">
                  <div className="origin-top-left" style={{ transform: "scale(0.6)", width: "166.67%", height: "166.67%" }}>
                    <HostelDashboard />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white to-transparent pointer-events-none" />
              </div>
              <div className="text-center mt-4">
                <p className="text-sm text-secondary-foreground/70 font-medium">
                  Live Dashboard Preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
