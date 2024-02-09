"use client";

import cookies from "../utils/cookies";

export const useIsAuthenticated = () => {
  if (typeof window !== "undefined") {
    const token = cookies.get("token");
    if (token) {
      return true;
    }
    // const allCookies = document.cookie;
    // const cookiesArray = allCookies.split("; ");
    // for (let i = 0; i < cookiesArray.length; i++) {
    //   const cookie = cookiesArray[i];
    //   const [cookieName, cookieValue] = cookie.split("=");
    //   if (cookieName.trim() === "token") {
    //     if (cookieValue) {
    //       return true;
    //     }
    //   }
    // }
  }
  return false;
};
