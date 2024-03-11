import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import { Button } from "@/app/components/ui/button";

import Table from "../../components/Table";

import Link from "next/link";

export default function AddJob() {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="flex items-center justify-between pr-6">
        <SubHeader className="text-white">Add Job</SubHeader>
        <Link href="jobPost/addJob">
          <Button>Add Job</Button>
        </Link>
      </div>
      <Table />
    </div>
  );
}
