"use client";

export default function Modal({
  children,
  isOpen,
  toggoleModal,
  actionButton,
  width,
  height,
  rounded,
  maxHeight,
  darkMode = false,
}) {
  const modalContainer = {
    width: width ? width : "800px",
    height: height ? height : "auto",
    overflow: "auto",
    // add max height based on props using switch case
    maxHeight: (() => {
      switch (maxHeight) {
        case "screen":
          return "100vh";
        case "95vh":
          return "95vh";
        case "none":
          return "none";
        default:
          return "95vh";
      }
    })(),
    padding: "1rem",

    borderRadius: (() => {
      switch (rounded) {
        case "lg":
          return "1rem";
        case "md":
          return "0.5rem";
        case "sm":
          return "0.25rem";
        case "none":
          return "0";
        default:
          return "0.5rem";
      }
    })(),
    backgroundColor: "rgb(3 7 18)",
    boxShadow: "0 0 0 rgba(0,0,0,0.5)",
  };

  return (
    <>
      {actionButton && actionButton}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.45)] z-[100] flex items-center justify-center"
          onClick={toggoleModal}
        >
          <div
            style={modalContainer}
            className="lg:my-0 my-48 lg:mx-0 mx-4"
            onClick={e => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
