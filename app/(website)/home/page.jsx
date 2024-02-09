import Categories from "../categories/categories";
import HomeSlider from "../components/HomeSlider/homeSlider";
import Contact from "../contact/contact";
import EditorChoice from "../editorsChoice/editorsChoice";

const Page = () => {
  return (
    <div>
      <HomeSlider />
      <Contact />
      <Categories />
      <EditorChoice />
    </div>
  );
};

export default Page;
