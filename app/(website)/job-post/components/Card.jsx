import img1 from "@/public/assets/banner-detail.jpg";
import Image from "next/image";
import SubHeader from "../../components/Subheader/Subheader";
import { Avatar } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function Card({ jobPost }) {
  const { title, description, image, createdAt, slug } = jobPost;
export default function Card({ jobPost }) {
  const { title, description, image, createdAt, slug } = jobPost;

  // time convert
  let dateString = createdAt;
  let date = new Date(dateString);
  let options = { year: "numeric", month: "long", day: "numeric" };
  let formattedDate = date.toLocaleDateString("en-US", options);
  // time convert
  let dateString = createdAt;
  let date = new Date(dateString);
  let options = { year: "numeric", month: "long", day: "numeric" };
  let formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <Link
      href={`/job-post/job-details/${slug}`}
      className="p-2 rounded-md border border-white/70"
    >
      <div>
        <Image
          src={image}
          alt="main card Photo"
          className="rounded-md"
          width={400}
          height={210}
        />
      </div>
      <div className="mt-5">
        <span className="bg-btnColor text-primary px-2 py-1 rounded-full text-xs">
          New
        </span>
        <SubHeader className="text-2xl text-white">{title}</SubHeader>
        <p className="text-white/70">{description}</p>
        {/* <div class="">
          <p class="text-white/70 text-base mt-2">
            <span class="font-semibold text-white">Location:</span> New York City
          </p>
          <p class="text-white/70 text-base">
            <span class="font-semibold text-white">Company:</span> Tech Innovations Inc.
          </p>
          <p class="text-white/70 text-base">
            <span class="font-semibold text-white">Salary:</span> $90,000 per year
          </p>
          <p class="text-white/70 text-base">
            <span class="font-semibold text-white">Experience:</span> 2 years
          </p>
          <p class="text-white/70 text-base">
            <span class="font-semibold text-white">Education:</span> BSC
          </p>
          <p class="text-white/70 text-base">
            <span class="font-semibold text-white">Career Level:</span> Diploma
          </p>
        </div> */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <div>
              <Avatar image={image} size="small" />
            </div>
            <div>
              <h5 className="text-white font-semibold leading-2">
                Razibul Islam Raj
              </h5>
              <span className="text-white/70 text-sm">{formattedDate}</span>
            </div>
          </div>
          <div>
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </Link>
    // <div class="max-w-sm rounded bg-white overflow-hidden shadow-lg">
    //   <Image
    //     src="https://skilledupload-bucket.nyc3.digitaloceanspaces.com/images/profile-pictures/65d4fc10bf821bc0fc67e7ea.jpg"
    //     alt="main card Photo"
    //     className="rounded-md"
    //     width={400}
    //     height={210}
    //   />

    //   <div class="px-6 py-4">
    //     <div class="font-bold text-xl mb-2">Software Engineer</div>
    //     <p class="text-gray-700 text-base">
    //       We are seeking a skilled software engineer to join our dynamic team.
    //     </p>
    //     <p class="text-white/70 text-base mt-2">
    //       <span class="font-semibold text-white">Location:</span> New York City
    //     </p>
    //     <p class="text-white/70 text-base">
    //       <span class="font-semibold text-white">Company:</span> Tech Innovations Inc.
    //     </p>
    //     <p class="text-white/70 text-base">
    //       <span class="font-semibold text-white">Salary:</span> $90,000 per year
    //     </p>
    //     <p class="text-white/70 text-base">
    //       <span class="font-semibold text-white">Experience:</span> 2 years
    //     </p>
    //     <p class="text-white/70 text-base">
    //       <span class="font-semibold text-white">Education:</span> BSC
    //     </p>
    //     <p class="text-white/70 text-base">
    //       <span class="font-semibold text-white">Career Level:</span> Diploma
    //     </p>
    //   </div>
    // </div>
  );
}
