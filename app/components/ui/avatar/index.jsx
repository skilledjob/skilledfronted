"use client";

import { endpoints } from "@/app/common";
import { METHODS } from "@/app/constants";
import { fileUpload } from "@/app/lib/fileUpload";
import { revalidateCurrentUser } from "@/app/lib/user";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import { Loader } from "../loader/Loader";
import useToast from "../toast";

/**
 * @name Avatar
 * @description This component represents a user avatar, which can display an image or initials.
 *
 * @param {string} size - The size of the avatar. Options: "small", "medium", "large".
 * @param {string} image - The URL of the image to be displayed as the avatar.
 * @param {string} name - The name of the user, used to generate initials if no image is provided.
 * @param {boolean} rounded - Indicates whether the avatar should have rounded corners.
 *
 * @returns {JSX.Element} - Returns the JSX element representing the avatar.
 *
 * @example
 * ```jsx
 * <Avatar size="medium" image="/path/to/image.jpg" name="John Doe" rounded={true} />
 * ```
 */

const getInitials = name => {
  const initials = name
    ?.split(" ")
    ?.map(word => word[0])
    ?.join("");
  return initials;
};

export const Avatar = ({
  size = "large",
  image,
  name,
  rounded = true,
  isEdit = false,
}) => {
  // Local state
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Hooks
  const { Toast, showToast } = useToast();

  const sizeClass = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-20 h-20",
  }[size];

  const roundedClass = rounded ? "rounded-full" : "";

  /**
   * HANDLERS
   */
  const handleFileChange = async e => {
    setLoading(true);

    const file = e.target.files[0];
    // validate the size of the file. It only the images with size less than 2MB
    if (file.size > 2097152) {
      alert("File is too big!");
      return;
    } else {
      setFile(file);

      try {
        if (file) {
          const formData = new FormData();
          formData.append("image", file);
          const response = await fileUpload(
            endpoints.user.uploadProfile,
            formData,
            METHODS.PATCH
          );
          if (response?.data?.success) {
            setLoading(false);
            await revalidateCurrentUser();
            alert("Profile picture has been updated");
            setIsSuccess(true);
            // TODO: Update the user's profile picture in the UI

            showToast("Profile picture has been updated", "success");
          }
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }
  };

  /**
   * EFFECTS
   */
  useEffect(() => {
    setIsSuccess(false);
    setLoading(false);
  }, []);

  return (
    <div
      className={`relative bg-[#222B40] border border-slate-600 flex items-center justify-center ${sizeClass} ${roundedClass}`}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          {image ? (
            <Image
              src={image}
              alt={name}
              className={`w-full h-full object-cover ring-2 ring-opacity-10 ${
                rounded ? "rounded-full" : "rounded-none"
              }`}
              height={64}
              width={64}
            />
          ) : (
            <span className="text-white text-sm font-semibold">
              {getInitials(name)}
            </span>
          )}
          {isEdit && (
            <div className="absolute w-5 h-5 bottom-0 right-0 cursor-pointer">
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                hidden
              />
              <button
                onClick={() => {
                  fileInputRef.current.click();
                }}
                className="bg-white text-black h-full w-full flex items-center justify-center rounded-full"
              >
                <MdEdit />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
