import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Snow theme for ReactQuill

export default function TextEditor({
  value,
  onChange,
  defaultValue,
  placeholder = "Write something interesting about you...",
}) {
  const [editorHtml, setEditorHtml] = useState(value);

  const handleChange = html => {
    setEditorHtml(html);
    if (onChange) {
      onChange(html);
    }
  };

  if (typeof window !== "undefined") {
    return (
      <div className="rich-text-editor">
        <ReactQuill
          theme="snow"
          value={editorHtml}
          onChange={handleChange}
          modules={TextEditor.modules}
          formats={TextEditor.formats}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
        <style jsx global>{`
          .rich-text-editor {
            background-color: #222; /* Dark background color */
            color: #fff; /* Light text color */
            border-radius: 8px;
            padding: 10px;
          }
          .ql-toolbar {
            background-color: white; /* Darker toolbar background color */
            border: none; /* Remove toolbar border */
          }
          .ql-container.ql-snow {
            height: 500px;
            border: 1px solid #414141;
          }
          .ql-editor::before {
            color: white; /* Placeholder color */
          }
        `}</style>
      </div>
    );
  }
}

TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
