export function Explore() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            Find your next moment right where you are.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
            <p className="text-center">Every city has something waiting to be found.</p>
            <p className="text-center">
              A rooftop dinner. A morning surf. A hidden café only the locals
              know.
            </p>
            <p className="text-center">
              Ceezaa helps travelers discover what is happening nearby, all
              curated to their interests and energy.
            </p>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>
                  See local tours, events, dining spots, and experiences picked
                  for you.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>
                  Join activities hosted by your hostel or trusted partners.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span>
                  Discover new places and people without ever feeling like a
                  tourist.
                </span>
              </li>
            </ul>
            <p className="text-center font-medium text-foreground pt-4">
              The world outside your hostel is alive. Ceezaa makes it easier to
              step into it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
