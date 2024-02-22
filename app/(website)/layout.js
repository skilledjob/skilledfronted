import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-[80px]">{children}</div>
      <Footer/>
    </div>
  );
};

export default layout;
