import { ShareWorld } from "@/components/ui/experience-partners-page/share-world";
import { ConnectGuests } from "@/components/ui/experience-partners-page/connect-guests";
import { SimplifyOperations } from "@/components/ui/experience-partners-page/simplify-operations";
import { PartnerPurpose } from "@/components/ui/experience-partners-page/partner-purpose";
import { BuiltGrowth } from "@/components/ui/experience-partners-page/built-growth";
import { JoinMovement } from "@/components/ui/experience-partners-page/join-movement";

export default function ExperiencePartners() {
  return (
    <main className="font-sans">
      <ShareWorld />
      <ConnectGuests />
      <SimplifyOperations />
      <PartnerPurpose />
      <BuiltGrowth />
      <JoinMovement />
    </main>
  );
}
