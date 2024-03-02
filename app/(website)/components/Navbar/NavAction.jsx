"use client";

import { Avatar } from "@/app/components/ui/avatar";
import { DropdownElement } from "@/app/components/ui/dropdown";
import { getCurrentUser } from "@/app/lib/user";
import { useEffect, useState } from "react";

export default function NavAction({ onLogout }) {
  const [user, setUser] = useState(null);

  /**
   * Fetch the current user
   */
  const getLoggedInUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <div className="w-full h-full cursor-pointer flex justify-end items-center">
      <DropdownElement.DropdownWrapper
        width="full"
        actionElement={
          <div className="flex items-center justify-end gap-3 text-white w-full h-full">
            <div className="">
              <Avatar size="medium" name={"Abdullah"} />
            </div>
            <div className="text-start">
              <p className="text-md text-slate-100">
                {user?.firstName && user?.firstName}{" "}
                {user?.lastName && user?.lastName}
              </p>
              <p className="text-xs text-slate-400">
                {user?.role === "user"
                  ? "Job Seekr"
                  : user?.role === "hirer"
                    ? "Hirer"
                    : "Admin"}
              </p>
            </div>
          </div>
        }
      >
        <DropdownElement.DropdownItem type="link" to="/user/resume">
          Resume
        </DropdownElement.DropdownItem>
        <DropdownElement.DropdownItem onClick={onLogout}>
          Logout
        </DropdownElement.DropdownItem>
      </DropdownElement.DropdownWrapper>
    </div>
  );
}
