import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Table from "../../components/Table";

export default function HomeSlider() {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="flex items-center justify-between pr-6">
        <SubHeader className="text-white">Job Category</SubHeader>
        <Link href="homeSlider/add-homeSlider">
          <Button>Add Banner</Button>
        </Link>
      </div>
      <Table />
    </div>
  );
}
