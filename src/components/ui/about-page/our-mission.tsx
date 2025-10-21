export function OurMission() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-t from-primary/5 to-background relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-2xl md:text-3xl font-bold">
              To make every hostel stay feel personal.
            </p>
          </div>

          {/* Mission statements */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <p className="text-lg md:text-xl leading-relaxed">
                We believe travel should never feel one-size-fits-all. Every traveler has their own rhythm, their own interests, and their own way of connecting.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <p className="text-lg md:text-xl leading-relaxed">
                Ceezaa helps hostels recognize those differences and shape every stay around them.
              </p>
            </div>

            <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8">
              <p className="text-lg md:text-xl font-semibold leading-relaxed">
                We use technology to make things feel more human, not less.
              </p>
              <p className="text-lg mt-4">
                By understanding each traveler&apos;s preferences and habits, Ceezaa turns ordinary stays into experiences that feel effortless and meaningful.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6">
                <p className="text-lg font-semibold mb-2">When hostels know their guests better</p>
                <p className="text-muted-foreground">They create moments that last.</p>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-xl p-6">
                <p className="text-lg font-semibold mb-2">When travelers feel understood</p>
                <p className="text-muted-foreground">They remember the place forever.</p>
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-medium text-primary">
              That is what we are building every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
