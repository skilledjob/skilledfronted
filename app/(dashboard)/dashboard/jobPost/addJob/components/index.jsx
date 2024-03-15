import { getAllJob } from "@/app/lib/jobPost";
import SubJobTable from "./page";

export default async function JobTable() {
  const jobTableData = await getAllJob();
  
  return <SubJobTable jobTableData={jobTableData} />;
}
