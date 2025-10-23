import { Clock, Sparkles } from "lucide-react";

export function SaveTime() {
  return (
    <section className="w-full py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header - Right aligned */}
          <div className="max-w-3xl ml-auto mb-16 space-y-4 text-right">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Save Time for What Matters{" "}
              <span className="text-secondary">Most</span>
            </h2>
            <p className="text-xl font-semibold text-white">
              Your time should go toward the moments that make your hostel
              unique.
            </p>
          </div>

          {/* Content with icons on the right */}
          <div className="space-y-12">
            <div className="flex items-start gap-6 w-full max-w-4xl ml-auto">
              <div className="space-y-4 pt-1 text-right flex-1">
                <p className="text-lg md:text-xl font-semibold text-white">
                  Ceezaa cuts down the small, repetitive tasks that take
                  energy away from your guests.
                </p>
                <p className="text-base md:text-lg text-white/80">
                  Schedules, updates, announcements, and event details all
                  live in one place.
                </p>
              </div>
              <Clock className="w-12 h-12 shrink-0 my-auto text-white hidden sm:block" />
            </div>

            <div className="flex items-start gap-6 w-full max-w-4xl ml-auto">
              <div className="space-y-4 pt-1 text-right flex-1">
                <p className="text-lg md:text-xl font-semibold text-white">
                  Everything runs more smoothly, giving you and your team time to
                  focus on hospitality, connection, and growth.
                </p>
              </div>
              <Sparkles className="w-12 h-12 shrink-0 my-auto text-white hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
