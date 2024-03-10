import { getAllBanner } from "@/app/lib/banner";
import SubTable from "./page";

export default async function BannerTable() {
  const bannerData = await getAllBanner();
  return <SubTable bannerData={bannerData} />;
}
