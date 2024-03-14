import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SubJobTable({ jobTableData }) {
 
  return (
    <div className="overflow-hidden">
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border-b font-medium text-white">
          <tr>
            <th scope="col" className="px-6 py-4">
              No.
            </th>
            <th scope="col" className="px-6 py-4">
              Title
            </th>
            <th scope="col" className="px-6 py-4">
              Description
            </th>
            <th scope="col" className="px-6 py-4">
              Icon
            </th>
            <th scope="col" className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-white/70">
          {jobTableData?.map((jobData, index) => (
            <tr className="border-b" key={jobData.id}>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {index + 1}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{jobData.title}</td>
              <td className="whitespace-nowrap px-6 py-4">
                {jobData.description}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <Image src={jobData.image} width={42} height={42} alt="Logo" />
              </td>
              <td className="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                <Link href={`jobPost/editJob/${jobData.slug}`}>
                  <Button>Edit</Button>
                </Link>
                <Button variant="denger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
