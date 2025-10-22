"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Eye, Zap, MessageCircle, Target } from "lucide-react";

export function SimplifyOperations() {
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
    <section className="w-full py-20 md:py-32 bg-linear-to-br from-accent/10 via-background to-primary/10 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/3" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Dashboard Image */}
            <div className="relative overflow-visible order-2 lg:order-1">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl transition-opacity duration-300 lg:hover:opacity-50 pointer-events-none" />
              <div
                className="relative bg-white rounded-2xl shadow-2xl border-4 border-primary/20 overflow-hidden lg:cursor-pointer group transition-transform duration-300 lg:hover:scale-105"
                onClick={handleClick}
              >
                <div className="absolute inset-0 bg-black/0 lg:group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center z-10 pointer-events-none">
                  <div className="hidden lg:block opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full px-4 py-2">
                    <p className="text-sm font-semibold text-gray-900">
                      Click to expand
                    </p>
                  </div>
                </div>
                <Image
                  src="/dashboard-analytics.png"
                  alt="Analytics Dashboard Preview"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="hidden lg:block text-center mt-4">
                <p className="text-sm text-muted-foreground/70 font-medium">
                  Click to see full dashboard
                </p>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Header */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Simplify How You <span className="text-primary">Operate</span>
                </h2>
                <p className="text-xl font-semibold">
                  Ceezaa helps you run your hostel more smoothly.
                </p>
              </div>

              {/* Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                    <Eye className="w-6 h-6 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Self-Service Guests</p>
                      <p className="text-sm text-muted-foreground">
                        Guests see what is happening without asking.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Quick Updates</p>
                      <p className="text-sm text-muted-foreground">
                        Staff can manage updates in seconds.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-6 h-6 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Clear Communication</p>
                      <p className="text-sm text-muted-foreground">
                        Communication becomes clear, and the experience feels
                        effortless.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Focus on People</p>
                      <p className="text-sm text-muted-foreground">
                        You can focus less on logistics and more on the people
                        in front of you.
                      </p>
                    </div>
                  </div>
                </div>
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
                src="/dashboard-analytics.png"
                alt="Analytics Dashboard Preview - Expanded"
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
