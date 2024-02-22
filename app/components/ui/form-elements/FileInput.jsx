/**
 * @name FileInput
 * @description this component represent customize file select button
 * @param {children} children this is the value inside of this component
 * @param {className} className this is the param where the className are storage.
 * @param {accept} accept this param is input file accept attribute.
 * @return this component will return a jsx element.
 *
 * ```
 * usage
 *  <FileInput className="***" accept=".pdf" >{children}<FileInput/>
 *
 */
"use client";
import { useRef, useState } from "react";

export default function FileInput({ children, className, accept }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);

  const selectFile = e => {
    const reader = new FileReader();
  };

  // handle upload click
  const handleClick = e => {
    e.preventDefault();
    if (filePickerRef.current) {
      filePickerRef.current.click();
    }
  };
  return (
    <div>
      <input
        type="file"
        accept={accept}
        onChange={selectFile}
        ref={filePickerRef}
        hidden
      />

      <button
        onClick={handleClick}
        className={`text-lg border border-btnColor bg-transparent px-8 py-2 rounded-md hover:bg-btnColor hover:text-black transition-colors text-btnColor duration-300 ${className}`}
      >
        {children}
      </button>
    </div>
  );
}
