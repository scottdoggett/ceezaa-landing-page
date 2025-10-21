import { BringToLife } from "@/components/ui/hostels-page/bring-to-life";
import { StayPersonal } from "@/components/ui/hostels-page/stay-personal";
import { SimplifyOperations } from "@/components/ui/hostels-page/simplify-operations";
import { SaveTime } from "@/components/ui/hostels-page/save-time";
import { CreateConnection } from "@/components/ui/hostels-page/create-connection";
import { BuiltForYou } from "@/components/ui/hostels-page/built-for-you";
import { JoinMovement } from "@/components/ui/hostels-page/join-movement";

export default function Hostels() {
  return (
    <main className="font-sans">
      <BringToLife />
      <StayPersonal />
      <SimplifyOperations />
      <SaveTime />
      <CreateConnection />
      <BuiltForYou />
      <JoinMovement />
    </main>
  );
}
