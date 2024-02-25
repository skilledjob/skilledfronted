import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import logo from "@/public/assets/logo.jpeg";

export default function Table() {
  return (
    <div class="overflow-hidden">
      <table class="min-w-full text-left text-sm font-light">
        <thead class="border-b font-medium text-white">
          <tr>
            <th scope="col" class="px-6 py-4">
              No.
            </th>
            <th scope="col" class="px-6 py-4">
              Title
            </th>
            <th scope="col" class="px-6 py-4">
              Description
            </th>
            <th scope="col" class="px-6 py-4">
              Icon
            </th>
            <th scope="col" class="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-white/70">
          <tr class="border-b">
            <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
            <td class="whitespace-nowrap px-6 py-4">web</td>
            <td class="whitespace-nowrap px-6 py-4">wed....</td>
            <td class="whitespace-nowrap px-6 py-4">
              <Image src={logo} width={42} height={42} alt="Logo" />
            </td>
            <td class="whitespace-nowrap px-6 py-4 flex items-center gap-2">
              <Button>Edit</Button>
              <Button variant="denger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
