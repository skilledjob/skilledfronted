import Card from "./components/Card";

export default function JobPost() {
  return (
    <div className="container">
      <div className="h-72 flex flex-col items-start justify-center ml-36">
        <h1 className="text-3xl font-semibold text-white leading-relaxed tracking-wider">
          Job Post
        </h1>
        <p className="text-white/80">Get The Leatest Job Here.</p>
      </div>
      <div className="grid grid-cols-3 gap-10 px-5">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}
