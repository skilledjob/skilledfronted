"use client"
import { Button } from "@/app/components/ui/button";
import Dropzone from "@/app/components/ui/dropzone";
import useToast from "@/app/components/ui/toast";
import { endpoints } from "@/app/common";
import { METHODS } from "@/app/constants";
import { updateBanner } from "@/app/lib/banner";
import { fileUpload } from "@/app/lib/fileUpload";
import Image from "next/image";
import { useState } from "react";

import { useRouter } from "next/navigation";

const UpdateBanner =  ({singleData}) =>{

    const { image,id}=singleData
    const router = useRouter()
//loading state
const [loading, setLoading] = useState(false);
const [images, setImages] = useState(image);
const [file, setFile] = useState(null);
//toast
const { Toast, showToast } = useToast();
const upload = async () => {
  setLoading(true);
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fileUpload(
      endpoints.fileUpload.upload,
      formData,
      METHODS.POST
    );

    if (res.data.success) {
      const banner = {
        name: "Second Banner",
        image: res.data.data,
      };

      const result = await updateBanner(id, banner);
     

      if (result.success) {
        showToast("Banner updated successfully", "success");
        router.push("/dashboard/homeSlider");
      } else {
        showToast("Error updating banner. Please try again", "error");
      }
    } else {
      showToast(res.data.error || "Unknown error", "error");
    }
  } catch (error) {
    showToast(error.message || "An error occurred", "error");
  } finally {
    setLoading(false);
  }
};

const handleBannerUpload = async file => {
  try {
    setImages(URL.createObjectURL(file)); // Set image state with object URL
    // Add your file upload logic here
    setFile(file);
  } catch (error) {
    showToast(error.message, "Error:");
    // Handle other types of errors, such as network issues or unexpected responses
  }
};
return (
  <>
    <Toast />
    <div className="text-white w-full">
      {/* <SubHeader>Home Slider</SubHeader> */}
      {images && (
        <div className="mb-20 border rounded-md p-5 border-white flex items-center justify-center">
          <Image
            src={image}
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-contain"
            alt="Droped Image"
          />
        </div>
      )}
      <div>
        <Dropzone
          acceptedFileTypes={["png", "jpg", "jpeg"]}
          onUpload={handleBannerUpload}
        />
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button
          variant="btnColor"
          size="md"
          type="submit"
          loading={loading}
          disabled={loading}
          onClick={upload}
        >
          Add
        </Button>
      </div>
    </div>
    
  </>)
}
export default UpdateBanner