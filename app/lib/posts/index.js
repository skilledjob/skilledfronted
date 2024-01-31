"use server";

import { endpoints } from "@/app/common";
import api from "../api";
import { postsCache } from "./cache";

export const getPosts = async () => {
  try {
    const data = await api.query(endpoints.post.getPosts, postsCache.tag.all());
    return data;
  } catch (error) {
    throw Error(error.message);
  }
};
