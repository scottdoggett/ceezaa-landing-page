import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] md:min-h-[95vh] lg:min-h-[800px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[120%] lg:h-full object-cover object-[60%_center] lg:object-center -translate-y-[20%] lg:translate-y-0"
        >
          <source src="https://bl974d7s47.ufs.sh/f/eiqM2oDvPqg1tfeFTxhR5vcX9sTwIJ30CxSqMnzF7uoUyYNr" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlay for text readability - changes direction at lg */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,white_0%,hsl(0_0%_100%/0.95)_45%,transparent_60%)] lg:bg-[linear-gradient(to_right,white_0%,hsl(0_0%_100%/0.9)_30%,transparent_65%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full min-h-[85vh] sm:min-h-[90vh] md:min-h-[95vh] lg:min-h-[800px] px-6 py-8 lg:py-12 flex flex-col">
        {/* Welcome badge - always in same position */}
        <div className="absolute top-8 lg:top-12 left-6">
          <span className="hidden lg:inline text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            Welcome to Ceezaa
          </span>
        </div>

        <div className="flex w-full items-end lg:items-center flex-1">
          {/* Text content - full width at bottom on small screens, left aligned on large screens */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 w-full pb-6 sm:pb-8 lg:max-w-2xl lg:pb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-foreground">
              The world meets in hostels.{" "}
              <span className="text-primary">
                We make those moments matter.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl font-semibold">
              Ceezaa connects hostels and travelers through understanding, 
              creating one identity that makes every stay feel personal.
            </p>
            <div className="flex flex-row gap-2 sm:gap-4">
              <Button asChild size="lg" className="lg:bg-primary lg:hover:bg-secondary bg-secondary hover:bg-primary text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 shadow-xl">
                <Link href="/about">
                  Discover Ceezaa
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
