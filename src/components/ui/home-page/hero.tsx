import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            The world meets in hostels. We make those moments matter.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Ceezaa connects travelers with the people, experiences, and stories
            that make every hostel stay unforgettable.
          </p>
          <Button size="lg" className="text-base md:text-lg px-8 py-6">
            Discover Ceezaa
          </Button>
        </div>
      </div>
    </section>
  );
}
