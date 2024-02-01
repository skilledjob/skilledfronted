"use server";

import { endpoints } from "@/app/common";
import api from "../api";
import { postsCache } from "./cache";

export const getPosts = async () => {
  const posts = await api.query(endpoints.post.getPosts, postsCache.tag.all());
  return posts;
};
