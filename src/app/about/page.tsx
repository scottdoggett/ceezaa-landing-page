import { BuiltForModern } from "@/components/ui/about-page/built-for-modern";
import { OurStory } from "@/components/ui/about-page/our-story";
import { OurMission } from "@/components/ui/about-page/our-mission";
import { FutureOfHostels } from "@/components/ui/about-page/future-of-hostels";
import { JoinMovement } from "@/components/ui/about-page/join-movement";

export default function About() {
  return (
    <main className="font-sans">
      <BuiltForModern />
      <OurStory />
      <OurMission />
      <FutureOfHostels />
      <JoinMovement />
    </main>
  );
}
