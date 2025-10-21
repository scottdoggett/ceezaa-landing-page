export function OurStory() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left - Title and intro */}
          <div className="space-y-8 lg:sticky lg:top-[55vh] lg:-translate-y-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-xl font-medium">
              Ceezaa began with a simple idea.
            </p>
            <p className="text-lg text-secondary-foreground/80">
              Hostels are some of the most exciting places in the world, but they are often run in ways that do not match how people travel today.
            </p>
          </div>

          {/* Right - Story cards */}
          <div className="space-y-6">
            <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6 space-y-3">
              <div className="text-2xl">📝</div>
              <p className="text-lg">
                Most guests still arrive with no idea what is happening around them.
              </p>
            </div>

            <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6 space-y-3">
              <div className="text-2xl">📋</div>
              <p className="text-lg">
                Events are written on whiteboards. Menus sit in folders. Group chats get buried in notifications.
              </p>
            </div>

            <div className="bg-card/5 backdrop-blur border border-secondary-foreground/10 rounded-xl p-6 space-y-3">
              <div className="text-2xl">💔</div>
              <p className="text-lg">
                The people who came to connect end up missing the very moments that make hostels special.
              </p>
            </div>

            <div className="bg-primary/20 backdrop-blur border border-primary/30 rounded-xl p-8 mt-8">
              <p className="text-xl font-semibold mb-4">
                We saw an opportunity to change that.
              </p>
              <p className="text-lg mb-4">
                Ceezaa brings everything inside the hostel together and makes it personal to each guest.
              </p>
              <p className="text-lg">
                It helps travelers see what is happening, find what fits them, and feel part of their surroundings from the moment they check in.
              </p>
            </div>

            <div className="bg-accent/10 backdrop-blur border border-accent/30 rounded-xl p-6">
              <p className="text-xl font-bold text-foreground mb-2">
                Our goal is simple.
              </p>
              <p className="text-lg">
                To make travel more personal and to help every hostel run in a way that feels human, organized, and alive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
