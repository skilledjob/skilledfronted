import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import Dragdrop from "../../components/Dragdrop";
import Dropzone from "@/app/components/ui/dropzone";

export default function AddBlog() {
  return (
    <div className="text-white p-5 w-full">
      <div className="bg-secondary w-full p-5 rounded-md">
        <SubHeader>Add Category</SubHeader>
        <div className="mt-10">
          <form className="flex flex-col items-start gap-5 justify-start">
            <div className="w-full">
              <FormElements.Label withAsterisk>Service Name</FormElements.Label>
              <FormElements.Input />
            </div>
            <div className="w-full">
              <FormElements.Label withAsterisk>Icon</FormElements.Label>
              <Dropzone
                acceptedFileTypes={["jpg", "jpeg", "png"]}
                subTitle="To upload, file size must be under 2MB and allowed file types are (.jpg, .png, .jpeg)"
              />
            </div>
            <div className="flex gap-5 items-center mt-10 ">
              <Button>SAVE</Button>
              <Button variant="denger">CANCEL</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
