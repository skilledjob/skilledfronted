"use client";

import Card from "./Card";

export default function TaskList({ selectedCategory }) {
  return (
    <div className="w-full bg-secondary rounded p-5 mt-5 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <Card />
      <Card />
    </div>
  );
}
