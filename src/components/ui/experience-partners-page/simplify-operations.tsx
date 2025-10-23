import { ClipboardList, Megaphone, Ticket, MessageCircle } from "lucide-react";

export function SimplifyOperations() {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Simplify How You <span className="text-primary">Operate</span>
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8 md:space-y-10">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-start gap-5 md:gap-6">
                <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ClipboardList className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="space-y-3 md:space-y-4">
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              <div className="bg-card border-2 border-primary/20 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Megaphone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2 text-base md:text-lg">Announcements</h3>
                <p className="text-sm md:text-base text-muted-foreground font-semibold">
                  Share updates with your community
                </p>
              </div>

              <div className="bg-card border-2 border-primary/20 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Ticket className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2 text-base md:text-lg">Event Details</h3>
                <p className="text-sm md:text-base text-muted-foreground font-semibold">
                  Manage all your experience information
                </p>
              </div>

              <div className="bg-card border-2 border-primary/20 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2 text-base md:text-lg">Guest Communication</h3>
                <p className="text-sm md:text-base text-muted-foreground font-semibold">
                  Keep everyone informed and connected
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 max-w-3xl mx-auto">
              <div className="flex-1 bg-primary/10 border-l-4 border-primary rounded-lg p-5 md:p-6">
                <p className="text-base md:text-lg font-semibold">
                  Your team saves time, and your guests stay informed.
                </p>
              </div>

              <div className="flex-1 bg-accent/10 border-l-4 border-accent rounded-lg p-5 md:p-6">
                <p className="text-base md:text-lg font-semibold">
                  Everything stays organized in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
