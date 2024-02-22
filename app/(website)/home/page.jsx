import HomeSlider from "./components/HomeSlider/homeSlider";
import Categories from "./components/categories";
import Contact from "./components/contact";
import EditorChoice from "./components/editorsChoice";

{
  /* This is The Home Page */
}
const Page = () => {
  return (
    <div>
      {/* This is Home Page slider Component */}
      <HomeSlider />
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
