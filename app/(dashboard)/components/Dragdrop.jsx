/**
 * @name Dragdrop
 * @description -This is a Drag And Drop component. You Can use it when you need to add a image
 * It accept all types of image.
 * @param {string} className -you can customize drag and drop box by your won.
 * @returns Image
 *
 * @example
 * ``` JSX
 * <Dragdrop className="w-96 h-64"/>
 * ```
 */

"use client";
import Image from "next/image";
import { useState } from "react";

export default function Dragdrop({ className,setImage }) {
  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState("");

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = e => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;

    if (files.length > 0) {
      const file = files[0];
     
      setImage(file)
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleClick = e => {
    if (e.target.files && e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    } else {
      setPreview("");
    }
  };

  return (
    <div className="flex items-center justify-center w-full flex-col">
      {preview && (
        <div className="mb-20 border rounded-md p-5 border-white">
          <Image src={preview} width={300} height={300} alt="Droped Image" />
        </div>
      )}

      <div
        className={` bg-secondary flex items-center justify-center border rounded-lg ${className} ${
          dragging ? "border-blue-500" : "border-gray-400"
        }`}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {dragging ? (
          <span className="text-blue-500">Drop here</span>
        ) : (
          <p className="flex items-center flex-col">
            Drag me <span className="font-semibold">or</span>
            <label htmlFor="photo" className="cursor-pointer">
              Click Here
            </label>
            <input type="file" id="photo" hidden onChange={handleClick} />
          </p>
        )}
      </div>
    </div>
  );
}
