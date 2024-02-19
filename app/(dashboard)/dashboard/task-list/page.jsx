import Card from "./components/Card";

export default function Task() {
  return (
    <div className="text-white pr-10 w-full">
      <div>
        <h1 className="text-2xl w-full font-bold mt-10 ml-2 before:w-1 before:h-[80%] relative before:absolute before:bg-[#9ca1b0] before:rounded-full before:top-1 before:-left-2">
          My Tasks
        </h1>
      </div>
      <div className="w-full bg-secondary rounded p-5 mt-5 grid grid-cols-4">
        <Card />
      </div>
    </div>
  );
}
