import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";

export default function Job_Category() {
  return (
    <div className="text-white p-5 w-full">
      <div className="bg-secondary w-full p-5 rounded-md">
        <SubHeader>Add Job</SubHeader>
        <div className="mt-10">
          <form className="space-y-3">
            <div>
              <FormElements.Label withAsterisk>Service Name</FormElements.Label>
              <FormElements.Input />
            </div>
            <div>
              <FormElements.Label withAsterisk>Description</FormElements.Label>
              <FormElements.Input />
            </div>
            <div>
              <FormElements.Label withAsterisk>Icon</FormElements.Label>
              <FormElements.FileInput>Choose Icon</FormElements.FileInput>
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
