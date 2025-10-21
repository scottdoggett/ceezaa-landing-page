import { Button } from "@/components/ui/button";

export function Community() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-t from-secondary to-secondary/95 text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/20 px-4 py-2 rounded-full">
                Join Our Community
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              The People Who Bring{" "}
              <span className="text-primary">Ceezaa to Life</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Hostels Card */}
            <div className="bg-card/10 backdrop-blur border-2 border-secondary-foreground/20 rounded-2xl p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all group">
              <div className="space-y-6">
                <div className="bg-primary/20 rounded-2xl p-4 w-fit group-hover:scale-110 transition-transform">
                  <div className="text-5xl">🏨</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Hostels</h3>
                <p className="text-xl font-medium text-secondary-foreground/90">
                  Help guests feel part of your story.
                </p>
                <p className="text-secondary-foreground/70">
                  Ceezaa makes it easy to share events, meals, and experiences
                  in one place every traveler can see.
                </p>
                <ul className="space-y-2 text-secondary-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Increase guest engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Streamline communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Build lasting connections</span>
                  </li>
                </ul>
                <Button size="lg" className="w-full sm:w-auto mt-4">
                  Bring Ceezaa to your hostel →
                </Button>
              </div>
            </div>

            {/* Experience Partners Card */}
            <div className="bg-card/10 backdrop-blur border-2 border-secondary-foreground/20 rounded-2xl p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all group">
              <div className="space-y-6">
                <div className="bg-primary/20 rounded-2xl p-4 w-fit group-hover:scale-110 transition-transform">
                  <div className="text-5xl">🎯</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Experience Partners
                </h3>
                <p className="text-xl font-medium text-secondary-foreground/90">
                  Share what makes your world special.
                </p>
                <p className="text-secondary-foreground/70">
                  From surf lessons to food tours, Ceezaa helps travelers
                  discover the best of what you create.
                </p>
                <ul className="space-y-2 text-secondary-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Reach engaged travelers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Showcase unique experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Grow your local impact</span>
                  </li>
                </ul>
                <Button size="lg" className="w-full sm:w-auto mt-4">
                  Join as an Experience Partner →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
