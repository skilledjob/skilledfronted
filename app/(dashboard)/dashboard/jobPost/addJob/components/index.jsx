import { getAllJob } from "@/app/lib/jobPost";
import SubJobTable from "./page";

export default async function JobTable() {
  const jobTableData = await getAllJob();
  console.log(jobTableData);
  return <SubJobTable jobTableData={jobTableData} />;
}
