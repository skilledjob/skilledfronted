import { getSingleJObPost } from "@/app/lib/jobPost";
import UpdateJob from "../../addJob/UpdateJob";

export default async function EditJob({ params }) {
  const { slug } = params;
  // console.log(slug);

  const singleData = await getSingleJObPost(slug);
  // console.log(singleData);

  return <UpdateJob singleData={singleData} slug={slug} />;
}
