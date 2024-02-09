"use server";

import { endpoints } from "@/app/common";
import { cookies } from "next/headers";
import api from "../api";

export const isAuthenticated = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return false;
  }
  return true;
};

export const login = async data => {
  const response = await api.mutation(endpoints.auth.login, data, "POST");
  if (response?.success) {
    console.log("Data --> ", response?.data?.token);
    cookies().set("token", response?.data?.token, { secure: true });
  }
  return response;
};
