"use server";

import { endpoints } from "@/app/common";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import api from "../api";
import { userCache } from "./cache";

export const getCurrentUser = async () => {
  const id = cookies()?.get("id")?.value;
  const response = await api.query(
    endpoints.user.userById(id),
    userCache.tag.userById(id)
  );
  return response;
};

export const revalidateCurrentUser = async () => {
  console.log("Revalidating user", cookies()?.get("id")?.value);
  const id = cookies()?.get("id")?.value;
  revalidateTag(userCache.tag.userById(id));
};
