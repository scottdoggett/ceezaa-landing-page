import { Target, Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function SeeHappening() {
  return (
    <section className="w-full py-12 md:pt-20 lg:py-8 bg-primary text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[20px_20px] z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                See What Is <span className="text-secondary">Happening</span>
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-white/90">
                From dinners to city tours, everything happening in your hostel and
                nearby is right in front of you.
              </p>

              {/* Key benefits */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 rounded-lg shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">Match Your Energy</h3>
                    <p className="text-base text-secondary leading-relaxed">
                      Join the activities that match your energy. Discover local spots
                      chosen just for you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/10 rounded-lg shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">Your Rhythm, Your Way</h3>
                    <p className="text-base text-secondary leading-relaxed">
                      You can plan as much or as little as you want. Ceezaa helps you
                      find your rhythm wherever you are.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Mobile App Carousel */}
            <div className="relative flex justify-center items-center">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative aspect-[9/19.5] w-full">
                      <Image
                        src="https://bl974d7s47.ufs.sh/f/eiqM2oDvPqg1b2hYKeNks2weAdSjmptZznqFh1UJ6YlTgCQD"
                        alt="Ceezaa App Home Screen"
                        fill
                        className="object-contain rounded-3xl"
                        priority
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-[9/19.5] w-full">
                      <Image
                        src="https://bl974d7s47.ufs.sh/f/eiqM2oDvPqg1ajx4ki2iEG95mh1fIv7qCpdOJs36wxYAWljT"
                        alt="Ceezaa App Explore Screen"
                        fill
                        className="object-contain rounded-3xl"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-[9/19.5] w-full">
                      <Image
                        src="https://bl974d7s47.ufs.sh/f/eiqM2oDvPqg1o1J7jBy6UYoFX3OQpTzglJD98SkWemtV5dRn"
                        alt="Ceezaa App Bookings Screen"
                        fill
                        className="object-contain rounded-3xl"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-[9/19.5] w-full">
                      <Image
                        src="https://bl974d7s47.ufs.sh/f/eiqM2oDvPqg1yfVNJoagrCDOJLqYIcwMaBAjFsm8StvpTd1e"
                        alt="Ceezaa App Profile Screen"
                        fill
                        className="object-contain rounded-3xl"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex bg-white text-primary hover:bg-white/90 border-none shadow-lg" />
                <CarouselNext className="hidden md:flex bg-white text-primary hover:bg-white/90 border-none shadow-lg" />
              </Carousel>

              {/* Swipe indicator for mobile */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 md:hidden">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-primary rounded-full px-4 py-2 text-sm font-semibold shadow-lg">
                  <span>Swipe for more</span>
                  <ChevronRight className="w-4 h-4 animate-pulse" />
                </div>
              </div>

              {/* Decorative glow effect */}
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
