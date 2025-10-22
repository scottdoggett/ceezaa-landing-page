import { TravelPersonal } from "@/components/ui/travelers-page/travel-personal";
import { SeeHappening } from "@/components/ui/travelers-page/see-happening";
import { LiveMoment } from "@/components/ui/travelers-page/live-moment";
import { CeezaaId } from "@/components/ui/travelers-page/ceezaa-id";
import { WorldCloser } from "@/components/ui/travelers-page/world-closer";

export default function Travelers() {
  return (
    <main className="font-sans">
      <TravelPersonal />
      <SeeHappening />
      {/* <div className="w-full overflow-hidden relative z-10 -top-20 -bottom-20 -mb-60">
        <div className="spacer divider-primary-secondary"></div>
      </div> */}
      <LiveMoment />
      <CeezaaId />
      <WorldCloser />
    </main>
  );
}
