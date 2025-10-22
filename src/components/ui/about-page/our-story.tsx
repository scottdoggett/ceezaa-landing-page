export function OurStory() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left - Title and intro (Sticky) */}
          <div className="space-y-6 md:space-y-8 lg:sticky lg:top-[calc(50vh-100px)]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-medium leading-snug">
                Ceezaa began with a simple idea.
              </p>
              <p className="text-base md:text-lg text-secondary-foreground/70 leading-relaxed max-w-md">
                Hostels are some of the most exciting places in the world, but
                they are often run in ways that do not match how people travel
                today.
              </p>
            </div>
          </div>

          {/* Right - Story narrative with chapter style */}
          <div className="space-y-12 md:space-y-16">
            {/* Chapter 1: The Problem */}
            <div className="space-y-6">
              <div className="flex items-baseline gap-4 md:gap-6">
                <span className="text-7xl md:text-8xl font-bold text-secondary-foreground/40 leading-none shrink-0">1</span>
                <div className="flex-1 space-y-4 pt-3">
                  <p className="text-xl md:text-2xl font-bold leading-tight text-secondary-foreground">
                    Most guests still arrive with no idea what is happening around them.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-secondary-foreground/80">
                    Events are written on whiteboards. Menus sit in folders. Group chats get buried in notifications.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed font-medium text-secondary-foreground italic">
                    The people who came to connect end up missing the very moments that make hostels special.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-linear-to-r from-transparent via-secondary-foreground/60 to-transparent" />

            {/* Chapter 2: The Turning Point */}
            <div className="space-y-6">
              <div className="flex items-baseline gap-4 md:gap-6">
                <span className="text-7xl md:text-8xl font-bold text-secondary-foreground/50 leading-none shrink-0">2</span>
                <div className="flex-1 space-y-4 pt-3">
                  <p className="text-xl md:text-2xl font-bold leading-tight text-secondary-foreground">
                    We saw an opportunity to change that.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-secondary-foreground">
                    Ceezaa brings everything inside the hostel <span className="font-semibold text-primary">together</span> and makes it <span className="font-semibold text-primary">personal</span> to each guest.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-secondary-foreground/80">
                    It helps travelers see what is happening, find what fits them, and feel part of their surroundings from the moment they check in.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-linear-to-r from-transparent via-secondary-foreground/20 to-transparent" />

            {/* Chapter 3: The Goal */}
            <div className="space-y-6">
              <div className="flex items-baseline gap-4 md:gap-6">
                <span className="text-7xl md:text-8xl font-bold text-secondary-foreground/50 leading-none shrink-0">3</span>
                <div className="flex-1 space-y-4 pt-3">
                  <p className="text-xl md:text-2xl font-bold leading-tight text-secondary-foreground">
                    Our goal is simple.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-secondary-foreground">
                    To make travel more <span className="font-semibold text-primary">personal</span> and to help every hostel run in a way that feels{" "}
                    <span className="font-semibold text-primary">human</span>,{" "}
                    <span className="font-semibold text-primary">organized</span>, and{" "}
                    <span className="font-semibold text-primary">alive</span>.
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
