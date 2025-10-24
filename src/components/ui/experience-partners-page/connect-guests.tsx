import Image from "next/image";

export function ConnectGuests() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <div className="hidden lg:block relative sm:h-[450px] h-[300px] rounded-2xl overflow-hidden border border-secondary-foreground/10 shadow-xl">
                <Image
                  src="https://bl974d7s47.ufs.sh/f/eiqM2oDvPqg1Lj9AJq8E7IWnp2JwMUmoR4sBVKefxXQ8CF60"
                  alt="Connect With Guests - Partners connecting with engaged travelers"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Connect With Guests Who{" "}
                <span className="text-primary">Care</span>
              </h2>

              <div className="space-y-5 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5"></div>
                  <p className="text-base md:text-lg font-semibold">
                    Ceezaa matches travelers with experiences that fit their
                    interests, energy, and style.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5"></div>
                  <p className="text-base md:text-lg font-semibold">
                    Every recommendation feels personal, helping your events
                    attract people who truly want to be there.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5"></div>
                  <p className="text-base md:text-lg font-semibold">
                    Your tours, classes, and gatherings become part of the
                    memories that define someone&apos;s trip.
                  </p>
                </div>

                <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-5 md:p-6 mt-6 md:mt-8">
                  <p className="text-lg md:text-xl font-semibold">
                    Ceezaa helps you turn every experience into a story
                    travelers remember and share.
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
