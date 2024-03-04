import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import Dragdrop from "../../components/Dragdrop";
import { Button } from "@/app/components/ui/button";
import Dropzone from "@/app/components/ui/dropzone";

export default function HomeSlider() {
  return (
    <div className="text-white w-full">
      <SubHeader>Home Slider</SubHeader>
      <div>
        <Dropzone
          acceptedFileTypes={["jpg", "jpeg", "png"]}
          subTitle="To upload, file size must be under 2MB and allowed file types are (.jpg, .png, .jpeg)"
        />
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button size="xl">Add</Button>
      </div>
    </div>
  );
}
