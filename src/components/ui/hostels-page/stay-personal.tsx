"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function StayPersonal() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isExpanded]);

  const handleClick = () => {
    // Only allow expansion on lg+ screens
    if (window.innerWidth >= 1024) {
      setIsExpanded(true);
    }
  };

  return (
    <section className="w-full py-20 md:py-32 bg-secondary text-secondary-foreground overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6 md:space-y-8">
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
            <div className="relative overflow-visible">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl transition-opacity duration-300 lg:hover:opacity-50 pointer-events-none" />
              <div
                className="relative bg-white rounded-2xl shadow-2xl border-4 border-primary/20 overflow-hidden lg:cursor-pointer group transition-transform duration-300 lg:hover:scale-105"
                onClick={handleClick}
              >
                <div className="absolute inset-0 bg-black/0 lg:group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center z-10 pointer-events-none">
                  <div className="hidden lg:block opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full px-4 py-2">
                    <p className="text-sm font-semibold text-gray-900">Click to expand</p>
                  </div>
                </div>
                <Image
                  src="/dashboard-guests.png"
                  alt="Staff Dashboard Preview"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="hidden lg:block text-center mt-4">
                <p className="text-sm text-secondary-foreground/70 font-medium">
                  Click to see full dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Modal Overlay */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-pointer"
          onClick={() => setIsExpanded(false)}
          style={{
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <div
            className="w-full max-w-7xl max-h-[90vh] overflow-auto"
            style={{
              animation: "zoomIn 0.4s ease-out",
            }}
          >
            <div className="bg-white rounded-lg md:rounded-2xl shadow-2xl border-2 md:border-4 border-primary/30 overflow-hidden">
              <Image
                src="/dashboard-guests.png"
                alt="Staff Dashboard Preview - Expanded"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center mt-4 text-white font-medium text-sm md:text-base">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes zoomIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}