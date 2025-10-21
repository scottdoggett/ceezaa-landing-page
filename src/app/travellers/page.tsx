import { TravelPersonal } from "@/components/ui/travelers-page/travel-personal";
import { SeeHappening } from "@/components/ui/travelers-page/see-happening";
import { LiveMoment } from "@/components/ui/travelers-page/live-moment";
import { CeezaaId } from "@/components/ui/travelers-page/ceezaa-id";
import { WorldCloser } from "@/components/ui/travelers-page/world-closer";

export default function Travellers() {
  return (
    <main className="font-sans">
      <TravelPersonal />
      <SeeHappening />
      <LiveMoment />
      <CeezaaId />
      <WorldCloser />
    </main>
  );
}
