"use client";

import { useRef, useState } from "react";
import { Button } from "../button";
import { Loader } from "../loader/Loader";
/**
 * @name Dropzone
 * @description This component provides a user-friendly interface for uploading files by either
 * dragging and dropping them onto the designated area or selecting them from the
 * file system.
 *
 * @param {Function} onUpload - Function invoked when a file is successfully uploaded.
 * @param {Array<string>} acceptedFileTypes - Array of strings specifying accepted file types.
 * @param {string} title - Main title or instruction displayed within the dropzone area.
 * @param {string} subTitle - Additional information or guidelines displayed below the main title.
 * @param {boolean} loading - Boolean indicating whether the component is in a loading state.
 *
 * @returns {JSX.Element} - Returns the JSX element representing the dropzone.
 *
 * @example
 * ```jsx
 * <Dropzone onUpload={handleUpload} acceptedFileTypes={['pdf', 'docx', 'doc']} title="Drop files here to upload" subTitle="To upload, file size must be under 5MB and allowed file types are (.doc, .docx, .pdf, .jpg, .png)" loading={isLoading} />
 * ```
 */

export default function Dropzone({
  onUpload,
  acceptedFileTypes = ["pdf", "docx", "doc"],
  title = "Drop files here to upload",
  subTitle = "To upload file size is (Max 5Mb) and allowed file types are (.doc, .docx, .pdf)",
  loading = false,
}) {
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const [error, setError] = useState(null);

  const handleDragOver = event => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = event => {
    event.preventDefault();
    setDragOver(false);

    const file = event.dataTransfer.files[0];
    const fileSize = file.size / 1024 / 1024;
    const fileType = file.type.split("/")[1];
    if (fileSize > 5) {
      setError("File size should be less than 5MB");
      return;
    } else if (!acceptedFileTypes.includes(fileType)) {
      setError("Invalid file type");
      return;
    } else {
      setFile(file);
      onUpload(file);
    }
  };

  const handleInputChange = event => {
    const file = event.target.files[0];
    const fileSize = file.size / 1024 / 1024;
    const fileType = file.type.split("/")[1];
    if (fileSize > 5) {
      setError("File size should be less than 5MB");
      return;
    } else if (!acceptedFileTypes.includes(fileType)) {
      setError("Invalid file type");
      return;
    } else {
      setFile(file);
      onUpload(file);
    }
  };

  const removeFile = index => {
    setFiles(null);
  };

  return (
    <div
      className={`relative border-dashed border-2 rounded-lg py-14 ${
        dragOver
          ? "border-primary"
          : error
            ? "border-red-500"
            : "border-slate-600"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleInputChange}
          className={`
            absolute top-0 left-0 w-full h-full opacity-0 z-10 ${loading ? "cursor-default" : "cursor-pointer"}
          `}
          disabled={loading}
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <i className="fal fa-file-upload text-3xl text-gray-400"></i>
          <p className="text-lg font-medium">{file ? file.name : title}</p>
          <p className="text-sm text-gray-500">{subTitle}</p>
          {error && <p className="text-red-500">{error}</p>}
          <Button variant="btnColor">Upload</Button>
        </div>
      </div>
      {loading && (
        <div className="absolute top-0 bg-slate-700 w-full h-full flex items-center justify-center opacity-70">
          <Loader size={40} />
        </div>
      )}
    </div>
  );
}
