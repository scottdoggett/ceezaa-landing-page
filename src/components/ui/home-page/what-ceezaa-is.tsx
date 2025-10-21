export function WhatCeezaaIs() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            One home for everything that makes a stay come alive.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
            <p className="text-center">
              Ceezaa brings the heart of hostel life into one simple place.
            </p>
            <p className="text-center">
              From <span className="font-semibold text-foreground">check-in to check-out,</span> everything
              about your stay lives inside Ceezaa. Events, dining, tours, and
              local recommendations are personalized so every guest feels part
              of the story unfolding around them.
            </p>
            <div className="grid md:grid-cols-2 gap-8 pt-4">
              <div className="text-center md:text-left">
                <p className="font-medium text-foreground">For travelers,</p>
                <p>it means more connection and discovery.</p>
              </div>
              <div className="text-center md:text-left">
                <p className="font-medium text-foreground">For hostels,</p>
                <p>it means guests who are engaged, informed, and at home.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
