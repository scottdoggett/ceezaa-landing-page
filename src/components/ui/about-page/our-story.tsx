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
                Hostels are some of the most exciting places in the world, but they are often run in ways that do not match how people travel today.
              </p>
            </div>
          </div>

          {/* Right - Story narrative with chapter style */}
          <div className="space-y-12 md:space-y-16">

            {/* Chapter 1: The Problem */}
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl md:text-7xl font-bold text-primary/20 leading-none">1</span>
                <div className="flex-1 space-y-4 pt-2">
                  <p className="text-base md:text-lg leading-relaxed">
                    Most guests still arrive with <span className="font-semibold">no idea what is happening</span> around them.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-secondary-foreground/80">
                    Events are written on whiteboards. Menus sit in folders. Group chats get buried in notifications.
                  </p>
                </div>
              </div>
              <div className="pl-16 md:pl-20">
                <p className="text-lg md:text-xl leading-relaxed font-medium italic border-l-4 border-destructive/40 pl-4 py-2">
                  The people who came to connect end up missing the very moments that make hostels special.
                </p>
              </div>
            </div>

            {/* Chapter 2: The Turning Point */}
            <div className="space-y-6 relative">
              <div className="absolute left-0 top-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
              <div className="flex items-baseline gap-4 pt-8">
                <span className="text-6xl md:text-7xl font-bold text-primary leading-none">2</span>
                <div className="flex-1 space-y-4 pt-2">
                  <p className="text-xl md:text-2xl font-bold leading-tight">
                    We saw an opportunity to change that.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Ceezaa brings everything inside the hostel together and makes it personal to each guest.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-secondary-foreground/80">
                    It helps travelers see what is happening, find what fits them, and feel part of their surroundings from the moment they check in.
                  </p>
                </div>
              </div>
            </div>

            {/* Chapter 3: The Goal */}
            <div className="space-y-6 relative">
              <div className="absolute left-0 top-0 w-full h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
              <div className="flex items-baseline gap-4 pt-8">
                <span className="text-6xl md:text-7xl font-bold text-accent/50 leading-none">3</span>
                <div className="flex-1 space-y-4 pt-2">
                  <p className="text-xl md:text-2xl font-bold leading-tight">
                    Our goal is simple.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed">
                    To make travel more personal and to help every hostel run in a way that feels{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-semibold">human</span>
                      <span className="absolute bottom-0 left-0 w-full h-2 bg-accent/20 -rotate-1" />
                    </span>
                    ,{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-semibold">organized</span>
                      <span className="absolute bottom-0 left-0 w-full h-2 bg-accent/20 rotate-1" />
                    </span>
                    , and{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 font-semibold">alive</span>
                      <span className="absolute bottom-0 left-0 w-full h-2 bg-accent/20 -rotate-1" />
                    </span>
                    .
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
