import Navbar from "./components/Navbar/Navbar";

const layout = ({ children }) => {
  return (
    <div className="bg-black">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
