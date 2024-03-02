"use client";
import { endpoints } from "@/app/common";
import { Button } from "@/app/components/ui/button";
import { Loader } from "@/app/components/ui/loader/Loader";
import Modal from "@/app/components/ui/modal";
import useToast from "@/app/components/ui/toast";
import { METHODS } from "@/app/constants";
import { fileUpload } from "@/app/lib/fileUpload";
import {
  deleteVideoResume,
  revalidateJobSeekerProfile,
} from "@/app/lib/jobSeeker";

import { useRef, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

export default function VideoResume({ videos }) {
  // Local State
  const [uploadLoading, setUploadLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteVideoResumeId, setDeleteVideoResumeId] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  //toast state
  const { Toast, showToast } = useToast();

  const videoRef = useRef(null);

  /**
   * HANDLERS
   */
  const handleVideoChange = async event => {
    setUploadLoading(true);
    const file = event.target.files[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append("video", file);
        const res = await fileUpload(
          endpoints.jobSeeker.uploadVideoResume,
          formData,
          METHODS.PATCH
        );
        if (res?.data?.success) {
          revalidateJobSeekerProfile();

          showToast("Video uploaded successfully", "success");
          setUploadLoading(false);
        }

        if (!res?.data?.success) {
          showToast("Error while uploading video", "error");

          setUploadLoading(false);
        }
      } catch (error) {
        console.error("Error while uploading video: ", error);
        showToast("Error while uploading video", "error");
        setUploadLoading(false);
      }
    }
  };

  // toggole delete modal
  const showDeleteModalHandler = id => {
    setDeleteVideoResumeId(id);
    setShowDelete(true);
  };

  // hide delete modal
  const hideDeleteModalHandler = () => {
    setShowDelete(false);
    setDeleteVideoResumeId(null);
  };

  // Delete video resume handler
  const deleteVideoResumeHandler = async () => {
    setDeleteLoading(true);
    try {
      const response = await deleteVideoResume(deleteVideoResumeId);
      if (response?.success) {
        showToast("Video resume deleted successfully", "success");
        setDeleteLoading(false);
        hideDeleteModalHandler();
      }

      if (!response?.success) {
        showToast("Error while deleting video resume", "error");
        setDeleteLoading(false);
      }
    } catch (error) {
      showToast("Error while deleting video resume", "error");
      setDeleteLoading(false);
      hideDeleteModalHandler();
    }
  };

  return (
    <>
      <Toast />
      <div>
        <h2 className="text-1xl my-5 font-semibold">Video resume</h2>
        <div className="w-full md:flex">
          {videos?.map(video => (
            <div key={video?.file} className="relative md:w-1/2 h-72 p-3">
              <video
                ref={videoRef}
                controls
                className="w-full h-full border border-white/70 rounded-xl font-semibold text-xl"
              >
                <source src={video?.file} type="video/mp4" />
              </video>
              <div className="absolute top-5 right-5 bg-white rounded-md">
                <Button
                  variant="text"
                  onClick={() => showDeleteModalHandler(video?._id)}
                >
                  <FaRegTrashAlt />
                </Button>
              </div>
            </div>
          ))}

          {videos?.length < 3 && (
            <div className="w-full md:w-1/2 h-72 p-3 relative">
              <div className="w-full h-full">
                <label
                  htmlFor="video"
                  className="block w-full h-full border border-white/70 rounded-xl font-semibold text-xl"
                >
                  <div className="flex items-center justify-center h-full">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoChange}
                      id="video"
                      hidden
                      multiple
                    />
                    + Add Intro Video
                  </div>
                </label>
              </div>
              {uploadLoading && (
                <div className="absolute top-0 bg-slate-700 w-full h-full flex items-center justify-center opacity-70">
                  <Loader size={40} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Vdeo resume delete confirmation Modal */}
      <Modal
        isOpen={showDelete}
        toggoleModal={hideDeleteModalHandler}
        title="Delete Video"
        width="600px"
      >
        <div className="p-5 py-20">
          <div className="text-center flex flex-col justify-center items-center">
            <CiCircleInfo className="text-5xl text-slate-200" />
            <h2 className="text-xl text-slate-200">
              Are you want to delete this video resume?
            </h2>
            <p className="text-[13px] text-slate-400">
              Once you delete this video resume, it will be gone forever. Please
              confirm to proceed.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <Button
                variant="btnColor"
                customclassName="bg-red-500 px-2 py-2 border border-red-500 text-white"
                loading={deleteLoading}
                onClick={deleteVideoResumeHandler}
              >
                Delete
              </Button>
              <Button variant="btnColor" onClick={hideDeleteModalHandler}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
