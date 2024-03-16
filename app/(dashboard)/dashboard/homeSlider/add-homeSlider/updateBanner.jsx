"use client";
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
import FormElements from "@/app/components/ui/form-elements";
import { FaRegTrashAlt } from "react-icons/fa";

const UpdateBanner = ({ singleData }) => {
  const { image, id } = singleData;
  const router = useRouter();
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
      setImages(URL.createObjectURL(file));

      setFile(file);
    } catch (error) {
      showToast(error.message, "Error:");
    }
  };
  return (
    <>
      <Toast />
      <div className="text-white w-full">
        {images && (
          <div className="relative mb-20 border rounded-md p-5 border-white flex items-center justify-center">
            <Image
              src={images}
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-contain"
              alt="Droped Image"
            />
            <div className="absolute top-5 right-5 bg-white rounded-md">
              <Button variant="text" onClick={() => setImages("")}>
                <FaRegTrashAlt />
              </Button>
            </div>
          </div>
        )}
        {!images && (
          <div>
            <FormElements.Label withAsterisk>Icon</FormElements.Label>
            <Dropzone
              acceptedFileTypes={["jpg", "jpeg", "png"]}
              subTitle="To upload, file size must be under 2MB and allowed file types are (.jpg, .png, .jpeg)"
              onUpload={handleBannerUpload}
            />
          </div>
        )}
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
    </>
  );
};
export default UpdateBanner;
