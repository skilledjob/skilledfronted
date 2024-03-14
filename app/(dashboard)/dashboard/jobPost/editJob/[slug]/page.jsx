import { getSingleJObPost } from "@/app/lib/jobPost";
import UpdateJob from "../../addJob/UpdateJob";

export default async function EditJob({ params }) {
  const { slug } = params;
 

  const singleData = await getSingleJObPost(slug);
  

  return <UpdateJob singleData={singleData} slug={slug} />;
}
