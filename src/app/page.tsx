import { Hero } from "@/components/ui/home-page/hero";
import { WhyCeezaa } from "@/components/ui/home-page/why-ceezaa";
import { WhatCeezaaIs } from "@/components/ui/home-page/what-ceezaa-is";
import { YourStay } from "@/components/ui/home-page/your-stay";
import { Explore } from "@/components/ui/home-page/explore";
import { CeezaaId } from "@/components/ui/home-page/ceezaa-id";
import { Community } from "@/components/ui/home-page/community";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <WhyCeezaa />
      <div className="w-full overflow-hidden -mt-4">
        <div className="spacer layer1"></div>
      </div>
      <WhatCeezaaIs />
      <YourStay />
      <Explore />
      <CeezaaId />
      <Community />
    </main>
  );
}
