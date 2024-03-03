import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import Dragdrop from "../../components/Dragdrop";

export default function AddBlog() {
  return (
    <div className="text-white p-5 w-full">
      <div className="bg-secondary w-full p-5 rounded-md">
        <SubHeader>Add Blog</SubHeader>
        <div className="mt-10">
          <form className="flex flex-col items-start gap-5 justify-start">
            <div className="w-full">
              <FormElements.Label withAsterisk>Service Name</FormElements.Label>
              <FormElements.Input />
            </div>
            <div className="w-full">
              <FormElements.Label withAsterisk>Icon</FormElements.Label>
              {/* <FormElements.FileInput>Choose Icon</FormElements.FileInput> */}
              <Dragdrop className="w-64 h-64" />
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
