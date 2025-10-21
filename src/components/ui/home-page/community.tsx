import { Button } from "@/components/ui/button";

export function Community() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            The People Who Bring Ceezaa to Life
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Hostels Card */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">Hostels</h3>
                <p className="text-lg text-muted-foreground">
                  Help guests feel part of your story.
                </p>
                <p className="text-muted-foreground">
                  Ceezaa makes it easy to share events, meals, and experiences
                  in one place every traveler can see.
                </p>
                <Button className="w-full sm:w-auto">
                  Bring Ceezaa to your hostel
                </Button>
              </div>
            </div>

            {/* Experience Partners Card */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Experience Partners
                </h3>
                <p className="text-lg text-muted-foreground">
                  Share what makes your world special.
                </p>
                <p className="text-muted-foreground">
                  From surf lessons to food tours, Ceezaa helps travelers
                  discover the best of what you create.
                </p>
                <Button className="w-full sm:w-auto">
                  Join as an Experience Partner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
