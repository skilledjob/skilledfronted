import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="px-3 mt-6">
      <h2 className="text-xl font-semibold text-white">Contact Us</h2>
      <div className="grid grid-cols-3 max-w-72 mt-6">
        <FaWhatsapp className="text-white text-4xl mx-auto" />
        <FaWhatsapp className="text-white text-4xl mx-auto" />
        <FaWhatsapp className="text-white text-4xl mx-auto" />
      </div>
    </div>
  );
}
