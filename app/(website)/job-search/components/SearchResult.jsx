import Link from "next/link";
import SubHeader from "../../components/Subheader/Subheader";
import Image from "next/image";
import plumber from "@/public/assets/plumber.jpg";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { SelectInput } from "@/app/components/ui/form-elements/Select";
import { Avatar } from "@/app/components/ui/avatar";

export default function SearchResult() {
  const paragraph = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  Recusandae culpa quae non ab officiis voluptates similique ad
  obcaecati? Suscipit, libero!`;
  const options = [
    { value: 1, label: "One" },
    { value: 2, label: "Two" },
    { value: 3, label: "Three" },
    { value: 4, label: "Four" },
    { value: 5, label: "Five" },
    { value: 6, label: "Six" },
    { value: 7, label: "Seven" },
    { value: 8, label: "Eight" },
    { value: 9, label: "Nine" },
    { value: 10, label: "Ten" },
  ];
  return (
    <div className="w-full px-5">
      <div className="flex justify-between items-center border-b border-b-white/75 mb-5">
        <p>
          Showing <span className="text-white/80 font-bold">41-60</span> of{" "}
          <span className="text-white/80 font-bold">944</span> jobs
        </p>
        <div className="flex items-center gap-5 mb-5">
          <SelectInput options={options} />
          <SelectInput options={options} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-14">
        <Link href="/discription" className="h-full text-white">
          <div>
            <Image
              className="w-full object-cover h-full rounded-lg"
              src={plumber}
              alt=""
            />
          </div>
          <div className="flex gap-3 items-center mt-3">
            <div>
              <Avatar size="medium" image={plumber} rounded={true} />
            </div>
            <div>
              <h2 className="font-semibold text-lg tracking-wider">Title</h2>
              <p className="text-xs text-white/80 text-ellipsis">
                {paragraph.length >= 80
                  ? paragraph.slice(0, 80) + "..."
                  : paragraph}
              </p>
            </div>
          </div>
        </Link>

        <Link href="/discription" className="h-full text-white">
          <div>
            <Image
              className="w-full object-cover h-full rounded-lg"
              src={plumber}
              alt=""
            />
          </div>
          <div className="flex gap-3 items-center mt-3">
            <div>
              <Avatar size="medium" image={plumber} rounded={true} />
            </div>
            <div>
              <h2 className="font-semibold text-lg tracking-wider">Title</h2>
              <p className="text-xs text-white/80 text-ellipsis">
                {paragraph.length >= 80
                  ? paragraph.slice(0, 80) + "..."
                  : paragraph}
              </p>
            </div>
          </div>
        </Link>

        <Link href="/discription" className="h-full text-white">
          <div>
            <Image
              className="w-full object-cover h-full rounded-lg"
              src={plumber}
              alt=""
            />
          </div>
          <div className="flex gap-3 items-center mt-3">
            <div>
              <Avatar size="medium" image={plumber} rounded={true} />
            </div>
            <div>
              <h2 className="font-semibold text-lg tracking-wider">Title</h2>
              <p className="text-xs text-white/80 text-ellipsis">
                {paragraph.length >= 80
                  ? paragraph.slice(0, 80) + "..."
                  : paragraph}
              </p>
            </div>
          </div>
        </Link>

        <Link href="/discription" className="h-full text-white">
          <div>
            <Image
              className="w-full object-cover h-full rounded-lg"
              src={plumber}
              alt=""
            />
          </div>
          <div className="flex gap-3 items-center mt-3">
            <div>
              <Avatar size="medium" image={plumber} rounded={true} />
            </div>
            <div>
              <h2 className="font-semibold text-lg tracking-wider">Title</h2>
              <p className="text-xs text-white/80 text-ellipsis">
                {paragraph.length >= 80
                  ? paragraph.slice(0, 80) + "..."
                  : paragraph}
              </p>
            </div>
          </div>
        </Link>

        <Link href="/discription" className="h-full text-white">
          <div>
            <Image
              className="w-full object-cover h-full rounded-lg"
              src={plumber}
              alt=""
            />
          </div>
          <div className="flex gap-3 items-center mt-3">
            <div>
              <Avatar size="medium" image={plumber} rounded={true} />
            </div>
            <div>
              <h2 className="font-semibold text-lg tracking-wider">Title</h2>
              <p className="text-xs text-white/80 text-ellipsis">
                {paragraph.length >= 80
                  ? paragraph.slice(0, 80) + "..."
                  : paragraph}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="my-10">
        <ol className="flex items-center gap-3">
          <li className="text-2xl bg-white/80 p-5 rounded-full w-16 h-16 text-black flex items-center justify-center hover:bg-white cursor-pointer">
            <GoChevronLeft />
          </li>
          <li className="text-2xl bg-white/70 p-5 rounded-full cursor-pointer text-black w-8 h-8 flex items-center justify-center">
            1
          </li>
          <li className="text-2xl hover:bg-white/70 cursor-pointer p-5 rounded-full hover:text-black transition duration-300 w-8 h-8 flex items-center justify-center">
            2
          </li>
          <li className="flex items-center cursor-pointer justify-center text-2xl hover:bg-white/70 p-5 rounded-full transition duration-300 hover:text-black w-8 h-8">
            3
          </li>
          <li className="text-2xl bg-white/80 p-5 rounded-full text-black w-16 h-16 flex items-center justify-center hover:bg-white cursor-pointer">
            <GoChevronRight />
          </li>
        </ol>
      </div>
    </div>
  );
}
