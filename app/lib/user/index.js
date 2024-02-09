"use server";

import { endpoints } from "@/app/common";
import { cookies } from "next/headers";
import api from "../api";
import { userCache } from "./cache";

export const getCurrentUser = async () => {
  const id = cookies().get("id");
  const response = await api.query(
    endpoints.user.userById(id),
    userCache.tag.userById(id)
  );
  return response;
};
