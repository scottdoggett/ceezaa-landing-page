export function ContactHero() {
  return (
    <section className="w-full py-12 md:py-16 bg-linear-to-br from-primary/10 via-background to-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            We would love to hear from <span className="text-primary">you</span>
          </h1>
          <p className="text-base md:text-lg font-semibold text-muted-foreground">
            Ceezaa was built to bring people together, and that starts with us.
          </p>
          <p className="text-base font-semibold text-muted-foreground">
            Whether you are a traveler, a hostel, or a partner creating
            experiences, we would love to connect.
          </p>
          <div className="bg-card border border-border rounded-xl p-4 mt-6">
            <p className="text-sm font-semibold">
              You can reach our team directly through the details below or use
              the form at the end of this page.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              We read every message and do our best to respond within a few days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
