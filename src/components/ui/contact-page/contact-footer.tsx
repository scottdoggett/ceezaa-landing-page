import { Rocket } from "lucide-react";

export function ContactFooter() {
  return (
    <section className="w-full py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Quick Questions */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Quick Questions?</h3>
                <p className="text-sm font-semibold text-muted-foreground mb-3">
                  If you are looking for fast answers about how Ceezaa works,
                  verification, or payments, visit our{" "}
                  <a
                    href="/faqs"
                    className="text-primary hover:underline font-bold"
                  >
                    FAQs
                  </a>{" "}
                  page for more details.
                </p>
                <p className="text-sm text-muted-foreground">
                  If you still have questions, feel free to send us a message and
                  we will get back to you soon.
                </p>
              </div>
            </div>
          </div>

          {/* Join the Movement */}
          <div className="bg-linear-to-b from-primary/30 to-accent/30 text-white border-2 border-primary/30 rounded-xl p-8 text-center">
            <Rocket className="w-12 h-12 mb-3 mx-auto" />
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Join the Movement
            </h3>
            <p className="text-sm md:text-base font-semibold max-w-2xl mx-auto">
              Every message helps us build something better. Reach out, share your
              story, and be part of the community redefining what travel feels
              like.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
