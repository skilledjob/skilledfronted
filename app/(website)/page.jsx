import { getAllBanner } from "@/app/lib/banner";
import HomeSlider from "./home/components/HomeSlider/homeSlider";
import Categories from "./home/components/categories";
import Contact from "./home/components/contact";
import EditorChoice from "./home/components/editorsChoice";

export const metadata = {
  title: "Skilled Up",
  description: "Skilled Up is a website for finding best employees",
};

const Page = async () => {
  const bannerData = await getAllBanner();
  return (
    <div>
      {/* This is Home Page slider Component */}
      <HomeSlider bannerData={bannerData} />
      {/* This is Home Page Contact Component */}
      <Contact />
      {/* This is Home Page Category Component */}
      <Categories />
      {/* This is Home Page Video Component */}
      <EditorChoice />
    </div>
  );
};

export default Page;
