import { Button } from "@/components/ui/button";
import { Backpack, Hotel, Target } from "lucide-react";

export function JoinMovement() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-t from-secondary to-secondary/95 text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Join the <span className="text-primary">Movement</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Ceezaa is for travelers who believe in connection and for hostels that want to create it.
            </p>
            <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              Join us as we shape the future of how people experience the world.
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* For Travelers */}
            <div className="bg-card/10 backdrop-blur border-2 border-secondary-foreground/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all group text-center">
              <div className="bg-primary/20 rounded-full p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Backpack className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Travelers</h3>
              <p className="text-secondary-foreground/80 mb-6">
                Experience hostels that know you and stays that feel personal from day one.
              </p>
              <Button size="lg" className="w-full">
                Explore Ceezaa →
              </Button>
            </div>

            {/* For Hostels */}
            <div className="bg-card/10 backdrop-blur border-2 border-secondary-foreground/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all group text-center">
              <div className="bg-primary/20 rounded-full p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Hotel className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Hostels</h3>
              <p className="text-secondary-foreground/80 mb-6">
                Create experiences guests remember and run your hostel with clarity and connection.
              </p>
              <Button size="lg" className="w-full">
                Bring Ceezaa to Your Hostel →
              </Button>
            </div>

            {/* For Experience Partners */}
            <div className="bg-card/10 backdrop-blur border-2 border-secondary-foreground/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all group text-center">
              <div className="bg-primary/20 rounded-full p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Experience Partners</h3>
              <p className="text-secondary-foreground/80 mb-6">
                Connect with travelers seeking authentic experiences and grow your local impact.
              </p>
              <Button size="lg" className="w-full">
                Become a Partner →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
