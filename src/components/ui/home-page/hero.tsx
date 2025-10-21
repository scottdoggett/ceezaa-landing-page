import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/home-page/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,hsl(0_0%_100%/0.9)_30%,transparent_65%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[500px] md:min-h-[600px]">
          {/* Left side - Text content */}
          <div className="space-y-8 max-w-2xl">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                Welcome to Ceezaa
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-foreground">
              The world meets in hostels.{" "}
              <span className="text-primary">
                We make those moments matter.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-semibold">
              Ceezaa connects travelers with the people, experiences, and stories
              that make every hostel stay unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base md:text-lg px-8 py-6 shadow-xl">
                Discover Ceezaa
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 py-6 border-2"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right side - Empty to allow background image to show */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
