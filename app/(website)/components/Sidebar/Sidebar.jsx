const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`flex md:hidden absolute h-screen ${isOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      <div
        className={`w-64 bg-black/90 p-4 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="text-[#bed6f3] text-center space-y-5 text-lg lg:ml-32 md:ml-10">
          <li className="hover:text-[#FF3988] cursor-pointer">Home</li>
          <li className="hover:text-[#FF3988] cursor-pointer">Job Post</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
