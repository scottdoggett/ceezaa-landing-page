export function FaqHero() {
  return (
    <section className="w-full py-12 md:py-16 bg-linear-to-b from-secondary/15 to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Find quick answers about how{" "}
            <span className="text-primary">Ceezaa works</span>
          </h1>
          <p className="text-base font-semibold text-muted-foreground">
            Ceezaa was created to make travel more personal and connected.
          </p>
          <p className="text-sm font-semibold text-muted-foreground">
            Below you will find answers to common questions from travelers,
            hostels, and experience partners.
          </p>
          <div className="bg-card border border-border rounded-lg p-3 mt-6 inline-block">
            <p className="text-sm font-semibold">
              If you do not see what you are looking for, reach out through our{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contact
              </a>{" "}
              page. We are always happy to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
