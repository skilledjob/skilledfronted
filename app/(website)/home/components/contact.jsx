import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="px-3 my-12 container">
      <h2 className="categoryTitle">Contact Us</h2>
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center mt-6 gap-5 md:gap-14">
        <div className="w-full h-24 bg-btnColor text-primary flex items-center justify-center rounded">
          <FaWhatsapp className="text-4xl mx-auto" />
        </div>
        <div className="w-full h-24 bg-btnColor text-primary flex items-center justify-center rounded">
          <FaFacebookF className="text-4xl mx-auto" />
        </div>
        <div className="w-full h-24 bg-btnColor text-primary flex items-center justify-center rounded">
          <FaLinkedinIn className="text-4xl mx-auto" />
        </div>
      </div>
    </div>
  );
}
