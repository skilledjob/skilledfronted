import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import Dragdrop from "../../components/Dragdrop";
import { Button } from "@/app/components/ui/button";

export default function HomeSlider() {
  return (
    <div className="text-white w-full">
      <SubHeader>Home Slider</SubHeader>
      <div>
        <Dragdrop className="w-96 h-64" />
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button size="xl">Add</Button>
      </div>
    </div>
  );
}
