export function OurMission() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header - Title on left */}
          <div className="mb-12">
            <div className="space-y-5">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Our <span className="text-secondary">Mission</span>
              </h2>
              <div className="w-20 h-1 bg-secondary"></div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">
                To make every hostel stay feel personal.
              </p>
            </div>
          </div>

          {/* Main content - Flex layout with order control */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Philosophy - Order 1 on mobile, row 1 col 3 on desktop */}
            <div className="order-1 lg:row-start-1 lg:col-start-3 lg:col-span-1 space-y-6">
              <div className="space-y-5">
                <h3 className="text-xl font-extrabold text-secondary uppercase tracking-wide">The Philosophy</h3>
                <p className="text-lg lg:text-xl font-extrabold leading-relaxed text-white">
                  We believe travel should never feel one-size-fits-all.
                </p>
                <p className="text-base lg:text-lg leading-relaxed font-semibold text-white">
                  Every traveler has their own rhythm, their own interests, and their own way of connecting.
                </p>
              </div>
            </div>

            {/* Technology box - Order 2 on mobile, row 1 cols 1-2 on desktop */}
            <div className="order-2 lg:row-start-1 lg:col-start-1 lg:col-span-2">
              <div className="bg-secondary/20 backdrop-blur-sm border-l-4 border-secondary rounded-r-xl p-7 shadow-xl">
                <p className="text-xl lg:text-2xl font-semibold leading-relaxed text-white mb-4">
                  We use technology to make things feel more human, not less.
                </p>
                <p className="text-base lg:text-lg leading-relaxed font-semibold text-white">
                  By understanding each traveler&apos;s preferences and habits, Ceezaa turns ordinary stays into experiences that feel effortless and meaningful.
                </p>
              </div>
            </div>

            {/* Two key outcomes - Order 3 on mobile, row 2 cols 1-2 on desktop */}
            <div className="order-3 lg:row-start-2 lg:col-start-1 lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="w-16 h-1 bg-secondary"></div>
                  <p className="text-xl font-bold text-secondary">
                    When hostels know their guests better
                  </p>
                  <p className="text-lg text-white font-semibold">
                    They create moments that last.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-16 h-1 bg-secondary"></div>
                  <p className="text-xl font-bold text-secondary">
                    When travelers feel understood
                  </p>
                  <p className="text-lg text-white font-semibold">
                    They remember the place forever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
