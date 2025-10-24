import { Ticket, Brain, Globe, Sparkles, MapPin, Calendar, Gem, Plane } from "lucide-react";
import Image from "next/image";

export function CeezaaId() {
  return (
    <section className="w-full py-20 md:py-32 bg-linear-to-b from-border via-background to-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left - Visual Card */}
            <div className="lg:col-span-2">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-linear-to-br from-primary via-accent to-primary rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />

                {/* Card */}
                <div className="relative bg-linear-to-br from-card via-card to-muted/20 border-2 border-primary/30 rounded-3xl p-6 shadow-2xl overflow-hidden">
                  {/* Decorative background pattern */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-linear-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-accent/10 to-transparent rounded-full blur-2xl" />

                  <div className="relative space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-linear-to-br from-primary to-primary/80 rounded-full p-3 shadow-lg">
                          <Ticket className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Digital Passport</p>
                          <p className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Ceezaa ID</p>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

                    {/* User Info Section */}
                    <div className="bg-muted/30 backdrop-blur-sm rounded-xl p-4 border border-primary/10">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-lg font-bold border-2 border-primary/30">
                          JD
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">Jane Doe</p>
                          <p className="text-sm text-muted-foreground">Member since 2024</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-primary/5 rounded-lg p-3 text-center border border-primary/10">
                        <div className="flex justify-center mb-1">
                          <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-lg font-bold text-foreground">12</p>
                        <p className="text-sm text-muted-foreground">Cities</p>
                      </div>
                      <div className="bg-accent/5 rounded-lg p-3 text-center border border-accent/10">
                        <div className="flex justify-center mb-1">
                          <Calendar className="w-4 h-4 text-accent" />
                        </div>
                        <p className="text-lg font-bold text-foreground">47</p>
                        <p className="text-sm text-muted-foreground">Events</p>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-3 text-center border border-primary/10">
                        <div className="flex justify-center mb-1">
                          <Gem className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-lg font-bold text-foreground">12,344</p>
                        <p className="text-sm text-muted-foreground">Points</p>
                      </div>
                    </div>

                    {/* QR Code Section */}
                    <div className="bg-white rounded-xl p-4 shadow-inner border-2 border-dashed border-primary/20">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-base font-semibold text-gray-700 mb-1">Scan to connect</p>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <p className="text-sm text-gray-600">Quick check-in</p>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                              <p className="text-sm text-gray-600">Share profile</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="absolute -inset-1 bg-linear-to-br from-primary/20 to-accent/20 rounded-lg blur-sm" />
                          <div className="relative bg-white p-2 rounded-lg shadow-md">
                            <Image
                              src="https://bl974d7s47.ufs.sh/f/eiqM2oDvPqg1uleQyowjo3wFBUySAzPRH57mICT2n9eLgdMY"
                              alt="Ceezaa ID QR Code"
                              width={80}
                              height={80}
                              className="rounded"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-linear-to-r from-primary/15 via-accent/10 to-primary/15 rounded-lg p-3 border border-primary/20">
                      <p className="text-sm text-center font-medium text-foreground/80 leading-relaxed">
                        One identity. Every stay. Always yours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Your story in one place,{" "}
                  <span className="text-primary">your passport to a personalized world.</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Every traveler carries moments that shape them. The
                    places they&apos;ve stayed, the experiences that made
                    them feel alive, and the people who became part of
                    their journey. Now, your preferences and memories
                    travel with you, connecting every hostel and stay into
                    one personal story that feels more familiar each time.
                  </p>

                  <div className="bg-card border-l-4 border-primary rounded-r-xl p-6 shadow-sm">
                    <p className="font-semibold text-foreground">
                      Your Ceezaa ID brings those memories together.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-muted/70 rounded-xl p-5 space-y-2">
                    <Brain className="w-8 h-8" />
                    <p className="font-medium text-foreground">Learns with you</p>
                    <p className="text-base text-muted-foreground">
                      Understands what you love and seek
                    </p>
                  </div>

                  <div className="bg-muted/70 rounded-xl p-5 space-y-2">
                    <Globe className="w-8 h-8" />
                    <p className="font-medium text-foreground">Grows alongside you</p>
                    <p className="text-base text-muted-foreground">
                      Each new place feels more familiar
                    </p>
                  </div>

                  <div className="bg-muted/70 rounded-xl p-5 space-y-2">
                    <Plane className="w-8 h-8" />
                    <p className="font-medium text-foreground">Remembers you</p>
                    <p className="text-base text-muted-foreground">
                      Carries your preferences across every stay
                    </p>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-6">
                  <p className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> It is your passport to a personalized world.
                  </p>
                  <p className="text-base text-muted-foreground">
                    A quiet connection to the experiences, cities, and stories that
                    become part of who you are.
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
