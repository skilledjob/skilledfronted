import Dragdrop from "@/app/(dashboard)/components/Dragdrop";
import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import { Button } from "@/app/components/ui/button";
import Dropzone from "@/app/components/ui/dropzone";
import FormElements from "@/app/components/ui/form-elements";

export default function addJob() {
  return (
    <div className="text-white p-5 w-full">
      <div className="bg-secondary w-full p-5 rounded-md">
        <SubHeader>Add Job</SubHeader>
        <div className="mt-10">
          <form className="space-y-3">
            <div>
              <FormElements.Label withAsterisk>Job Name</FormElements.Label>
              <FormElements.Input />
            </div>
            <div>
              <FormElements.Label withAsterisk>Description</FormElements.Label>
              <FormElements.Input />
            </div>
            <div>
              <FormElements.Label withAsterisk>Icon</FormElements.Label>
              <Dropzone
                acceptedFileTypes={["jpg", "jpeg", "png"]}
                subTitle="To upload, file size must be under 2MB and allowed file types are (.jpg, .png, .jpeg)"
              />
            </div>
            <div className="flex gap-5 items-center">
              <Button>SAVE</Button>
              <Button variant="denger">CANCEL</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
