"use server";

import { cookies } from "next/headers";

export const useIsAuthenticated = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return false;
  }
  return true;
};
