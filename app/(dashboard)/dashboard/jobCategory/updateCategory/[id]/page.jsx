import { getSingleCategory } from "@/app/lib/jobCategories";
import UpdateCategory from "../../components/UpdateCategory";

export default async function CategoryUpdate({ params }) {
  const { id } = params;

  const singleData = await getSingleCategory(id);

  return <UpdateCategory singleData={singleData} />;
}
