import { MdOutlineMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export default function SigninForm() {
  return (
    <div className="max-w-md p-5 mx-auto mt-10 shadow-md">
      <h2 className="text-center text-3xl font-semibold relative after:absolute after:-bottom-3 after:w-14 after:h-1 after:bg-black after:rounded-full after:right-[43%]">
        Login
      </h2>
      <form className="mt-5 space-y-4">
        <div>
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <div className="flex items-center rounded-md px-3 py-2 bg-[#f3f3f3]">
            <MdOutlineMail className="text-xl" />
            <input
              type="email"
              name="email"
              id="email"
              className="custom-input border-none bg-transparent"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <div className="flex items-center rounded-md px-3 py-2 bg-[#f3f3f3]">
            <FaLock className="text-xl" />
            <input
              type="password"
              name="password"
              id="password"
              className="custom-input border-none bg-transparent"
              placeholder="Password"
            />
          </div>
        </div>
        <span className="text-xs text-black/80 cursor-pointer block text-right leading-none">
          Forgot Password?
        </span>
        <button className="text-lg block bg-blue-900 text-white px-10 py-2 rounded-full font-semibold mx-auto">
          Login
        </button>
      </form>
    </div>
  );
}
