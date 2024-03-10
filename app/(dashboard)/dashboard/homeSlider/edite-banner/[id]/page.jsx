import { singlebanner } from "@/app/lib/banner";
import UpdateBanner from "../../add-homeSlider/updateBanner";

const SingleBanner = async ({ params }) => {
  const { id } = params;
  // console.log(id, "id");

  // Fetch single banner data
  const singleData = await singlebanner(id);
  // console.log(singleData, "singleData");

  // Render UpdateBanner component with fetched data
  return <UpdateBanner singleData={singleData} />;
};
export default SingleBanner;
