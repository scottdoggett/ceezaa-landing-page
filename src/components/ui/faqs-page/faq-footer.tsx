export function FaqFooter() {
  return (
    <section className="w-full py-12 md:py-16 bg-linear-to-b from-muted/30 to-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Still have <span className="text-primary">questions?</span>
            </h2>
            <p className="text-sm md:text-base font-semibold text-muted-foreground mb-4">
              If you do not see your answer here, reach out through our{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contact
              </a>{" "}
              page or email{" "}
              <a
                href="mailto:hello@ceezaa.com"
                className="text-primary hover:underline"
              >
                hello@ceezaa.com
              </a>
              .
            </p>
            <p className="text-sm font-semibold">We are always happy to help.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
