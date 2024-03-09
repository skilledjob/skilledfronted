import { getAllCategories } from "@/app/lib/jobCategories";
import Category from "./components/page";

export default async function Blog() {
  const categoridata = await getAllCategories();
  return <Category categoridata={categoridata} />;
}
