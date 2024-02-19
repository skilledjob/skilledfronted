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
      <SubHeader className="">Intro & Overview</SubHeader>
      <div>
        <p className="text-lg font-semibold">Overview*</p>
        <textarea
          placeholder="Write something interesting about you..."
          className="w-full h-72 border border-white/70 bg-transparent p-2 rounded-md resize-none outline-none mt-2"
        />

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
    </div>
  );
}
