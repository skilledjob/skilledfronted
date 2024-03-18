import Image from "next/image";
import logo from "@/public/assets/e1.png";
import Link from "next/link";
import { approvedResume } from "@/app/lib/jobSeeker";
import { Avatar } from "@/app/components/ui/avatar";

export default function Card({ jobSeeker }) {
  //todo fif desinf and refetcj
  const ApproveApplicantProfile = async id => {
    try {
      if (id) {
        let data;
        const result = await approvedResume(id, data);
      }
    } catch (error) {}
  };

  return (
    <div className="border border-white/70 p-5 rounded-md">
      <Link href={`/discription/${jobSeeker?.slug}`}>
        <div className="flex items-start gap-4">
          <div>
            <Avatar
              image={jobSeeker?.user?.profilePicture}
              name={
                jobSeeker?.user?.firstName + " " + jobSeeker?.user?.lastName
              }
              size="medium"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">
              {jobSeeker?.user?.firstName + " " + jobSeeker?.user?.lastName}
            </h3>
            <p className="text-sm">
              {jobSeeker?.intro?.length >= 20
                ? jobSeeker?.intro.slice(0, 20) + "..."
                : jobSeeker?.intro}
            </p>
          </div>
        </div>
      </Link>

      <video
        src=""
        controls
        autoPlay
        poster="../../../../../public/assets/banner-detail.jpg"
      ></video>

      <div className="space-x-2 flex justify-center">
        {jobSeeker?.status === "approved" ? (
          <Link
            href={`/discription/${jobSeeker?.slug}`}
            className="bg-btnColor text-primary inline-block px-4 py-1 rounded-md mt-2 items-center"
          >
            View Details
          </Link>
        ) : (
          <>
            <button
              onClick={() => ApproveApplicantProfile(jobSeeker?.id)}
              className="bg-btnColor text-primary inline-block px-4 py-1 rounded-md mt-2 items-center"
            >
              Approve
            </button>
            <Link
              href={`/discription/${jobSeeker?.slug}`}
              className="bg-btnColor text-primary inline-block px-4 py-1 rounded-md mt-2 items-center"
            >
              View Details
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
