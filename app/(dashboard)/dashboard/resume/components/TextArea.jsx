"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextArea() {
  const [value, setValue] = useState("");
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      className="text-whit"
      style={{
        height: "250px",
        width: "100%",
      }}
      placeholder="Write something interesting about you..."
    />
  );
}
