export function OurMission() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-linear-to-br from-primary to-primary/95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Our <span className="text-secondary">Mission</span>
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              To make every hostel stay feel personal.
            </p>
          </div>

          {/* Mission statements */}
          <div className="space-y-5">
            <div className="bg-accent-foreground/12 backdrop-blur-sm border border-white/15 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:bg-accent-foreground/30 transition-all duration-300">
              <p className="text-base lg:text-lg leading-relaxed text-white">
                We believe travel should never feel one-size-fits-all. Every traveler has their own rhythm, their own interests, and their own way of connecting.
              </p>
            </div>

            <div className="bg-accent-foreground/12 backdrop-blur-sm border border-white/15 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:bg-accent-foreground/30 transition-all duration-300">
              <p className="text-base lg:text-lg leading-relaxed text-white">
                Ceezaa helps hostels recognize those differences and shape every stay around them.
              </p>
            </div>

            <div className="bg-secondary/20 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-xl">
              <p className="text-base lg:text-lg font-semibold leading-relaxed text-white">
                We use technology to make things feel more human, not less.
              </p>
              <p className="text-base lg:text-lg mt-3 text-white/90 leading-relaxed">
                By understanding each traveler&apos;s preferences and habits, Ceezaa turns ordinary stays into experiences that feel effortless and meaningful.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-2">
              <div className="bg-accent-foreground/12 backdrop-blur-sm border-l-4 border-secondary rounded-xl p-5 shadow-lg">
                <p className="text-base font-bold text-white mb-2">When hostels know their guests better</p>
                <p className="text-base text-white/80">They create moments that last.</p>
              </div>

              <div className="bg-accent-foreground/12 backdrop-blur-sm border-l-4 border-secondary rounded-xl p-5 shadow-lg">
                <p className="text-base font-bold text-white mb-2">When travelers feel understood</p>
                <p className="text-base text-white/80">They remember the place forever.</p>
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <div className="text-center pt-4">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-secondary italic">
              That is what we are building every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
