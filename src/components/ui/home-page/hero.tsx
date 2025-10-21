import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-linear-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                Welcome to Ceezaa
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              The world meets in hostels.{" "}
              <span className="text-primary">We make those moments matter.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Ceezaa connects travelers with the people, experiences, and stories
              that make every hostel stay unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base md:text-lg px-8 py-6">
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

          {/* Right side - Hero image */}
          <div className="relative lg:h-[600px] h-[400px] rounded-2xl overflow-hidden bg-muted border border-border shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="text-6xl">🏨</div>
                <p className="text-muted-foreground font-medium">Hero Image</p>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Replace with travelers connecting in a vibrant hostel common area
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
