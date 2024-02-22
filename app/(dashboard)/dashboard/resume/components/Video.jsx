"use client";
import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import { useRef } from "react";

export default function Video() {
  const videoRef = useRef(null);

  const handleVideoChange = event => {
    const file = event.target.files[0];

    if (file) {
      const videoURL = URL.createObjectURL(file);
      videoRef.current.src = videoURL;
    }
  };

  return (
    <div>
      <div className="flex items-center gap-5 mt-5">
        <video
          ref={videoRef}
          controls
          className="w-1/2 border border-white/70 h-72 rounded-xl font-semibold text-xl"
        ></video>
        <label
          htmlFor="video"
          className="block w-1/2 border border-white/70 h-72 rounded-xl font-semibold text-xl"
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
    </div>
  );
}
