"use client";
import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";
import { fileUpload } from "@/app/lib/fileUpload";
import { endpoints } from "@/app/common";
import { METHODS } from "@/app/constants";
import { addBanner } from "@/app/lib/banner";
import Image from "next/image";
import useToast from "@/app/components/ui/toast";
import Dropzone from "@/app/components/ui/dropzone";
import { FaRegTrashAlt } from "react-icons/fa";

export default function AddHomeSlider() {
  //loading state
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
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

        const result = await addBanner(banner);

        if (result.success) {
          showToast("Banner added successfully", "success");
          setLoading(false);
        }
      } else {
        showToast(res.data.error, "error");
        setLoading(false);
      }
    } catch (error) {
      showToast(error.message, "error");
      setLoading(false);
    }
  };

  const handleBannerUpload = async file => {
    try {
      setImage(URL.createObjectURL(file)); // Set image state with object URL
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
        <SubHeader>Home Slider</SubHeader>
        {image && (
          <div className="relative mb-20 border rounded-md p-5 border-white flex items-center justify-center">
            <Image
              src={image}
              width={300}
              height={300}
              className="w-[300px] h-[300px] object-contain"
              alt="Droped Image"
            />
            <div className="absolute top-5 right-5 bg-white rounded-md">
              <Button variant="text" onClick={() => setImage("")}>
                <FaRegTrashAlt />
              </Button>
            </div>
          </div>
        )}
        <div>
          {!image && (
            <Dropzone
              acceptedFileTypes={["png", "jpg", "jpeg"]}
              onUpload={handleBannerUpload}
            />
          )}
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
    </>
  );
}
