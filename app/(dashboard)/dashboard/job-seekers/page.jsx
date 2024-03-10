import Link from "next/link";

export default function JobSeekers() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-white">Job Seekers</h1>
        <Link
          href="/dashboard/job-seekers/create"
          className=" bg-btnColor text-primary px-3 py-2 rounded-md"
        >
          Create Job Seeker
        </Link>
      </div>
    </div>
  );
}
