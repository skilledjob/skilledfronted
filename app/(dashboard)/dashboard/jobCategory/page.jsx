import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import { Button } from "@/app/components/ui/button";
import Table from "../../components/Table";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo.jpeg";

export default function Blog() {
  return (
    <div className="flex flex-col w-full">
      <div className="mt-16 w-full mr-5 p-5 bg-secondary rounded-md">
        <div className="flex items-center justify-between w-full">
          <SubHeader className="text-white">Job Category</SubHeader>
          <Link href="add-blog">
            <Button>Add More</Button>
          </Link>
        </div>
        <div className="flex items-center justify-between bg-primary p-5 rounded-md">
          <div className="flex items-center gap-2">
            <div>
              <Image src={logo} width={72} height={72} alt="logo" />
            </div>
            <div>
              <h1 className="text-white text-xl font-semibold">String</h1>
              <p className="text-white/70 text-base">Feb 14, 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button>Edit</Button>
            <Button variant="denger">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
