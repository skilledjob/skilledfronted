"use client";

import { endpoints } from "@/app/common";
import { Button } from "@/app/components/ui/button";
import Dropzone from "@/app/components/ui/dropzone";
import useToast from "@/app/components/ui/toast";
import { METHODS } from "@/app/constants";
import { fileUpload } from "@/app/lib/fileUpload";
import { revalidateJobSeekerProfile } from "@/app/lib/jobSeeker";

import { useEffect, useState } from "react";

export default function ResumeUploader({ resume = null }) {
  // Local State
  const [loading, setLoading] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
     //toast state 
     const { Toast, showToast } = useToast();

  /**
   * HANDLERS
   */
  const handleUpload = async file => {
    setLoading(true);
    try {
      // form data
      const formData = new FormData();
      formData.append("resume", file);

      const res = await fileUpload(
        endpoints.jobSeeker.uplaodResume,
        formData,
        METHODS.PATCH
      );

      if (res?.data?.success) {
        revalidateJobSeekerProfile();
        showToast("Resume uploaded successfully","success");
        setLoading(false);
        setShowUpload(false);
      }

      if (!res?.data?.success) {
        showToast("Error while uploading resume","error");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error while uploading resume: ", error);
      setLoading(false);
      showToast("Error while uploading resume","error");
    }
  };

  // download resume handler
  const downloadResumeHandler = () => {
    window.open(resume, "_blank");
  };

  /**
   * EFFECTS
   */
  useEffect(() => {
    if (resume === null) {
      setShowUpload(true);
    }
  }, [resume]);

  useEffect(() => {
    if (resume) {
      setResumeFile(resume);
    }
  }, [resume]);

  return (
    <div>
      <Toast/>
      <div>
        {/* Show a card for uploaded resume */}

        {resumeFile && (
          <div className="bg-secondary p-5 rounded mt-5">
            <h2 className="text-1xl my-5 font-semibold">Uploaded Resume</h2>
            <div className="flex items-center">
              <iframe
                src={resumeFile}
                title="Uploaded Resume"
                width="100%"
                height="400px" // Adjust height as needed
              />
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Button
                variant="outline"
                customclassName="text-blue-500 text-sm border-blue-500"
                onClick={downloadResumeHandler}
              >
                View
              </Button>
              <Button
                variant="outline"
                customclassName="text-green-500 text-sm border-green-500"
                onClick={downloadResumeHandler}
              >
                Download
              </Button>
              <Button
                variant="outline"
                customclassName="text-yellow-500 text-sm border-yellow-500"
                onClick={() => setShowUpload(!showUpload)}
              >
                Update
              </Button>
            </div>
          </div>
        )}
      </div>
      {showUpload && (
        <div>
          <h2 className="text-1xl my-5 font-semibold">Resume Manager</h2>
          <Dropzone onUpload={handleUpload} loading={loading} />
        </div>
      )}
    </div>
  );
}
