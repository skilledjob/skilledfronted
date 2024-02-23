"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextArea() {
  const [value, setValue] = useState("");

  if (typeof window !== "undefined") {
    return (
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="text-whit"
        placeholder="Write something interesting about you..."
      />
    );
  }
}
