import { Megaphone, Ticket, MessageCircle } from "lucide-react";

export function SimplifyOperations() {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Text Content */}
            <div className="flex flex-col justify-between text-right lg:min-h-full space-y-6 lg:space-y-0">
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  Simplify How You <span className="text-primary">Operate</span>
                </h2>

                <div className="space-y-4 md:space-y-5">
                  <p className="text-lg md:text-xl font-semibold leading-relaxed">
                    You can post your experiences, manage bookings, and share
                    updates in one simple place.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground font-semibold leading-relaxed">
                    Ceezaa keeps everything clear so you can spend less time on
                    logistics and more time creating.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Cards */}
            <div className="space-y-4 md:space-y-5">
              <div className="bg-card border-2 border-primary/20 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Megaphone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-0.5 text-sm md:text-base">Announcements</h3>
                    <p className="text-xs md:text-sm text-muted-foreground font-semibold">
                      Share updates with your community
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-2 border-primary/20 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Ticket className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-0.5 text-sm md:text-base">Event Details</h3>
                    <p className="text-xs md:text-sm text-muted-foreground font-semibold">
                      Manage all your experience information
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-2 border-primary/20 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-0.5 text-sm md:text-base">Guest Communication</h3>
                    <p className="text-xs md:text-sm text-muted-foreground font-semibold">
                      Keep everyone informed and connected
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
