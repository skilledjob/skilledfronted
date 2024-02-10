import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="px-3 my-12">
      <h2 className="categoryTitle">Contact Us</h2>
      <div className="flex justify-center items-center mt-6 gap-14">
        <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-full">
          <FaWhatsapp className="text-4xl mx-auto" />
        </div>
        <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-full">
          <FaFacebookF className="text-4xl mx-auto" />
        </div>
        <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-full">
          <FaLinkedinIn className="text-4xl mx-auto" />
        </div>
      </div>
    </div>
  );
}
