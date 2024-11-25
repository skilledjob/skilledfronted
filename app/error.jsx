"use client";

export default function Error({ error, reset }) {
  if (process.env.NODE_ENV === "development") {
  
  }

  return (
    <div>
      {/* TODO: error component will go here. */}
      <button
        onClick={() => {
          reset();
        }}
      >
        Try again
      </button>
    </div>
  );
}
